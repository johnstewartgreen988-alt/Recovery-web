import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allows the dev server (JS chunks, HMR) to work when opened from another
  // device on the LAN, e.g. testing on a phone via http://<lan-ip>:3000.
  allowedDevOrigins: ["192.168.1.12"],
};

export default nextConfig;
