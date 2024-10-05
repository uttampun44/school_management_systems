<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Teacher extends Model
{
    protected $table = "teacher_details";

    protected $fillable = ["full_name", "phone_number", "gender", "date_of_birth",
     "address", "photo", "qualification", "class_id", "section_id", "subject_id"];
    use HasFactory;

    public function class():BelongsTo
    {
        return $this->belongsTo(ClassRoom::class, 'class_id');
    }

    public function section():BelongsTo
    {
        return $this->belongsTo(Section::class, 'section_id');
    }

    public function subject():BelongsTo
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }
}
