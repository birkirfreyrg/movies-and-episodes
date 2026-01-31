import { mongooseConnect } from "@/app/lib/mongoose";
import { TvShow } from "@/app/models/TvShow";
import { NextResponse } from "next/server";
import { requireAuth } from "@/app/lib/auth";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    // Validate ObjectId to prevent injection
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
      return NextResponse.json(
        { message: "Invalid TV show ID" },
        { status: 400 }
      );
    }
    
    // connect to the DB
    await mongooseConnect();
    // get the data using the model
    const tvShow = await TvShow.findOne({ _id: id });
    
    if (!tvShow) {
      return NextResponse.json(
        { message: "TV show not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Ok", data: tvShow }, { status: 200 });
  } catch (error) {
    console.error('Error fetching tv show:', error);
    return NextResponse.json({
      message: "Failed to fetch tv show",
      status: 500,
    });
  }
}

// Update/Editing a tv show
export async function PUT(request, { params }) {
  // Check authentication for write operations
  const auth = await requireAuth();
  if (!auth.authenticated) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
  
  try {
    const { id } = await params;
    
    // Validate ObjectId to prevent injection
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
      return NextResponse.json(
        { message: "Invalid TV show ID" },
        { status: 400 }
      );
    }
    
    // Get the data from the request
    const {
      newTitle: title,
      newDescription: description,
      newImageUrl: imageUrl,
      newWatchStatus: watchStatus,
      newCategory: category,
      newRating: rating,
    } = await request.json();
    
    // Input validation
    if (title !== undefined && (!title || typeof title !== 'string' || title.trim().length === 0)) {
      return NextResponse.json(
        { message: "Title must be a non-empty string" },
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
    
    const updateData = {};
    if (title !== undefined) updateData.title = title.trim();
    if (description !== undefined) updateData.description = description?.trim() || "";
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl?.trim() || "";
    if (watchStatus !== undefined) updateData.watchStatus = watchStatus;
    if (category !== undefined) updateData.category = category;
    if (rating !== undefined) updateData.rating = rating !== null ? parseFloat(rating) : undefined;
    
    // connect to the DB
    await mongooseConnect();
    const updatedTvShow = await TvShow.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedTvShow) {
      return NextResponse.json(
        { message: "TV show not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: "Tv Show updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating tv show:', error);
    return NextResponse.json({
      message: "Failed to update Tv Show",
      status: 500,
    });
  }
}
