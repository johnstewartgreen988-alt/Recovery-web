import Image from "next/image";
import type { CSSProperties } from "react";

const GALLERY_IMAGES = [
  "/hero.jpg",
  "/investment.jpg",
  "/romance.jpg",
  "/job.jpg",
  "/final.jpg",
];

export function ImageCarousel() {
  const track = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section className="bg-mist-50 py-6 lg:py-8">
      <div
        className="relative overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div
          className="animate-marquee flex w-max gap-4 px-5 hover:[animation-play-state:paused] sm:px-6 lg:px-8"
          style={{ "--marquee-duration": "50s" } as CSSProperties}
        >
          {track.map((src, i) => (
            <div
              key={i}
              className="relative h-[220px] w-[300px] shrink-0 overflow-hidden rounded-2xl sm:h-[260px] sm:w-[360px]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
