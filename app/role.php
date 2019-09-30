<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'role_name',
    ];

    public function user() {
        return $this->hasMany(User::class);
    }

}
