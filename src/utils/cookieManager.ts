/**
 * Utility functions for managing cookies in a GDPR/DSGVO compliant way
 */

import { CookieType } from '../types';

type CookieOptions = {
  path?: string;
  domain?: string;
  expires?: number | Date;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
};

/**
 * Set a cookie with the given name and value
 */
export const setCookie = (name: string, value: string, options: CookieOptions = {}): void => {
  const cookieConsent = getConsentState();
  
  // Check if the cookie type is consented to
  const cookieType = getCookieType(name);
  if (cookieType !== 'necessary' && !isConsentedTo(cookieType)) {
    console.warn(`Cookie "${name}" of type "${cookieType}" was not set because consent is missing`);
    return;
  }
  
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
  if (options.expires) {
    if (typeof options.expires === 'number') {
      const days = options.expires;
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      cookieString += `; expires=${date.toUTCString()}`;
    } else {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
  }
  
  if (options.path) cookieString += `; path=${options.path}`;
  if (options.domain) cookieString += `; domain=${options.domain}`;
  if (options.secure) cookieString += '; secure';
  if (options.sameSite) cookieString += `; samesite=${options.sameSite}`;
  
  document.cookie = cookieString;
};

/**
 * Get a cookie by name
 */
export const getCookie = (name: string): string | null => {
  const cookieConsent = getConsentState();
  
  // Check if the cookie type is consented to for reading
  const cookieType = getCookieType(name);
  if (cookieType !== 'necessary' && !isConsentedTo(cookieType)) {
    console.warn(`Cookie "${name}" of type "${cookieType}" was not read because consent is missing`);
    return null;
  }
  
  const cookieArr = document.cookie.split(';');
  
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    const cookieName = decodeURIComponent(cookiePair[0].trim());
    
    if (cookieName === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  
  return null;
};

/**
 * Delete a cookie by name
 */
export const deleteCookie = (name: string, options: Omit<CookieOptions, 'expires'> = {}): void => {
  setCookie(name, '', {
    ...options,
    expires: new Date(0), // Set expiration to the past
  });
};

/**
 * Map cookie names to their types (for internal use)
 * This mapping should be updated as new cookies are added
 */
const cookieTypeMap: Record<string, CookieType> = {
  // Example mappings
  'session': 'necessary',
  'cookieConsent': 'necessary',
  '_ga': 'analytics',
  '_gid': 'analytics',
  '_fbp': 'marketing',
  'user_preferences': 'preferences',
};

/**
 * Get the type of a cookie based on its name
 * If not found in the mapping, default to 'marketing' for safety
 */
export const getCookieType = (name: string): CookieType => {
  // Direct matches
  if (name in cookieTypeMap) {
    return cookieTypeMap[name];
  }
  
  // Pattern matches
  if (name.startsWith('_ga')) return 'analytics';
  if (name.startsWith('_fbp')) return 'marketing';
  if (name.startsWith('user_')) return 'preferences';
  
  // Default to most restrictive type for safety
  return 'marketing';
};

/**
 * Check if consent has been given for a specific cookie type
 */
export const isConsentedTo = (cookieType: CookieType): boolean => {
  const consentState = getConsentState();
  
  if (!consentState.consented) return false;
  
  // Necessary cookies are always allowed
  if (cookieType === 'necessary') return true;
  
  return consentState.preferences[cookieType];
};

/**
 * Get the current consent state from localStorage
 */
export const getConsentState = () => {
  const storedConsent = localStorage.getItem('cookieConsent');
  
  if (storedConsent) {
    return JSON.parse(storedConsent);
  }
  
  // Default consent state
  return {
    consented: false,
    preferences: {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    },
    timestamp: null,
  };
};

/**
 * Clear all non-necessary cookies
 */
export const clearNonEssentialCookies = (): void => {
  const cookieArr = document.cookie.split(';');
  
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    const cookieName = decodeURIComponent(cookiePair[0].trim());
    
    const cookieType = getCookieType(cookieName);
    if (cookieType !== 'necessary') {
      deleteCookie(cookieName);
    }
  }
};