"use server";

import { cookies } from "next/headers";

export async function dismissCookieBanner() {
  const cookieStore = await cookies();
  cookieStore.set("cookie-notice-dismissed", "1", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}
