<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Student extends Model
{
    protected $table = "student_details";

    protected $fillable = ["full_name", "phone_number", "date_of_birth",
      "photo", "fathers_name", "father_occupation", "mothers_name", "mother_occupation",
    "address", "classroom_id", "section_id", 'user_id' ]; 

    use HasFactory;

    public function class():BelongsTo
    {
        return $this->belongsTo(ClassRoom::class, 'classroom_id');
    }

    public function section():BelongsTo
    {
        return $this->belongsTo(Section::class, 'section_id');
    }
}
