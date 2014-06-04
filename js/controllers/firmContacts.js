ngapp.controller( 'FirmContactsCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();

  $scope.firmId = parseInt( $routeParams.id );

  dataMgr.setScopeFirms( function ( data )
  {
    $scope.firms = data;
    $scope.firm = dataMgr.getFirm( data, $scope.firmId );

    dataMgr.setScopeContacts( function ( data )
    {
      $scope.contacts = dataMgr.getMainContactsForFirm( data, $scope.firm );
      $scope.internationalContacts = dataMgr.getInternationalContactsForFirm( data, $scope.firm );
    } );

  } );

  


  $scope.redirectToState = function ()
  {
    $location.path( "/countryWithStateContacts/" + $scope.countryId + "/" + $scope.selectedStateId );
  }

  $anchorScroll();
} );