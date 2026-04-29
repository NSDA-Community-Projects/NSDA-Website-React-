import { useState } from "react";
import SectionWrapper from "../components/common/sectionWrapper";
import { episodes, FEATURED_EPISODE } from "../data/nujum";
import EpisodeSlider from "../components/common/EpisodeSlider";



const Nujum = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Improved YouTube Video ID extractor
  const getVideoId = (url) => {
    if (!url) return null;

    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleWatchLatest = () => {
    if (FEATURED_EPISODE) {
      setSelected(FEATURED_EPISODE);
    }
  };

  // Get featured episode video ID safely
  const featuredVideoId = getVideoId(FEATURED_EPISODE?.videoUrl);

  return (
    <>
     

     <SectionWrapper id="nujum" className="relative overflow-hidden">
        
        {/* HERO SECTION */}
        <div className="relative pt-16 pb-24">
          
        
    <div 
      className="absolute inset-0 z-0 pointer-events-none animate-twinkle"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a192f' fill-opacity='0.1'%3E%3Cpath d='M40 38v4M38 40h4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
      }}
    />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6">
                <span className="text-[#9a7e4d] font-bold text-[10px] uppercase tracking-[0.3em] mb-6 block">
                  THE FLAGSHIP SERIES
                </span>

                <h1 className="text-5xl md:text-7xl font-bold text-[#0a192f] leading-[1.1] mb-8 tracking-tight">
                  Nujum al-Code:<br />
                  <span className="text-[#9a7e4d]">Guiding Lights</span><br />
                  in the Digital Realm
                </h1>

                <p className="text-lg text-gray-500 max-w-lg leading-relaxed mb-10 font-light">
                  Our flagship series featuring deep technical dives with industry pioneers,
                  focusing on both technical mastery and spiritual growth.
                </p>

                <div className="flex items-center gap-6">
                  <button
                    onClick={handleWatchLatest}
                    className="bg-[#0a192f] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#152a4d] transition-all shadow-xl active:scale-95 text-sm"
                  >
                    <span className="material-symbols-outlined !text-xl">play_circle</span>
                    Watch Latest
                  </button>
                  <button className="text-[#0a192f] font-bold hover:text-[#9a7e4d] transition-colors text-sm">
                    View Schedule
                  </button>
                </div>
              </div>

              {/* Featured Video Player */}
              <div className="lg:col-span-6">
                <div
                  onClick={() => FEATURED_EPISODE && setSelected(FEATURED_EPISODE)}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] group cursor-pointer"
                >
                  {/* Thumbnail */}
                  {featuredVideoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`}
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={FEATURED_EPISODE?.title || "Featured Episode"}
                    />
                  ) : (
                    <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Thumbnail unavailable</span>
                    </div>
                  )}

                  {/* Dark Overlay + Play Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/30 to-transparent flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#fdbe54] rounded-full flex items-center justify-center text-[#0a192f] shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <span className="material-symbols-outlined text-4xl translate-x-1">
                        play_arrow
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#fdbe54] text-[#0a192f] text-[9px] font-black px-2 py-0.5 rounded uppercase">
                        Now Playing
                      </span>
                      <span className="text-[10px] font-bold tracking-widest opacity-80 uppercase">
                        EPISODE {FEATURED_EPISODE?.episodeNumber}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold leading-tight">
                      {FEATURED_EPISODE?.title || "Untitled Episode"}
                    </h3>

                    <p className="text-[11px] opacity-70 mt-1 uppercase tracking-wider">
                      Featuring {FEATURED_EPISODE?.author} • {FEATURED_EPISODE?.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Episode Archive */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-[#0a192f] tracking-tight">
              Episode Archive
            </h2>
            <p className="text-gray-400 mt-2 text-sm font-light">
              Browse our library of technical discourse and digital philosophy, where faith meets the cutting edge.
            </p>
          </div>

          {!showAll ? (
            <EpisodeSlider episodes={episodes} onCardClick={setSelected} />
          ) : (
            <div className="grid md:grid-cols-3 gap-10 pb-10">
              {episodes.map((ep) => {
                const videoId = getVideoId(ep.videoUrl);
                const isActive = selected?.id === ep.id;

                return (
                  <div
                    key={ep.id}
                    onClick={() => setSelected(ep)}
                    className={`group bg-white p-5 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border transition-all cursor-pointer hover:shadow-xl
                      ${isActive ? "border-[#9a7e4d]" : "border-gray-50"}`}
                  >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative">
                      {videoId ? (
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                          className={`w-full h-full object-cover transition-all duration-500
                            ${isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
                          alt={ep.title}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">No thumbnail</span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                        {ep.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-left px-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-[#9a7e4d] font-bold uppercase tracking-widest">
                          {ep.category}
                        </span>
                      </div>

                      <h4
                        className={`text-xl font-bold leading-tight line-clamp-2 transition-colors duration-300
                          ${isActive ? "text-[#9a7e4d]" : "text-[#0a192f] group-hover:text-[#9a7e4d]"}`}
                      >
                        {ep.title}
                      </h4>

                      <p className="text-xs text-gray-400 mt-3 font-light line-clamp-2">
                        {ep.description}
                      </p>

                      {/* Author */}
                      <div className="mt-4 flex items-center gap-2">
                        <img
                          src={ep.authorPhoto}
                          className={`w-6 h-6 rounded-full transition-all duration-500
                            ${isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
                          alt={ep.author}
                        />
                        <span className="text-[10px] text-gray-500 font-medium">
                          {ep.author}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Toggle Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-[#0a192f] font-bold text-xs hover:gap-4 transition-all"
            >
              {showAll ? "View Less" : "View All Episodes"}
              <span className="material-symbols-outlined !text-sm">
                {showAll ? "arrow_upward" : "arrow_forward"}
              </span>
            </button>
          </div>
        </div>

        {/* Stay in the Light Section */}
        <div className="mt-20 max-w-8xl mx-auto px-6 pb-20">
          <div className="bg-[#0a192f] rounded-[2.5rem] py-10 px-12 text-white max-w-5xl mx-auto overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-md text-left">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">Stay in the Light</h2>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  Get notified of the next Nujum session and exclusive technical insights delivered to your inbox with focus
                  on ethical development
                </p>
              </div>

              <div className="w-full lg:max-w-sm">
                <div className="flex bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <input 
                    type="email" 
                    placeholder="Your academic email" 
                    className="bg-transparent flex-1 px-4 py-2.5 outline-none text-xs placeholder:text-gray-500 text-white" 
                  />
                  <button className="bg-[#fdbe54] text-[#0a192f] px-6 py-2.5 rounded-lg font-bold text-xs hover:bg-white transition-all active:scale-95">
                    Join List
                  </button>
                </div>
                <p className="text-[8px] text-gray-600 mt-3 uppercase tracking-[0.2em] text-center lg:text-left">
                  BUILDING FOR THE DIGITAL SANCTUARY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selected && (
          <div 
            className="fixed inset-0 bg-[#0a192f]/95 z-[100] flex items-center justify-center p-4 backdrop-blur-md" 
            onClick={() => setSelected(null)}
          >
            <div 
              className="bg-white rounded-[3rem] max-w-5xl w-full overflow-hidden shadow-2xl" 
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video bg-black">
                {getVideoId(selected.videoUrl) ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${getVideoId(selected.videoUrl)}?autoplay=1&rel=0`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    Video unavailable
                  </div>
                )}
              </div>

              <div className="p-10 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-[#0a192f]">{selected.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {selected.author} • {selected.duration}
                  </p>
                </div>
                <button 
                  onClick={() => setSelected(null)} 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="material-symbols-outlined text-gray-600">close</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </SectionWrapper>

    
    </>
  );
};

export default Nujum;