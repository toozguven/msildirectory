ngapp.controller( 'CountryCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location, $timeout )
{
  $scope.helpers = factory.getHelpers();
  
  $scope.countryId = parseInt( $routeParams.id );

  $scope.searchDelayed = "";
  $scope.helpers.delayModelSetting( $scope, $timeout, "search", function ( val ) { $scope.searchDelayed = val; } );

  dataMgr.setScopeCountries( function ( data )
  {

    $scope.country = dataMgr.getCountry( data, $routeParams.id );
    $scope.towns = $scope.country.towns;

    try
    {
      $scope.state = dataMgr.getState( $scope.country.states, $routeParams.sid );
    } catch ( e ) { }

    if ( $scope.state )
      $scope.selectedStateId = $scope.state.id;

    dataMgr.setScopeFirms( function ( data )
    {
      $scope.firms = data;

      $scope.helpers.showLoading = false;
    } );

  } );
   
  
  $scope.redirectToState = function ()
  {
    $scope.helpers.showLoading = true;
    $location.path( "/countryWithState/" + $scope.countryId + "/" + $scope.selectedStateId );
  }

  $anchorScroll();
} );