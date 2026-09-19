"use client";

import { useEffect } from "react";

/**
 * Light deterrent against casual image saving: blocks right-click and
 * drag-and-drop specifically on <img> elements, site-wide, without
 * touching every individual Image usage. This is not real protection —
 * anyone can still view source, use dev tools, or screenshot — but it
 * stops the obvious "right-click > Save Image As" and drag-out-to-desktop
 * paths. Text selection and copy-paste (contact info, etc.) are
 * untouched. If JS fails to load, this simply has no effect; nothing
 * else on the site depends on it.
 */
export function ImageProtection() {
  useEffect(() => {
    const blockOnImage = (e: Event) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockOnImage);
    document.addEventListener("dragstart", blockOnImage);

    return () => {
      document.removeEventListener("contextmenu", blockOnImage);
      document.removeEventListener("dragstart", blockOnImage);
    };
  }, []);

  return null;
}
