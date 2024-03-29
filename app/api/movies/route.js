// app/api/movies/page.js

import { NextResponse } from "next/server";

import { mongooseConnect } from "../../lib/mongoose";
import { Movie } from "../../models/Movie";

function addCorsHeaders(response) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Or your specific origin
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST(request) {
  try {
    // Get the data from the request
    const { title, description, imageUrl, watchStatus, category } =
      await request.json();
    const newMovie = {
      title,
      description,
      imageUrl,
      watchStatus,
      category,
    };
    // connect to the DB
    await mongooseConnect();
    await Movie.create(newMovie);
    const response = NextResponse.json(
      { message: "Movie created successfully", data: newMovie },
      { status: 201 }
    );
    return addCorsHeaders(response);
    // Use the Model to create
  } catch (error) {
    const response = NextResponse.json(
      { message: "Failed to create movie", error },
      { status: 500 }
    );
    return addCorsHeaders(response);
  }
}

export async function GET(request) {
  try {
    // connect to the DB
    await mongooseConnect();
    // get the data using the model
    const movies = await Movie.find();
    const response = NextResponse.json(
      { message: "Ok", data: movies },
      { status: 200 }
    );
    return addCorsHeaders(response);
  } catch (error) {
    const response = NextResponse.json(
      { message: "Failed to fetch movies", error },
      { status: 500 }
    );
    return addCorsHeaders(response);
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
    const response = NextResponse.json(
      { message: "Movie deleted Successfully" },
      { status: 200 }
    );
    return addCorsHeaders(response);
  } catch (error) {
    const response = NextResponse.json(
      { message: "Failed to delete movie", error },
      { status: 500 }
    );
    return addCorsHeaders(response);
  }
}

// Handle OPTIONS request for CORS preflight
export function middleware(request) {
  if (request.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 200 });
    return addCorsHeaders(response);
  }
  return NextResponse.next();
}
