export default function Features() {

  return (

    <section className="bg-zinc-950 text-white py-24 px-16">

      <h2 className="text-4xl font-bold text-center mb-16">
        Why HackMatch
      </h2>

      <div className="grid grid-cols-3 gap-10">

        <div className="bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Swipe Teammates
          </h3>

          <p className="text-gray-400">
            Browse hackers and swipe to find your perfect team.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Filter Hackathons
          </h3>

          <p className="text-gray-400">
            Only match with people attending the same event.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Connect Instantly
          </h3>

          <p className="text-gray-400">
            Copy GitHub, Discord, and LinkedIn in one click.
          </p>
        </div>

      </div>

    </section>

  )
}