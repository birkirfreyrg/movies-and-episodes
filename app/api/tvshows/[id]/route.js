import { mongooseConnect } from "@/app/lib/mongoose";
import { TvShow } from "@/app/models/TvShow";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    // connect to the DB
    await mongooseConnect();
    // get the data using the model
    const tvShow = await TvShow.findOne({ _id: id });
    return NextResponse.json({ message: "Ok", data: tvShow }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch tv show",
      error,
      status: 500,
    });
  }
}

// Update/Editing a tv show
export async function PUT(request, { params: { id } }) {
  try {
    // Get the data from the request
    const {
      newTitle: title,
      newDescription: description,
      newImageUrl: imageUrl,
      newWatchStatus: watchStatus,
    } = await request.json();
    const newTvShow = {
      title,
      description,
      imageUrl,
      watchStatus,
    };
    // connect to the DB
    await mongooseConnect();
    await TvShow.findByIdAndUpdate(id, newTvShow);
    return NextResponse.json(
      { message: "Tv Show updated sucessfully", data: newTvShow },
      { status: 201 }
    );
    // Use the Model to update
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fetch Tv Show",
      error,
      status: 500,
    });
  }
}
