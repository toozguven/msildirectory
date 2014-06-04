﻿ngapp.factory( "factory", function ( $http, $rootScope, $location )
{
  ngRootScope = $rootScope;
  ngRootScope.isOnline = -1;
  ngRootScope.utc_offset = 0;
  ngRootScope.dst_offset = 0;
  ngRootScope.lat = 0;
  ngRootScope.lon = 0;

  var factory = {};
  

  //generic helpers
  factory.getHelpers = function ()
  {
    var rtnVal = {
      hasValueFunc: function ( val )
      {
        return ( val && val.length > 0 && val != "0");
      },
      getContactImageUrl: function ( cid )
      {
        return "https://api.moorestephens.org/i/msimage2.ashx?cid=" + cid;
      },
      getContactProfileUrl: function ( cid )
      {
        return "https://onlineforms.moorestephens.org/Contact2/IntDirProfile?id=" + cid;
      },
      getFirmProfileUrl: function ( cid )
      {
        return "https://onlineforms.moorestephens.org/Firm2/IntDirProfile?id=" + cid;
      },
      getMapUrl: function ( firm )
      {
        return "https://onlineforms.moorestephens.org/Firm2/IntDirMap" + "?q=" + firm.lat + "," + firm.lon;
      },
      getDirectionsUrl: function ( firm )
      {
        return "https://onlineforms.moorestephens.org/Firm2/IntDirDirections?daddr=" + firm.lat + "," + firm.lon + "&saddr=" + ngRootScope.lat + "," + ngRootScope.lon;
      },
      f: function ( fid ) { $location.path( "/f/" + fid ); },
      c: function ( cid ) { $location.path( "/c/" + cid ); },
      g: function ( path ) { $location.path( path ); },
      rootScope: ngRootScope,
      isOnline: function ()
      {
        return ngRootScope.isOnline != 0;
      },
      showLoading: true,
      getCountryName: function ( cname )
      {
        if ( cname == "Former Yugoslav Republic of Macedonia" )
          return "F.Y.R. Macedonia";
        return cname;
      },
      getUrl: function ( url )
      {
        if (url && url != "")
        {
          if ( url.indexOf( "http" ) > -1 )
            return url;
          return "http://" + url;
        }

        return "";
      }
    };
    return rtnVal;
  }

  return factory;
} );

