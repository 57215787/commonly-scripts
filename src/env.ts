export const inBrowser = typeof window !== 'undefined'
export const UserAgent = inBrowser && window.navigator.userAgent.toLowerCase()
export const isEdge = UserAgent && UserAgent.indexOf('edge/') > 0
export const isAndroid = (UserAgent && UserAgent.indexOf('android') > 0)
export const isIOS = (UserAgent && /iphone|ipad|ipod|ios/.test(UserAgent))
export const isChrome = UserAgent && /chrome\/\d+/.test(UserAgent) && !isEdge
export const isFirefox = UserAgent && UserAgent.match(/firefox\/(\d+)/)