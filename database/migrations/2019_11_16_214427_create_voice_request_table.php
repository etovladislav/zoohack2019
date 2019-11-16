<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVoiceRequestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'requests',
            function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('phone');
                $table->string('location')->nullable();
                $table->text('text');
                $table->double('text_confidence');
                $table->json('categories');
                $table->string('voice');
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('voice_request');
    }
}
