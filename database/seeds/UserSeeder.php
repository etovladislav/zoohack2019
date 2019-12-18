<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::query()->create([
            'name'=> 'Admin',
            'email'=> 'test@admin.ru',
            'password'=> bcrypt('asdasd123')
        ]);
    }
}
