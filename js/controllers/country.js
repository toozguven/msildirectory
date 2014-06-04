ngapp.controller( 'CountryCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();
  
  $scope.countryId = parseInt( $routeParams.id );


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
    } );

  } );
  
    
  
  $scope.redirectToState = function ()
  {
    $location.path( "/countryWithState/" + $scope.countryId + "/" + $scope.selectedStateId );
  }

  $scope.helpers.showLoading = false;

  $anchorScroll();
} );