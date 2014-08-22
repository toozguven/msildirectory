ngapp.controller( 'FindFirmsCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location, $timeout )
{
  $scope.helpers = factory.getHelpers();
  
  $scope.searchDelayed = $routeParams.phrase;
  $scope.search = $routeParams.phrase;

  $scope.helpers.delayModelSetting( $scope, $timeout, "search", function ( val ) { $scope.searchDelayed = val; } );

  dataMgr.setScopeFirms( function ( data )
  {
    $scope.firms = data;

    $scope.helpers.showLoading = false;
  } );

  $anchorScroll();
} );