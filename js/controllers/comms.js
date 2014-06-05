﻿ngapp.controller( 'CommsCtrl', function ( $scope, factory, dataMgr, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();

  $scope.comms = []; //set as empty array

  dataMgr.setScopeComms( function ( data ) { $scope.comms = data; } );

  $scope.currentlyOpenComms = "{0}";

  $scope.toggleComm = function ( cid )
  {
    if ( $scope.currentlyOpenComms.indexOf( "{" + cid + "}" ) > -1 )
      $scope.currentlyOpenComms = $scope.currentlyOpenComms.replace( "{" + cid + "}", "" );
    else
      $scope.currentlyOpenComms = $scope.currentlyOpenComms + "{" + cid + "}";
  }

  $scope.isVisible = function ( cid )
  {
    return $scope.currentlyOpenComms.indexOf( "{" + cid + "}" ) > -1;
  }

  $anchorScroll();
} );