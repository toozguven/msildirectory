ngapp.controller( 'FirmCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll )
{
  $scope.helpers = factory.getHelpers();

  dataMgr.setScopeFirms( function ( data )
  {
    $scope.firm = dataMgr.getFirm( data, $routeParams.id );
  } );

  $anchorScroll();
} );