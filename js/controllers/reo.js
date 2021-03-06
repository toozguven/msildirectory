﻿ngapp.controller( 'ReosCtrl', function ( $scope, factory, dataMgr, $anchorScroll, $location )
{
  $scope.helpers = factory.getHelpers();
  
  $scope.reos = []; //set as empty array
  
  dataMgr.setScopeREOs( function ( data ) { 
    $scope.reos = data; 
    $scope.helpers.showLoading = false;
  } );

  $scope.currentlyOpenFirms = "{0}";

  $scope.toggleFirm = function (fid)
  {
    if ( $scope.currentlyOpenFirms.indexOf( "{" + fid + "}" ) > -1 )
      $scope.currentlyOpenFirms = $scope.currentlyOpenFirms.replace( "{" + fid + "}", "" );
    else
      $scope.currentlyOpenFirms = $scope.currentlyOpenFirms + "{" + fid + "}";
  }

  $scope.isVisible = function ( fid )
  {
    return $scope.currentlyOpenFirms.indexOf( "{" + fid + "}" ) > -1;
  }

  $anchorScroll();
} );