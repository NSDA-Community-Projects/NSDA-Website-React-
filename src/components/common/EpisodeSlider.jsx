import React, { useState } from "react";

const EpisodeSlider = ({ episodes, onCardClick }) => {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 3;

  
  //  YouTube ID extractor
 
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
    <div className="flex flex-col items-center w-full py-10 bg-surface">
      

      <div className="flex items-center gap-6 w-full max-w-7xl">

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-surface border border-primary/10 hover:bg-primary/5 transition flex items-center justify-center text-primary"
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
               className="w-full sm:w-1/3 bg-surface rounded-[2rem] overflow-hidden border border-primary/20 shadow-[0_8px_30px_rgba(1,52,99,0.08)] hover:shadow-[0_20px_50px_rgba(1,52,99,0.12)] transition-all duration-500 cursor-pointer group"
              >
              
                {/* IMAGE */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={ep.title}
                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-105"
                  />

                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md">
                    {ep.duration}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-left">

                  {/* CATEGORY */}
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest">
                  
                    {ep.category}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-primary font-headline font-bold text-lg mt-2 line-clamp-2">
           
                    {ep.title}
                  </h3>

                  {/* AUTHOR */}
                  <div className="flex items-center gap-2 mt-3">

                    <img
                      src={
                        ep.authorPhoto ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(ep.author)}`
                      }
                      className="w-7 h-7 rounded-full border border-primary/10"
                    />

                    <span className="text-xs text-primary/60 font-body">
                    
                      {ep.author}
                    </span>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-surface border border-primary/10 hover:bg-primary/5 transition flex items-center justify-center text-primary"
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
                ? "w-8 bg-primary"
                : "w-2 bg-primary/20"
            }`}
          />
        ))}

      </div>
    </div>
  );
};

export default EpisodeSlider;