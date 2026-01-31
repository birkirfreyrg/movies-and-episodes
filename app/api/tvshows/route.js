import { NextResponse } from "next/server";

import { mongooseConnect } from "../../lib/mongoose";
import { TvShow } from "../../models/TvShow";

export async function POST(request) {
  try {
    // Get the data from the request
    const { title, description, imageUrl, watchStatus, category, rating } =
      await request.json();
    const newTvShow = {
      title,
      description,
      imageUrl,
      watchStatus,
      category,
      rating,
    };
    // connect to the DB
    await mongooseConnect();
    await TvShow.create(newTvShow);
    return NextResponse.json(
      { message: "Tv Show created sucessfully", data: newTvShow },
      { status: 201 }
    );
    // Use the Model to create
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create tv show",
      error,
      status: 500,
    });
  }
}

export async function GET(request) {
  try {
    // connect to the DB
    await mongooseConnect();
    // get the data using the model
    const tvShows = await TvShow.find();
    return NextResponse.json({ message: "Ok", data: tvShows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch tv shows",
      error,
      status: 500,
    });
  }
}

// Delete a tv show
export async function DELETE(request) {
  try {
    // Get the Id of the tv show
    const id = request.nextUrl.searchParams.get("id");
    // Connect to db
    await mongooseConnect();
    // Use the model to delete
    await TvShow.findByIdAndDelete(id);
    // return the response
    return NextResponse.json(
      {
        message: "Tv Show deleted Sucessfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Delete Tv Show",
      error,
      status: 500,
    });
  }
}
