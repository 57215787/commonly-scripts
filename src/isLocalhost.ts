import {
  hasLocation,
} from './hasLocation';
// 判断当前环境
export const isLocalhost = (): boolean => {
  if (!hasLocation) {
    return false;
  }
  const {
    hostname,
  } = window.location;
  return Boolean(
    hostname === 'localhost' ||
    hostname === '[::1]' ||
    hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ),
  );
};
