import { inBrowser } from './env';
export const hasLocation = inBrowser && typeof window.location !== 'undefined';
