<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    protected $table = "teacher_details";
    protected $fillable = ["full_name", "phone_number", "gender", "date_of_birth",
     "address", "photo", "qualification", "class_id", "section_id", "subject_id"];
    use HasFactory;
}
