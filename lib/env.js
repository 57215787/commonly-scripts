export var inBrowser = typeof window !== 'undefined';
export var UserAgent = inBrowser && window.navigator.userAgent.toLowerCase();
export var isEdge = UserAgent && UserAgent.indexOf('edge/') > 0;
export var isAndroid = (UserAgent && UserAgent.indexOf('android') > 0);
export var isIOS = (UserAgent && /iphone|ipad|ipod|ios/.test(UserAgent));
export var isChrome = UserAgent && /chrome\/\d+/.test(UserAgent) && !isEdge;
export var isFirefox = UserAgent && UserAgent.match(/firefox\/(\d+)/);
