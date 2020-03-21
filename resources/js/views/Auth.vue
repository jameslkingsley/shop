<template>
    <div class="flex w-full">
        <div class="w-1/2 mr-8">
            <span class="block text-3xl w-full font-bold">Login</span>

            <div class="block w-full bg-white rounded-md shadow-md p-6">
                <label class="mb-6">
                    <span>Email Address</span>
                    <input type="email" name="email" placeholder="Email Address" />
                </label>

                <label class="mb-6">
                    <span>Password</span>
                    <input type="password" name="password" placeholder="Password" />
                </label>

                <div class="block w-full text-right">
                    <button @click="login" class="px-4 bg-blue-500 text-white">Login</button>
                </div>
            </div>
        </div>

        <div class="w-2/3">
            <span class="block text-3xl w-full font-bold">Register</span>

            <div class="block w-full bg-white rounded-md shadow-md p-6">
                <label class="mb-6">
                    <span>Email Address</span>
                    <input type="email" name="email" placeholder="Email Address" />
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" name="password" placeholder="Password" />
                </label>

                <hr class="my-8" />

                <div class="block w-full">
                    <div class="flex w-full mb-6">
                        <label class="w-1/2">
                            <span>First Name</span>
                            <input name="first_name" placeholder="First Name" />
                        </label>

                        <label class="w-1/2 ml-4">
                            <span>Last Name</span>
                            <input name="last_name" placeholder="Last Name" />
                        </label>
                    </div>

                    <label class="mb-6">
                        <span>Address Line 1</span>
                        <input name="street" placeholder="Street, House Number" />
                    </label>

                    <label class="mb-6">
                        <span>Address Line 2</span>
                        <input name="town" placeholder="Town, Village" />
                    </label>

                    <div class="flex w-full mb-6">
                        <label class="w-1/2">
                            <span>Post Code</span>
                            <input name="zip" placeholder="TR4 9DY" />
                        </label>

                        <label class="w-1/2 ml-4">
                            <span>City</span>
                            <input name="city" placeholder="Truro" value="Truro" disabled />
                        </label>
                    </div>

                    <label>
                        <span>Telephone</span>
                        <input type="number" name="telephone" placeholder="Mobile or home number" />
                    </label>
                </div>

                <div class="block w-full text-right">
                    <button class="px-4 bg-blue-500 text-white">Create Account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
            },

            register() {
            },
        },
    }
</script>
