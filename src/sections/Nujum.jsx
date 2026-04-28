import React, { useEffect, useRef } from 'react';

export default function Nujum() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    // Force iframe reload to ensure clarity
    const iframe1 = videoRef1.current;
    const iframe2 = videoRef2.current;
    
    if (iframe1) {
      const src = iframe1.src;
      iframe1.src = '';
      iframe1.src = src;
    }
    
    if (iframe2) {
      const src = iframe2.src;
      iframe2.src = '';
      iframe2.src = src;
    }
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="nujum" style={{ backgroundColor: '#013463' }}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nujum al-Code</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Deep technical dives with industry pioneers from NSDA Community.</p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#DDA23A' }}></div>
        </div>
        
        {/* Two YouTube Videos - High Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
            <iframe 
              ref={videoRef1}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/wu2oWKUMjhc?rel=0&modestbranding=1&showinfo=0&autoplay=0&enablejsapi=1"
              title="Nujum al-Code Episode 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
            <iframe 
              ref={videoRef2}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/nHjT8h-vJgA?rel=0&modestbranding=1&showinfo=0&autoplay=0&enablejsapi=1"
              title="Nujum al-Code Episode 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://youtube.com/@NSDA_Community" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-10 py-4 font-bold uppercase tracking-wide transition-all"
            style={{ backgroundColor: '#DDA23A', color: '#013463', borderRadius: '9999px', textDecoration: 'none' }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            <i className="fab fa-youtube"></i> Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}