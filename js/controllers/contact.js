ngapp.controller( 'ContactCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll )
{
  $scope.helpers = factory.getHelpers();

  dataMgr.setScopeContacts( function ( data )
  {
    $scope.contact = dataMgr.getContact( data, $routeParams.id );

    $scope.helpers.showLoading = false;
  } );
  
  $anchorScroll();
} );