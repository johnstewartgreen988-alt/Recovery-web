import Image from "next/image";

const PRESS_LOGOS = [
  { name: "The Wall Street Journal", src: "/press-wsj.jpg" },
  { name: "BBC", src: "/press-bbc.png" },
  { name: "The New York Times", src: "/press-nyt.jpg" },
  { name: "Financial Times", src: "/press-ft.png" },
  { name: "New York Post", src: "/press-nypost.png" },
];

export function PressStrip() {
  const track = [...PRESS_LOGOS, ...PRESS_LOGOS];

  return (
    <section className="bg-mist-50 py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-3 px-5 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:px-8">
        <span className="shrink-0 text-sm text-ink-500">Covered by:</span>

        <div className="relative min-w-0 w-full flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-16 hover:[animation-play-state:paused]">
            {track.map((logo, i) => (
              <div
                key={i}
                className="relative h-8 w-28 shrink-0 grayscale sm:h-9 sm:w-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="140px"
                  className="object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
