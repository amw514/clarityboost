import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher(["/", "/credits(.*)"]);
const isIgnoredRoute = createRouteMatcher(["/api/webhooks(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isIgnoredRoute(req)) {
    return;
  }

  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
