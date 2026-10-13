const FeatureCards = ({ movies }) => {
    if (movies.length < 3) {
        return null;
    }

    return (
        <section className="mb-15 mt-15">
            <div className="grid h-100 grid-cols-2 grid-rows-2 gap-3 sm:h-125 sm:gap-4 lg:h-150">

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                        src={movies[0].Poster}
                        alt={movies[0].Title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6">
                        <h2 className="text-lg font-bold text-white sm:text-2xl lg:text-4xl">
                            {movies[0].Title}
                        </h2>

                        <button className="mt-2 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-semibold text-black sm:mt-3 sm:px-4 sm:py-2 sm:text-sm lg:mt-4 lg:px-5 lg:py-2 lg:text-base">
                            Watch now
                        </button>
                    </div>
                </div>


                <div className="group relative row-span-2 overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                        src={movies[2].Poster}
                        alt={movies[2].Title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6">
                        <h2 className="text-lg font-bold text-white sm:text-2xl lg:text-4xl">
                            {movies[2].Title}
                        </h2>

                        <button className="mt-2 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-semibold text-black sm:mt-3 sm:px-4 sm:py-2 sm:text-sm lg:mt-4 lg:px-5 lg:py-2 lg:text-base">
                            Watch now
                        </button>
                    </div>
                </div>


                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                        src={movies[1].Poster}
                        alt={movies[1].Title}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bglinear-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6">
                        <h2 className="text-lg font-bold text-white sm:text-2xl lg:text-4xl">
                            {movies[1].Title}
                        </h2>

                        <button className="mt-2 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-semibold text-black sm:mt-3 sm:px-4 sm:py-2 sm:text-sm lg:mt-4 lg:px-5 lg:py-2 lg:text-base">
                            Watch now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureCards;