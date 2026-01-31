// app/api/movies/page.js

import { NextResponse } from "next/server";

import { mongooseConnect } from "../../lib/mongoose";
import { Movie } from "../../models/Movie";

export async function POST(request) {
  try {
    // Get the data from the request
    const { title, description, imageUrl, watchStatus, category, rating } =
      await request.json();
    const newMovie = {
      title,
      description,
      imageUrl,
      watchStatus,
      category,
      rating,
    };
    // connect to the DB
    await mongooseConnect();
    await Movie.create(newMovie);
    return NextResponse.json(
      { message: "Movie created successfully", data: newMovie },
      { status: 201 }
    );
    // Use the Model to create
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create movie", error },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // connect to the DB
    await mongooseConnect();
    // get the data using the model
    const movies = await Movie.find();
    return NextResponse.json({ message: "Ok", data: movies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch movies", error },
      { status: 500 }
    );
  }
}

// Delete a movie
export async function DELETE(request) {
  try {
    // Get the Id of the movie
    const id = request.nextUrl.searchParams.get("id");
    // Connect to db
    await mongooseConnect();
    // Use the model to delete
    await Movie.findByIdAndDelete(id);
    // return the response
    return NextResponse.json(
      { message: "Movie deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete movie", error },
      { status: 500 }
    );
  }
}
