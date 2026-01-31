import { getServerSession } from "next-auth/next";

// Helper function to check if user is authenticated
// Note: This requires NextAuth to be properly configured
export async function requireAuth() {
  try {
    const session = await getServerSession();
    
    if (!session || !session.user) {
      return { authenticated: false, error: "Unauthorized" };
    }
    
    return { authenticated: true, session };
  } catch (error) {
    console.error('Auth check error:', error);
    return { authenticated: false, error: "Authentication failed" };
  }
}
