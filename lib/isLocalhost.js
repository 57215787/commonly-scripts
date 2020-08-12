import { hasLocation, } from './hasLocation';
export const isLocalhost = () => {
    if (!hasLocation) {
        return false;
    }
    const { hostname, } = window.location;
    return Boolean(hostname === 'localhost' ||
        hostname === '[::1]' ||
        hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
};
