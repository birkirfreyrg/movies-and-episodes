// app/models/Movie.js

const { Schema, models, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export const Movie = models?.Movie || model("Movie", MovieSchema);
