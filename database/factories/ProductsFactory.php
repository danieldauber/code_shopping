<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\Products::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text(400),
        'price' => $faker->randomFloat(2, 0, 100)
    ];
});
