<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParentDetail extends Model
{
    protected $table = "parent_details";
    protected $fillable = ["full_name", "phone_number", "date_of_birth", "student_name", "student_class", "photo", "address", "student_id"];
    
    use HasFactory;
}
