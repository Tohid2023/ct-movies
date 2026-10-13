import React from 'react'

const FeaturedBanner = ({movie}) => {

  return (
        <section className="relative mb-8 min-h-90 overflow-hidden rounded-2xl md:mb-10 md:min-h-95">
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative flex h-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-6xl border border-white/50 p-6 md:p-8">

                    <div className="mb-8 flex items-center justify-between">
                        <p className="text-sm tracking-widest text-white">
                            {movie.Genre?.split(",").slice(0,2).join(", ")}
                        </p>

                        <p className="text-sm tracking-widest text-white">
                            {movie.Type}
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                        <p className="max-w-md text-sm font-semibold uppercase leading-7 text-gray-300 md:text-base">
                            {movie.Plot}
                        </p>

                        <button className="flex w-fit items-center gap-3 sm:text-sm md:text-xl lg:text-2xl font-semibold text-[#f5c400]">
                            WATCH TRAILER
                        </button>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="mb-2 text-sm font-semibold text-white md:text-md lg:text-lg">
                            {movie.Year}
                        </p>

                        <h2 className=" font-bold uppercase text-white sm:text-2xl md:text-4xl lg:text-6xl">
                            {movie.Title}
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedBanner