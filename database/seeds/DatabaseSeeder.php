<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(CategoriesTablesSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(ProductInputsTableSeeder::class);
        $this->call(ProductOutputsTableSeeder::class);
        $this->call(ProductPhotosTableSeeder::class);
    }
}
