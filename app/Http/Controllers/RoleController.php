<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index()
    {
        return Inertia::render('Role/Index')->with('roles', Role::select('id', 'role_name')->get());
    }

    public function edit($id)
    {
        $roleEdit = Role::find($id);
        
        $permissions = Permission::select('id','permission_name', 'display_name')->get();

   
        return Inertia::render('Role/Edit')->with([
            'roles' => $roleEdit,
            'permissions' => $permissions
        ]);
    }

    public function update()
    {
        
    }
}
