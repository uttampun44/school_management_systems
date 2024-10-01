<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Student extends Model
{
    protected $table = "student_details";

    protected $fillable = ["full_name", "phone_number", "date_of_birth",
     "student_class", "photo", "fathers_name", "father_occupation", "mother_name", "mother_occupation",
    "address", "classroom_id", "section_id" ]; 

    use HasFactory;

    public function class():HasOne
    {
        return $this->hasOne(ClassRoom::class);
    }

    public function section():HasOne
    {
        return $this->hasOne(Section::class);
    }
}
