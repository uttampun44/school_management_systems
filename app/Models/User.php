<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function roles():BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'role_users');
    }

    public function hasRoles($roles)
    {
        return $this->roles()->whereIn("role_name", $roles)->exists();
    }
    
    public function permissions():BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'permission_roles');
    }

    public function hasPermission($permission)
    {
        return $this->permissions->contain('permission_name', $permission);
    }

    public function student():HasOne
    {
        return $this->hasOne(Student::class, 'user_id');
    }

    public function teacher():HasOne
   {
     return $this->hasOne(Teacher::class, 'user_id');
   }
}
