import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const type = searchParams.get('type') || 'movie'; // movie or tv
  const page = searchParams.get('page') || '1';

  // Input validation
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'Query parameter is required and must be a non-empty string' }, { status: 400 });
  }
  
  if (type !== 'movie' && type !== 'tv') {
    return NextResponse.json({ error: 'Type must be either "movie" or "tv"' }, { status: 400 });
  }
  
  const pageNum = parseInt(page, 10);
  if (isNaN(pageNum) || pageNum < 1 || pageNum > 1000) {
    return NextResponse.json({ error: 'Page must be a number between 1 and 1000' }, { status: 400 });
  }

  const apiKey = process.env.TMDB_API_KEY;
  
  if (!apiKey) {
    console.error('TMDB API key not configured');
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 500 });
  }

  try {
    // Limit query length to prevent abuse
    const sanitizedQuery = query.trim().substring(0, 100);
    const tmdbUrl = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(sanitizedQuery)}&language=en-US&page=${pageNum}`;
    
    const response = await fetch(tmdbUrl);
    
    if (!response.ok) {
      console.error(`TMDB API error: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch from external service' }, { status: 502 });
    }
    
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching from TMDB:', error);
    return NextResponse.json({ error: 'Failed to fetch from external service' }, { status: 500 });
  }
}

