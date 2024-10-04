<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Section extends Model
{
    protected $table = "classroom_sections";
    protected $fillable = ['sections'];

    public function student():HasOne
    {
        return $this->hasOne(Student::class, 'section_id');
    }

    public function teacher():HasOne
    {
        return $this->HasOne(Teacher::class, 'section_id');
    }
    use HasFactory;
}
