<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_details', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('phone_number');
            $table->string('date_of_birth');
            $table->string('student_class');
            $table->string('photo');
            $table->string('fathers_name');
            $table->string('father_occupation');
            $table->string('mothers_name');
            $table->string('mother_occupation');
            $table->string('adderss');
            $table->foreignId('classroom_id')->constrained('classrooms')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('section_id')->constrained('classroom_sections')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_details');
    }
};
