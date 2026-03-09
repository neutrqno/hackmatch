export default function Hero() {

  return (

    <section className="bg-black text-white min-h-screen flex items-center px-16">

      <div className="flex w-full justify-between items-center">

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold leading-tight">
            Find your one
            <br/>
            <span className="text-purple-500">
              {"< For Hacking />"}
            </span>
          </h1>

          <p className="text-gray-400 mt-6">
            Connect with talented developers, designers, and innovators
            to build amazing projects at hackathons.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="/swipe"
              className="bg-purple-600 px-6 py-3 rounded-lg"
            >
              Find Partners
            </a>

            <a
              href="/"
              className="border border-gray-700 px-6 py-3 rounded-lg"
            >
              Upload Profile
            </a>

          </div>

        </div>

        <div className="flex gap-6">

          <div className="w-48 h-80 bg-gray-800 rounded-xl rotate-6"></div>
          <div className="w-48 h-80 bg-gray-700 rounded-xl -rotate-6"></div>

        </div>

      </div>

    </section>

  )
}