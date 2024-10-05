<?php

namespace Database\Factories;

use App\Models\Teacher;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $teachers = Teacher::class;

    public function definition(): array
    {

        $user = User::factory()->create([
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => Hash::make('password'), 
        ]);
    
        UserRole::factory()->create([
           'role_id' => 3,
           'user_id' => $user->id
        ]);

        return [
            'full_name' => $user->name,
            'phone_number' => $this->faker->phoneNumber(),
            'gender' => $this->faker->randomElement(["Male", "Female"]),
            'date_of_birth' => $this->faker->date(),
            'address' => $this->faker->address(),
            'photo' => $this->faker->image('public/storage/uploads/teachers/',400,300, null, false),
            'qualification' => $this->faker->randomElement(["Bachelor", "Master", "P.H.D"]),
            'class_id' => $this->faker->numberBetween(1, 10),
            'section_id' => $this->faker->numberBetween(1, 4),
            'subject_id' => $this->faker->numberBetween(1, 7),
            'user_id' => $user->id,
        ];
    }
}
