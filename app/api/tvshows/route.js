import { NextResponse } from "next/server";

import { mongooseConnect } from "../../lib/mongoose";
import { TvShow } from "../../models/TvShow";
import { requireAuth } from "../../lib/auth";

export async function POST(request) {
  // Check authentication for write operations
  const auth = await requireAuth();
  if (!auth.authenticated) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
  try {
    // Get the data from the request
    const { title, description, imageUrl, watchStatus, category, rating } =
      await request.json();
    
    // Input validation
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json(
        { message: "Title is required and must be a non-empty string" },
        { status: 400 }
      );
    }
    
    if (rating !== undefined && rating !== null) {
      const ratingNum = parseFloat(rating);
      if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 10) {
        return NextResponse.json(
          { message: "Rating must be a number between 0 and 10" },
          { status: 400 }
        );
      }
    }
    
    const newTvShow = {
      title: title.trim(),
      description: description?.trim() || "",
      imageUrl: imageUrl?.trim() || "",
      watchStatus: watchStatus || "watchlist",
      category: category || "tv-shows",
      rating: rating !== undefined && rating !== null ? parseFloat(rating) : undefined,
    };
    // connect to the DB
    await mongooseConnect();
    await TvShow.create(newTvShow);
    return NextResponse.json(
      { message: "Tv Show created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating tv show:', error);
    return NextResponse.json({
      message: "Failed to create tv show",
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
    console.error('Error fetching tv shows:', error);
    return NextResponse.json({
      message: "Failed to fetch tv shows",
      status: 500,
    });
  }
}

// Delete a tv show
export async function DELETE(request) {
  // Check authentication for write operations
  const auth = await requireAuth();
  if (!auth.authenticated) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
  try {
    // Get the Id of the tv show
    const id = request.nextUrl.searchParams.get("id");
    
    // Validate ObjectId to prevent injection
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
      return NextResponse.json(
        { message: "Invalid TV show ID" },
        { status: 400 }
      );
    }
    
    // Connect to db
    await mongooseConnect();
    // Use the model to delete
    const result = await TvShow.findByIdAndDelete(id);
    
    if (!result) {
      return NextResponse.json(
        { message: "TV show not found" },
        { status: 404 }
      );
    }
    
    // return the response
    return NextResponse.json(
      {
        message: "Tv Show deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting tv show:', error);
    return NextResponse.json({
      message: "Failed to Delete Tv Show",
      status: 500,
    });
  }
}
