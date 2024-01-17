const { Schema, models, model } = require("mongoose");

const TvShowSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    watchStatus: String,
  },
  {
    timestamps: true,
  }
);

export const TvShow = models?.TvShow || model("TvShow", TvShowSchema);
