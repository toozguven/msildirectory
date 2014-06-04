ngapp.controller( 'FindContactsCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();

  $scope.search = $routeParams.phrase;

  dataMgr.setScopeContacts( function ( data )
  {
    $scope.contacts = data;
  } );


  $scope.helpers.showLoading = false;

  $anchorScroll();
} );