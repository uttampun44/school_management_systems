<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Permission;

class Role extends Model
{

    protected $table = "roles";
    protected $fillable = ["role_name"];

    use HasFactory;

    public function users():BelongsToMany
    {
        return $this->belongsToMany(User::class, 'role_users');
    }

    public function permissions():BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'permission_roles');
    }
    
    public function hasPermission($permission)
    {
        return $this->permissions->contain('permission_name', $permission);
    }
}
