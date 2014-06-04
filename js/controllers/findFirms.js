ngapp.controller( 'FindFirmsCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();
  
  $scope.search = $routeParams.phrase;

  dataMgr.setScopeFirms( function ( data )
  {
    $scope.firms = data;
  } );
  

  $scope.helpers.showLoading = false;

  $anchorScroll();
} );