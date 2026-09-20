import { NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myezkjyy";

/**
 * A plain HTML form POST that forwards to Formspree and redirects to a
 * real "thank you" page, so the whole flow works with zero client-side
 * JavaScript.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  formData.set("_subject", "New message from the Regainr contact form");

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    return NextResponse.redirect(new URL("/contact?error=1", request.url), {
      status: 303,
    });
  }

  return NextResponse.redirect(new URL("/contact/thank-you", request.url), {
    status: 303,
  });
}
