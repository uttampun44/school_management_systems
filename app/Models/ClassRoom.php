<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ClassRoom extends Model
{
    protected $table = "classrooms";
    protected $fillable = ["grade"];


    public function student():HasOne
    {
        return $this->hasOne(Student::class, 'classroom_id');
    }
    use HasFactory;
}
