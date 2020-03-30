<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'steven@shortlanesendstore.co.uk',
            'email_verified_at' => now(),
            'password' => bcrypt(config('auth.admin_secret')),
        ]);
    }
}
