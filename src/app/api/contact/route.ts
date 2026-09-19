import { NextResponse } from "next/server";

/**
 * Placeholder submission handler: a plain HTML form POST that redirects to
 * a real "thank you" page, so the acknowledgment flow works with zero
 * client-side JavaScript. Swap this handler's body for a call to Formspree
 * (or another form backend) once that's wired up — the form's action/method
 * and the redirect-on-success shape stay the same either way.
 */
export async function POST(request: Request) {
  await request.formData();

  return NextResponse.redirect(new URL("/contact/thank-you", request.url), {
    status: 303,
  });
}
