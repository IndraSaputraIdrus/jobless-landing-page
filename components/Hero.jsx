export default function Hero() {
  return (
    <div className="container mx-auto my-44 2xl:my-32">
      <div className="flex items-center justify-center">
        <div className="max-w-[653px] text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Get Connected to the Best Remote Jobs in Your Field
          </h1>
          <p className="text-black/60 mx-auto w-[536px] mb-6">
            Discover a wide range of remote opportunities on our platform and
            take control of your career
          </p>
          <a
            href="#jobs"
            className="inline-block bg-accent font-semibold text-white px-4 py-3 rounded-full mr-7 border-2 border-accent transition duration-300 hover:bg-transparent hover:border-black hover:text-black"
          >
            Remote Explore Jobs
          </a>
          <a
            href="#"
            className="text-accent underline font-semibold transition duration-300 hover:text-black"
          >
            How it works?
          </a>
        </div>
      </div>
    </div>
  );
}
