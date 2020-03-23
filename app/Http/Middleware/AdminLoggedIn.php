<?php

namespace App\Http\Middleware;

use Closure;

class AdminLoggedIn
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (! session('admin_logged_in', false)) {
            return response(abort(403));
        }

        return $next($request);
    }
}
