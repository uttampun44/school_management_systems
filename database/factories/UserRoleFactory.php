<?php

namespace Database\Factories;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserRole>
 */
class UserRoleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $role = Role::inRandomOrder()->first();

        $user = User::inRandomOrder()->first();

        return [
            'role_id' => $role ? $role->id : 1,
            'user_id' => $user ? $user->id : 1,
        ];
    }
}
