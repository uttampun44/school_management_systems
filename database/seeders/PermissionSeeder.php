<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;



class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $permissions = config('permissions');

        if (is_null($permissions)) {
            throw new \Exception("Permissions configuration not found.");
        }

       foreach ($permissions as $permission) {
        Permission::create([
           'permission_name' => $permission['permission_route'],
           'display_name' => $permission['display_name'],
        ]);
       };
    }
}
