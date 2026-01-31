// app/lib/mongoose.js

import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      throw new Error(
        'Missing MONGODB_URI environment variable. ' +
        'Please add MONGODB_URI to your .env.local file. ' +
        'For local development, use: mongodb://localhost:27017/movies-dev ' +
        'or your MongoDB Atlas connection string with a dev database name.'
      );
    }
    
    return mongoose.connect(uri);
  }
}
