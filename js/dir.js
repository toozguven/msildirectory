
var ngRootScope;
var globalDataMgr;

var ngapp = angular.module( 'dir', ['ngRoute', 'ngAnimate', 'ngSanitize'] )
.config( function ( $routeProvider )
        {
        $routeProvider
        .when( '/', {
              controller: 'HomeCtrl',
              templateUrl: 'views/home.html'
              } )
        .when( '/comms', {
              controller: 'CommsCtrl',
              templateUrl: 'views/comms.html'
              } )
        .when( '/reos', {
              controller: 'ReosCtrl',
              templateUrl: 'views/reos.html'
              } )
        .when( '/country/:id', {
              controller: 'CountryCtrl',
              templateUrl: 'views/country.html'
              } )
        .when( '/countryContacts/:id', {
              controller: 'CountryContactsCtrl',
              templateUrl: 'views/countryContacts.html'
              } )
        .when( '/countryWithState/:id/:sid', {
              controller: 'CountryCtrl',
              templateUrl: 'views/countryWithState.html'
              } )
        .when( '/countryWithStateContacts/:id/:sid', {
              controller: 'CountryContactsCtrl',
              templateUrl: 'views/countryWithStateContacts.html'
              } )
        .when( '/c/:id', {
              controller: 'ContactCtrl',
              templateUrl: 'views/contact.html'
              } )
        .when( '/f/:id', {
              controller: 'FirmCtrl',
              templateUrl: 'views/firm.html'
              } )
        .otherwise( {
                   redirectTo: '/'
                   } );
        } );

ngapp.config( ['$compileProvider', function ( $compileProvider )
               {
               $compileProvider.aHrefSanitizationWhitelist( /^\s*(https?|file|tel|sms|mailto):/ );
               }] );