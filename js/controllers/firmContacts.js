ngapp.controller( 'FirmContactsCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location, $timeout )
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

      $scope.helpers.showLoading = false;
    } );

  } );

  


  $scope.redirectToState = function ()
  {
    $location.path( "/countryWithStateContacts/" + $scope.countryId + "/" + $scope.selectedStateId );
  }

  $anchorScroll();
} );