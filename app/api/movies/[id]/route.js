import { mongooseConnect } from "@/app/lib/mongoose";
import { Movie } from "@/app/models/Movie";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    // connect to the DB
    await mongooseConnect();
    // get the data using the model
    const movie = await Movie.findOne({ _id: id });
    return NextResponse.json({ message: "Ok", data: movie }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch movie",
      error,
      status: 500,
    });
  }
}

// Update/Editing a movie
export async function PUT(request, { params: { id } }) {
  try {
    // Get the data from the request
    const {
      newTitle: title,
      newDescription: description,
      newImageUrl: imageUrl,
      newWatchStatus: watchStatus,
      newCategory: category,
    } = await request.json();
    const newMovie = {
      title,
      description,
      imageUrl,
      watchStatus,
      category,
    };
    // connect to the DB
    await mongooseConnect();
    await Movie.findByIdAndUpdate(id, newMovie);
    return NextResponse.json(
      { message: "Movie updated sucessfully", data: newMovie },
      { status: 201 }
    );
    // Use the Model to update
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch movies",
      error,
      status: 500,
    });
  }
}
