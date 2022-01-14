function addBrowserClass() {
    var __add = function(name, ver){
        if(document.documentElement.className){ document.documentElement.className += ' '; }
        document.documentElement.className += name + (ver!='' ? ' ' + name+(ver*1).toString().replace('.','_') : '');
    }
    var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();
    if( get = userAgent.match( /msie (\d+(\.\d+)?)/i ) )              { __add('ie',      get[1]); }
    else if( get = userAgent.match( /Trident.+rv\:(\d+(\.\d+)?)/i ) ) { __add('ie',      get[1]); }
    else if( get = userAgent.match( /chrome\/(\d+(\.\d+)?)/i ) )      { __add('chrome',  get[1]); }
    else if( get = userAgent.match( /firefox\/(\d+(\.\d+)?)/i ) )     { __add('firefox', get[1]); }
    else if( get = userAgent.match( /opera\/(\d+(\.\d+)?)/i ) )       { __add('opera',   get[1]); }
    else if( get = userAgent.match( /safari\/(\d+(\.\d+)?)/i ) )      { __add('safari',  get[1]); }

    // ついでにモバイルOS情報を付加する→ios(iphone, ipad, ipod), android
    if( get = userAgent.match( /iPhone OS (\d+(\.\d+)?)/i ) )    { __add('ios',     get[1]); }
    if( get = userAgent.match( /iPhone;/i ) )                    { __add('iphone',  ''); }
    else if( get = userAgent.match( /iPod;/i ) )                 { __add('ipod',    ''); }
    else if( get = userAgent.match( /iPad;/i ) )                 { __add('ipad',    ''); }
    else if( get = userAgent.match( /Android (\d+(\.\d+)?)/i ) ) { __add('android', get[1]); }
}
