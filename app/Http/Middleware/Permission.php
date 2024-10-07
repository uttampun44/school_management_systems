<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Permission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$requiredPermission): Response
    {

        $user = Auth::user();

        $allowedRoles = ['Super Admin', 'Admin'];

        if(!$user)
        {
           return response()->json(["message" => "User is not authenticated"], 401);
        }
        Log::info('User Roles:', $user->roles()->pluck('role_name')->toArray());

        if(!$user->hasRoles($allowedRoles))
        {
           
            return response()->json(["message" => "Your are not authorized"],403 );
        }


        $userPermissions = $user->permissions()->pluck('permission_name')->toArray();

        Log::info('User Permissions:', $userPermissions);
        foreach($requiredPermission as $permission)
        {
           if(!in_array($permission, $userPermissions))
           {
             return response()->json(["message" => "You do not have the required permissions"], 403);
           }
        }
        return $next($request);
    }
}
