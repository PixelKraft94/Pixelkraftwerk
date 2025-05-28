import React from 'react';
import PlaceholderSection from '../components/PlaceholderSection';

const Features: React.FC = () => {
  return (
    <div className="pt-24 bg-dark-500 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-500 font-heading font-bold mb-6 text-center">
          Unsere Features
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-light-200 mb-12 text-center">
            Entdecken Sie die leistungsstarken Funktionen unserer KI-Lösungen.
          </p>
          
          <PlaceholderSection 
            title="Inhalte folgen in Kürze" 
            subtitle="Diese Seite wird mit detaillierten Informationen zu unseren Features aktualisiert."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;