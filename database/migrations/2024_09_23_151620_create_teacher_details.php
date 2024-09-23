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
        Schema::create('teacher_details', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('phone_number');
            $table->string('date_of_birth');
            $table->string('address');
            $table->string('photo')->nullable();
            $table->string('qualification');
            $table->foreignId('class_id')->constrained('classrooms')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('section_id')->constrained('classroom_sections')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacher_details');
    }
};
