import React, { useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: any) => void;
      };
    };
  }
}

const VoiceflowChat: React.FC = () => {
  const { hasConsent } = useCookieConsent();

  useEffect(() => {
    if (typeof window === 'undefined' || !hasConsent) return;

    const loadVoiceflowChat = () => {
      const existingScript = document.getElementById('voiceflow-chat-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.id = 'voiceflow-chat-script';
      script.type = 'text/javascript';
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

      script.onload = () => {
        if (window.voiceflow?.chat) {
          window.voiceflow.chat.load({
            verify: { projectID: '67de6765a6193729493f4a22' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: 'https://runtime-api.voiceflow.com',
            },
          });
        }
      };

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    };

    loadVoiceflowChat();

    return () => {
      const script = document.getElementById('voiceflow-chat-script');
      if (script) {
        script.remove();
      }
    };
  }, [hasConsent]);

  return null;
};

export default VoiceflowChat;
