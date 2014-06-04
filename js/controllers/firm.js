ngapp.controller( 'FirmCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll )
{
  dataMgr.setScopeFirms( function ( data )
  {
    $scope.firm = dataMgr.getFirm( data, $routeParams.id );
  } );

  $scope.helpers = factory.getHelpers();

  $anchorScroll();
} );