<?php

use CodeShopping\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)
            ->create([
               'email' => 'admin@user.com'
            ]);
        factory(User::class, 50)
            ->create();
    }
}
