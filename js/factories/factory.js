ngapp.factory( "factory", function ( $http, $rootScope, $location )
              {
              ngRootScope = $rootScope;
              ngRootScope.isOnline = -1;
              ngRootScope.utc_offset = 0;
              ngRootScope.dst_offset = 0;
              ngRootScope.lat = 0;
              ngRootScope.lon = 0;
              
              var factory = {};
              
              
              //countries methods
              factory.getCountriesPromise = function ()
              {
              console_log( "about to go to https://cdn.moorestephens.org/InternationalDirectory/api/countries" );
              return $http.get( 'https://cdn.moorestephens.org/InternationalDirectory/api/countries' );
              };
              
              factory.getCountry = function ( countries, id )
              {
              for ( var i = 0; i < countries.length; i++ )
              {
              if ( countries[i].id == id )
              return countries[i];
              }
              return null;
              }
              
              factory.getState = function ( states, id )
              {
              if ( id && id > 0 )
              {
              for ( var i = 0; i < states.length; i++ )
              {
              if ( states[i].id == id )
              return states[i];
              }
              return null;
              }
              else
              {
              return states[0];
              }
              }
              
              
              
              //contacts methods
              factory.getContactsPromise = function ()
              {
              console_log( "about to go to https://cdn.moorestephens.org/InternationalDirectory/api/contacts" );
              return $http.get( 'https://cdn.moorestephens.org/InternationalDirectory/api/contacts' );
              };
              
              factory.getContact = function ( contacts, id )
              {
              for ( var i = 0; i < contacts.length; i++ )
              {
              if ( contacts[i].id == id )
              return contacts[i];
              }
              return null;
              }
              
              factory.filterContactsByCountryId = function ( data, countryId )
              {
              return data;
              var rtnVal = [];
              
              for ( var firm in data )
              {
              if ( firm.countryId == countryId )
              rtnVal.push( firm );
              }
              return rtnVal;
              }
              
              
              //firm methods
              factory.getFirmsPromise = function ()
              {
              console.log( "about to go to https://cdn.moorestephens.org/InternationalDirectory/api/firms" );
              return $http.get( 'https://cdn.moorestephens.org/InternationalDirectory/api/firms' );
              };
              
              factory.getFirm = function ( firms, id )
              {
              for ( var i = 0; i < firms.length; i++ )
              {
              if ( firms[i].id == id )
              return firms[i];
              }
              return null;
              }
              
              factory.filterFirmsByCountryId = function ( data, countryId )
              {
              return data;
              var rtnVal = [];
              
              for ( var firm in data )
              {
              if ( firm.countryId == countryId )
              rtnVal.push( firm );
              }
              return rtnVal;
              }
              
              
              //settings
              factory.getHelpers = function ()
              {
              var rtnVal = {
              hasValueFunc: function ( val )
              {
              return ( val && val.length > 0 );
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
