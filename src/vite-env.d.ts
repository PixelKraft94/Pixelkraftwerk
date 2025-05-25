/// <reference types="vite/client" />

interface Window {
  VG_CONFIG: {
    ID: string;
    region: string;
    render: 'full-width' | 'bottom-left' | 'bottom-right';
    stylesheets: string[];
    modalMode?: boolean;
    user?: {
      name?: string;
      email?: string;
      phone?: string;
    };
    userID?: string;
    autostart?: boolean;
  };
}