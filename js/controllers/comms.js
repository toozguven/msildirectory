ngapp.controller( 'CommsCtrl', function ( $scope, factory, dataMgr, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();

  $scope.comms = []; //set as empty array

  dataMgr.setScopeComms( function ( data ) { $scope.comms = data; } );

  $scope.currentComm = 0;

  $scope.toggleComm = function ( cid )
  {
    if ( $scope.currentComm == cid )
      $scope.currentComm = 0;
    else
      $scope.currentComm = cid;
  }

  $scope.isVisible = function ( cid )
  {
    return $scope.currentComm == cid;
  }

  $anchorScroll();
} );