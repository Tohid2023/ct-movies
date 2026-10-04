// import { useState } from "react";

// const genres = [
//     "Action",
//     "Adventure",
//     "Comedy",
//     "Drama",
//     "Horror",
//     "Romance",
//     "Sci-Fi",
//     "Thriller",
// ];

// function GenreSection() {
//     const [selectedGenre, setSelectedGenre] = useState("Action");

//     return (
//         <section className="mb-10">
//             <div className="mb-5">
//                 <h2 className="text-xl font-semibold text-white md:text-2xl">
//                     Genres
//                 </h2>
//             </div>

//             <div className="flex gap-3 overflow-x-auto pb-2">
//                 {genres.map((genre) => (
//                     <button
//                         key={genre}
//                         onClick={() => setSelectedGenre(genre)}
//                         className={`shrink-0 rounded-full px-5 py-2 text-sm transition ${
//                             selectedGenre === genre
//                                 
//                                 : "bg-[#242424] text-gray-400 hover:text-white"
//                         }`}
//                     >
//                         {genre}
//                     </button>
//                 ))}
//             </div>

//             <p className="mt-4 text-sm text-gray-500">
//                 Selected genre: {selectedGenre}
//             </p>
//         </section>
//     );
// }

// export default GenreSection;