<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $tables = "classroom_sections";
    protected $fillable = ['sections'];

    use HasFactory;
}
