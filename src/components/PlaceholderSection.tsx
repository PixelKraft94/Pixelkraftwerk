import React from 'react';

interface PlaceholderSectionProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ 
  title, 
  subtitle = "Dieser Bereich wird später mit Inhalten gefüllt.", 
  id,
  className = ""
}) => {
  return (
    <section id={id} className={`py-24 bg-dark-400 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500">
            {title}
          </h2>
          <p className="text-light-200 mb-8">
            {subtitle}
          </p>
          <div className="border border-dashed border-primary-500/30 p-12 rounded flex items-center justify-center">
            <span className="text-primary-500/60 font-heading">// Inhalte folgen später</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;