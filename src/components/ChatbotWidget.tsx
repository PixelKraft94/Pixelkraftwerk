import React, { useEffect } from 'react';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    // Create container div if it doesn't exist
    if (!document.getElementById('VG_OVERLAY_CONTAINER')) {
      const container = document.createElement('div');
      container.id = 'VG_OVERLAY_CONTAINER';
      container.style.width = '0';
      container.style.height = '0';
      document.body.appendChild(container);
    }

    // Initialize chatbot configuration
    window.VG_CONFIG = {
      ID: "u10c2ix89va9y2cx", // YOUR AGENT ID
      region: 'eu', // YOUR ACCOUNT REGION 
      render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
      stylesheets: [
        // Base TIXAE Agents CSS
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    // Add the script
    const script = document.createElement('script');
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      document.querySelectorAll('script').forEach(el => {
        if (el.src === "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js") {
          el.remove();
        }
      });
      
      // Remove container if it exists
      const containerElement = document.getElementById('VG_OVERLAY_CONTAINER');
      if (containerElement) {
        containerElement.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default ChatbotWidget;