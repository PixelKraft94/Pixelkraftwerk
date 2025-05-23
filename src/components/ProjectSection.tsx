import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const projectImages = [
  "/Bildschirmfoto 2025-05-23 um 19.44.47.png",
  "/Bildschirmfoto 2025-05-23 um 19.45.22.png",
  "/Bildschirmfoto 2025-05-23 um 19.46.00.png"
];

const ProjectSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  
  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };
  
  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="projects" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary-500">
            Unser letztes Projekt_
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div 
                className="bg-dark-300 aspect-video relative overflow-hidden cursor-pointer"
                onClick={openLightbox}
              >
                <img 
                  src={projectImages[currentImageIndex]}
                  alt={`HTPP Sportwagenvermietung Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-dark-500 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Previous slide"
                  onClick={goToPrevious}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-dark-500 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Next slide"
                  onClick={goToNext}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Image indicator dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-primary-500' : 'bg-dark-100'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-500 mb-4">
                HTPP Sportwagenvermietung
              </h3>
              <p className="text-light-200 mb-6">
                Wir haben eine maßgeschneiderte, benutzerfreundliche Website für eine Sportwagenvermietung in Leipzig entwickelt. 
                Sie ermöglicht schnelle Buchungsanfragen, liefert alle wichtigen Fahrzeuginfos und bietet eine reibungslose Nutzererfahrung. 
                Dank unserer Betreuung sind Änderungen jederzeit blitzschnell umsetzbar.
              </p>
              <a 
                href="https://htpp-sportwagenvermietung.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-primary-500 text-primary-500 font-heading hover:bg-primary-500 hover:text-dark-500 transition-colors duration-300"
              >
                Website ansehen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] p-4 transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-primary-500 text-dark-500 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div className="relative h-full">
              <img 
                src={projectImages[currentImageIndex]}
                alt={`HTPP Sportwagenvermietung Screenshot ${currentImageIndex + 1}`}
                className="object-contain max-h-[80vh] mx-auto"
              />
              
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-dark-500 w-12 h-12 rounded-full flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious(e);
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-dark-500 w-12 h-12 rounded-full flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext(e);
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            
            {/* Image indicator dots */}
            <div className="flex justify-center mt-4 space-x-3">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-primary-500' : 'bg-dark-100'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;