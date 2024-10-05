<?php

namespace Database\Factories;

use App\Models\ClassRoom;
use App\Models\Section;
use App\Models\Student;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $student = Student::class;
    protected $user = User::class;
    protected $userRole = UserRole::class;
    protected $classRoom = ClassRoom::class;
    protected $section = Section::class;

    public function definition(): array
    {

        $user = User::factory()->create([
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password'), 
        ]);
    
        UserRole::factory()->create([
           'role_id' => 4,
           'user_id' => $user->id
        ]);

        return [
            'full_name' => $user->name,
            'phone_number' => $this->faker->phoneNumber(),
            'date_of_birth' => $this->faker->date(),
            'photo' => $this->faker->image('public/storage/uploads/student/',400,300, null, false),
            'fathers_name' => $this->faker->name(),
            'father_occupation' => $this->faker->word(),
            'mothers_name' => $this->faker->name(),
            'mother_occupation' => $this->faker->word(),
            'address' => $this->faker->address(),
            'classroom_id' => $this->faker->numberBetween(1, 10),
            'section_id' => $this->faker->numberBetween(1, 4),
            'user_id' => $user->id,
        ];
    }
}
