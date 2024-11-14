import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

const publicRoutes = createRouteMatcher([
  "/",
  "/api/webhook/register",
  "/sign-in",
  "/sign-up",
]);

export default clerkMiddleware(async (authFn, req) => {
  const { userId } = await authFn(); // Correctly call the auth function

  if (!userId && !publicRoutes(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (userId) {
    try {
      const user = await clerkClient.users.getUser(userId); // Fetch user data
      const role = user.publicMetadata.role;
      console.log(role);

      if (role === "admin" && req.nextUrl.pathname === "/dashboard") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }

      if (role !== "admin" && req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      if (publicRoutes(req)) {
        return NextResponse.redirect(
          new URL(role === "Admin" ? "/admin/dashboard" : "/dashboard", req.url)
        );
      }
    } catch (error) {
      console.error("Error fetching user data from Clerk:", error);
      return NextResponse.redirect(new URL("/error", req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
