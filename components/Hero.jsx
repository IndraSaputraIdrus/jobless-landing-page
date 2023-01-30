import clsx from "clsx";

export default function Hero() {
  return (
    <div className="container mx-auto my-28 md:my-44 2xl:my-32">
      <div className="px-4 md:px-0 flex items-center justify-center">
        <div className="max-w-[653px] text-center">
          <h1
            className={clsx(
              "text-3xl md:text-4xl font-semibold",
              "mx-auto mb-4",
              "max-w-sm sm:max-w-md md:max-w-full"
            )}
          >
            Get Connected to the Best Remote Jobs in Your Field
          </h1>
          <p
            className={clsx(
              "text-black/60",
              "text-sm md:text-base",
              "mb-6 mx-auto",
              "max-w-[300px] sm:max-w-[400px] md:max-w-[536px]"
            )}
          >
            Discover a wide range of remote opportunities on our platform and
            take control of your career
          </p>
          <div className="flex flex-wrap items-center justify-center gap-7">
            <a
              href="#jobs"
              className={clsx(
                "inline-block px-4 py-2 md:py-3",
                "text-white text-sm md:text-base font-semibold",
                "border-2 border-accent",
                "rounded-full bg-accent",
                "transition duration-300",
                "hover:bg-transparent hover:border-black hover:text-black"
              )}
            >
              Remote Explore Jobs
            </a>
            <a
              href="#"
              className={clsx(
                "text-accent font-semibold text-sm md:text-base underline",
                "transition duration-300",
                "hover:text-black"
              )}
            >
              How it works?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
