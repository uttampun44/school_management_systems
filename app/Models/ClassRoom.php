<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassRoom extends Model
{
    protected $tables = "classrooms";
    protected $fillable = ["grade"];

    
    use HasFactory;
}
