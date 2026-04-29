import React, { useState } from "react";

const EpisodeSlider = ({ episodes, onCardClick }) => {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 3;

  const getVideoId = (url = "") => {
    if (!url) return "";
    return url.split("youtu.be/")[1]?.split("?")[0] || "";
  };

  const nextSlide = () => {
    if (startIndex + itemsPerPage < episodes.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleEpisodes = episodes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col items-center w-full py-10">

      <div className="flex items-center gap-6 w-full max-w-7xl">

        {/* LEFT */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center text-[#0a192f]"
        >
          ‹
        </button>

        {/* CARDS */}
        <div className="flex flex-1 gap-6 justify-center">
          {visibleEpisodes.map((ep) => {
            const videoId = getVideoId(ep.videoUrl);

            return (
              <div
                key={ep.id}
                onClick={() => onCardClick(ep)}
                className="w-full sm:w-1/3 bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group"
              >

                {/* IMAGE */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={ep.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] px-2 py-1 rounded-md">
                    {ep.duration}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-left">

                  <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">
                    {ep.category}
                  </span>

                  <h3 className="text-[#0a192f] font-bold text-lg mt-2 line-clamp-2">
                    {ep.title}
                  </h3>

                  {/* AUTHOR SECTION*/}
                  <div className="flex items-center gap-2 mt-3">
                    <img
                      src={
                        ep.authorPhoto ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(ep.author)}`
                      }
                      alt={ep.author}
                      className="w-7 h-7 rounded-full object-cover border border-white"
                    />

                    <span className="text-xs text-gray-600 font-medium">
                      {ep.author}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center text-[#0a192f]"
        >
          ›
        </button>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-8">
        {episodes.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              i >= startIndex && i < startIndex + itemsPerPage
                ? "w-8 bg-[#0a192f]"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodeSlider;