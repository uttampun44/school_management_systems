<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $table = "role_users";
    protected $fillable = ["role_id", "user_id"];
    use HasFactory;
}
