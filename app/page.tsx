import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative mx-auto h-screen w-full max-w-[1920px]">
        <Image
          src="/v-hero 1.png"
          width={1600}
          height={1600}
          alt="person with flowers"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="container absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex max-w-md flex-col gap-6 rounded-lg bg-black/50 p-8 text-white">
          <div className="text-4xl">
            Creating unforgettable moments, one celebration at a time.
          </div>
          <div className="text-lg">
            With 40 years of industry experience, our amazing team
            guarantees a flawless execution. Whether you&apos;ve
            dreamed of this day since childhood or only recently
            started planning, we&apos;re committed to making your
            event truly special.
          </div>
          <div>Book A Tour</div>
        </div>
      </div>
    </main>
  );
}
