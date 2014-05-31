/*
 AngularJS v1.3.0-beta.10
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
( function ( p, h, q )
 {
 'use strict'; function E( a ) { var d = []; s( d, h.noop ).chars( a ); return d.join( "" ) } function k( a ) { var d = {}; a = a.split( "," ); var b; for ( b = 0; b < a.length; b++ ) d[a[b]] = !0; return d } function F( a, d )
 {
 function b( a, c, b, g ) { c = h.lowercase( c ); if ( t[c] ) for ( ; f.last() && u[f.last()]; ) e( "", f.last() ); v[c] && f.last() == c && e( "", c ); ( g = w[c] || !!g ) || f.push( c ); var l = {}; b.replace( G, function ( a, c, d, b, e ) { l[c] = r( d || b || e || "" ) } ); d.start && d.start( c, l, g ) } function e( a, c )
 {
 var b = 0, e; if ( c = h.lowercase( c ) ) for ( b = f.length - 1; 0 <= b && f[b] != c; b-- );
 if ( 0 <= b ) { for ( e = f.length - 1; e >= b; e-- ) d.end && d.end( f[e] ); f.length = b }
 } var c, g, f = [], l = a; for ( f.last = function () { return f[f.length - 1] }; a; )
 {
 g = !0; if ( f.last() && x[f.last()] ) a = a.replace( RegExp( "(.*)<\\s*\\/\\s*" + f.last() + "[^>]*>", "i" ), function ( c, a ) { a = a.replace( H, "$1" ).replace( I, "$1" ); d.chars && d.chars( r( a ) ); return "" } ), e( "", f.last() ); else
 {
 if ( 0 === a.indexOf( "\x3c!--" ) ) c = a.indexOf( "--", 4 ), 0 <= c && a.lastIndexOf( "--\x3e", c ) === c && ( d.comment && d.comment( a.substring( 4, c ) ), a = a.substring( c + 3 ), g = !1 ); else if ( y.test( a ) )
 {
 if ( c = a.match( y ) ) a =
 a.replace( c[0], "" ), g = !1
 } else if ( J.test( a ) ) { if ( c = a.match( z ) ) a = a.substring( c[0].length ), c[0].replace( z, e ), g = !1 } else K.test( a ) && ( c = a.match( A ) ) && ( a = a.substring( c[0].length ), c[0].replace( A, b ), g = !1 ); g && ( c = a.indexOf( "<" ), g = 0 > c ? a : a.substring( 0, c ), a = 0 > c ? "" : a.substring( c ), d.chars && d.chars( r( g ) ) )
 } if ( a == l ) throw L( "badparse", a ); l = a
 } e()
 } function r( a ) { if ( !a ) return ""; var d = M.exec( a ); a = d[1]; var b = d[3]; if ( d = d[2] ) n.innerHTML = d.replace( /</g, "&lt;" ), d = "textContent" in n ? n.textContent : n.innerText; return a + d + b } function B( a )
 {
 return a.replace( /&/g,
                  "&amp;" ).replace( N, function ( a ) { var b = a.charCodeAt( 0 ); a = a.charCodeAt( 1 ); return "&#" + ( 1024 * ( b - 55296 ) + ( a - 56320 ) + 65536 ) + ";" } ).replace( O, function ( a ) { return "&#" + a.charCodeAt( 0 ) + ";" } ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" )
 } function s( a, d )
 {
 var b = !1, e = h.bind( a, a.push ); return {
 start: function ( a, g, f )
 {
 a = h.lowercase( a ); !b && x[a] && ( b = a ); b || !0 !== C[a] || ( e( "<" ), e( a ), h.forEach( g, function ( b, f ) { var g = h.lowercase( f ), k = "img" === a && "src" === g || "background" === g; !0 !== P[g] || !0 === D[g] && !d( b, k ) || ( e( " " ), e( f ), e( '="' ), e( B( b ) ), e( '"' ) ) } ),
                                                                     e( f ? "/>" : ">" ) )
 }, end: function ( a ) { a = h.lowercase( a ); b || !0 !== C[a] || ( e( "</" ), e( a ), e( ">" ) ); a == b && ( b = !1 ) }, chars: function ( a ) { b || e( B( a ) ) }
 }
 } var L = h.$$minErr( "$sanitize" ), A = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, z = /^<\s*\/\s*([\w:-]+)[^>]*>/, G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, K = /^</, J = /^<\s*\//, H = /\x3c!--(.*?)--\x3e/g, y = /<!DOCTYPE([^>]*?)>/i, I = /<!\[CDATA\[(.*?)]]\x3e/g, N = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, O = /([^\#-~| |!])/g,
                                                                                                                                                                                                             w = k( "area,br,col,hr,img,wbr" ); p = k( "colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr" ); q = k( "rp,rt" ); var v = h.extend( {}, q, p ), t = h.extend( {}, p, k( "address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul" ) ), u = h.extend( {}, q, k( "a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var" ) ), x = k( "script,style" ),
                                                                                                                                                                                                             C = h.extend( {}, w, t, u, v ), D = k( "background,cite,href,longdesc,src,usemap" ), P = h.extend( {}, D, k( "abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width" ) ), n = document.createElement( "pre" ), M = /^(\s*)([\s\S]*?)(\s*)$/; h.module( "ngSanitize", [] ).provider( "$sanitize", function ()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  this.$get =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ["$$sanitizeUri", function ( a ) { return function ( d ) { var b = []; F( d, s( b, function ( b, c ) { return !/^unsafe/.test( a( b, c ) ) } ) ); return b.join( "" ) } }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  } ); h.module( "ngSanitize" ).filter( "linky", ["$sanitize", function ( a )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/, b = /^mailto:/; return function ( e, c )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  function g( a ) { a && m.push( E( a ) ) } function f( a, b ) { m.push( "<a " ); h.isDefined( c ) && ( m.push( 'target="' ), m.push( c ), m.push( '" ' ) ); m.push( 'href="' ); m.push( a ); m.push( '">' ); g( b ); m.push( "</a>" ) } if ( !e ) return e;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  for ( var l, k = e, m = [], n, p; l = k.match( d ) ; ) n = l[0], l[2] == l[3] && ( n = "mailto:" + n ), p = l.index, g( k.substr( 0, p ) ), f( n, l[0].replace( b, "" ) ), k = k.substring( p + l[0].length ); g( k ); return a( m.join( "" ) )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }] )
                                                                                                                                                                                                             } )( window, window.angular );
                                                                                                                                                                                                             //# sourceMappingURL=angular-sanitize.min.js.map