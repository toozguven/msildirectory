ngapp.factory( "dataMgr", function ($http)
              {
              /*constants*/
              
              var ALWAYS_USE_WEB = false;
              
              var REO_API_URL = "https://cdn.moorestephens.org/InternationalDirectory/api/reos";
              var REO_LOCAL_STORAGE_KEY = "mstphDirREOs";
              
              var COMMS_API_URL = "https://cdn.moorestephens.org/InternationalDirectory/api/committees";
              var COMMS_LOCAL_STORAGE_KEY = "mstphDirComms";
              
              var COUNTRIES_API_URL = "https://cdn.moorestephens.org/InternationalDirectory/api/countries";
              var COUNTRIES_LOCAL_STORAGE_KEY = "mstphDirCountries";
              
              var FIRMS_API_URL = "https://cdn.moorestephens.org/InternationalDirectory/api/firms";
              var FIRMS_LOCAL_STORAGE_KEY = "mstphDirFirms";
              
              var CONTACTS_API_URL = "https://cdn.moorestephens.org/InternationalDirectory/api/contacts";
              var CONTACTS_LOCAL_STORAGE_KEY = "mstphDirContacts";
              
              //localStorage.removeItem( REO_LOCAL_STORAGE_KEY );
              //localStorage.removeItem( COMMS_LOCAL_STORAGE_KEY );
              //localStorage.removeItem( COUNTRIES_LOCAL_STORAGE_KEY );
              //localStorage.removeItem( FIRMS_LOCAL_STORAGE_KEY );
              //localStorage.removeItem( CONTACTS_LOCAL_STORAGE_KEY );
              
              var factory = {};
              
              try
              {
              //localStorage.removeItem( 'mstphDirCountries' );
              //localStorage.removeItem( 'mstphDirFirms' );
              //localStorage.removeItem( 'mstphDirContacts' );
              }
              catch ( e ) { }
              
              /*helpers*/
              factory.persistJsonToLocalStorage = function ( key, value )
              {
              console_log( "saving to localStorage: " + key );
              localStorage.setItem( key, JSON.stringify( value ) );
              }
              
              factory.readDataFromLocalStorage = function ( key ) //this function expects the data (to be read) to have a property called lastUpdated
              {
              var localData = localStorage.getItem( key );
              
              if ( ALWAYS_USE_WEB == false && localData != null )
              {
              console_log( "reading from localStorage: " + key );
              
              var jsonData = JSON.parse( localData );
              if ( jsonData.lastUpdated > getDateOfWeekAgoAsInt() )
              return jsonData;
              else  //deliberately return empty as cached data is old
              return { "lastUpdated": 0, "d": [] };
              }
              else
              {
              return { "lastUpdated": 0, "d": [] };
              }
              }
              
              factory.getApiPromise = function ( url )
              {
              console_log( "about to go to " + url );
              return $http.get( url );
              };
              
              
              
              /*#region REOs*/
              factory.setScopeREOs = function ( callback )
              {
              var localREOs = factory.readDataFromLocalStorage( REO_LOCAL_STORAGE_KEY ); //read from localStorage
              
              if ( localREOs.d.length == 0 )
              { //if localStorage empty, go to web
              factory.getApiPromise( REO_API_URL ).success( function ( data )
                                                           {
                                                           console_log( "got some reos from web" );
                                                           factory.persistJsonToLocalStorage( REO_LOCAL_STORAGE_KEY, data );  //persist locally
                                                           callback( data.d );
                                                           } );
              }
              else //great there is cached data
              {
              callback( localREOs.d );
              }
              }
              
              /*#region REOs*/
              factory.setScopeComms = function ( callback )
              {
              var localComms = factory.readDataFromLocalStorage( COMMS_LOCAL_STORAGE_KEY ); //read from localStorage
              
              if ( localComms.d.length == 0 )
              { //if localStorage empty, go to web
              factory.getApiPromise( COMMS_API_URL ).success( function ( data )
                                                             {
                                                             console_log( "got some comms from web" );
                                                             factory.persistJsonToLocalStorage( COMMS_LOCAL_STORAGE_KEY, data );  //persist locally
                                                             callback( data.d );
                                                             } );
              }
              else //great there is cached data
              {
              callback( localComms.d );
              }
              }
              
              
              /*#region Countries*/
              factory.setScopeCountries = function ( callback )
              {
              var localData = factory.readDataFromLocalStorage( COUNTRIES_LOCAL_STORAGE_KEY ); //read from localStorage
              if ( localData.d.length == 0 )
              { //if localStorage empty, go to web
              factory.getApiPromise( COUNTRIES_API_URL ).success( function ( data )
                                                                 {
                                                                 console_log( "got some countries from web" );
                                                                 factory.persistJsonToLocalStorage( COUNTRIES_LOCAL_STORAGE_KEY, data );  //persist locally
                                                                 callback(data.d);
                                                                 } );
              }
              else //great there is cached data
              {
              callback(localData.d);
              }
              }
              
              
              /*#region Firms*/
              factory.setScopeFirms = function ( callback )
              {
              var localData = factory.readDataFromLocalStorage( FIRMS_LOCAL_STORAGE_KEY ); //read from localStorage
              if ( localData.d.length == 0 )
              { //if localStorage empty, go to web
              factory.getApiPromise( FIRMS_API_URL ).success( function ( data )
                                                             {
                                                             console_log( "got some Firms from web" );        
                                                             factory.persistJsonToLocalStorage( FIRMS_LOCAL_STORAGE_KEY, data );  //persist locally
                                                             callback(data.d);
                                                             } );
              }
              else //great there is cached data
              {
              callback(localData.d);
              }
              }
              
              
              /*#region Contacts*/
              factory.setScopeContacts = function ( callback )
              {
              var localData = factory.readDataFromLocalStorage( CONTACTS_LOCAL_STORAGE_KEY ); //read from localStorage
              if ( localData.d.length == 0 )
              { //if localStorage empty, go to web
              factory.getApiPromise( CONTACTS_API_URL ).success( function ( data )
                                                                {
                                                                console_log( "got some Contacts from web" );
                                                                factory.persistJsonToLocalStorage( CONTACTS_LOCAL_STORAGE_KEY, data );  //persist locally
                                                                callback(data.d);
                                                                } );
              }
              else //great there is cached data
              {
              callback(localData.d);
              }
              }
              
              
              
              return factory;
              } );