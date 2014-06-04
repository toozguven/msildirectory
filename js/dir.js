angular.module( 'scroll', [] ).directive( 'whenScrolled', function ()
{
  return function ( scope, elm, attr )
  {
    var raw = elm[0];

    elm.bind( 'scroll', function ()
    {
      if ( raw.scrollTop + raw.offsetHeight >= raw.scrollHeight )
      {
        scope.$apply( attr.whenScrolled );
      }
    } );
  };
} );



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
  .when( '/findFirms/:phrase', {
    controller: 'FindFirmsCtrl',
    templateUrl: 'views/findFirms.html'
  } )
  .when( '/findContacts/:phrase', {
    controller: 'FindContactsCtrl',
    templateUrl: 'views/findContacts.html'
  } )
  .when( '/country/:id', {
    controller: 'CountryCtrl',
    templateUrl: 'views/country.html'
  } )
  .when( '/countryContacts/:id', {
    controller: 'CountryContactsCtrl',
    templateUrl: 'views/countryContacts.html'
  } )
  .when( '/china/:id', {
    controller: 'CountryCtrl',
    templateUrl: 'views/china.html'
  } )
  .when( '/chinaContacts/:id', {
    controller: 'CountryContactsCtrl',
    templateUrl: 'views/chinaContacts.html'
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
  .when( '/fa/:id', {
    controller: 'FirmCtrl',
    templateUrl: 'views/firmAddress.html'
  } )
  .when( '/fc/:id', {
    controller: 'FirmContactsCtrl',
    templateUrl: 'views/firmContacts.html'
  } )
  .otherwise( {
    redirectTo: '/'
  } );
} );

ngapp.config( ['$compileProvider', function ( $compileProvider )
{
  $compileProvider.aHrefSanitizationWhitelist( /^\s*(https?|file|tel|sms|mailto):/ );
}] );
