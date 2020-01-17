import { inBrowser } from './env';
export var hasLocation = inBrowser && typeof window.location !== 'undefined';
