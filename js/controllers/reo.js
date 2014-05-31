ngapp.controller( 'ReosCtrl', function ( $scope, factory, dataMgr, $anchorScroll, $location )
                 {
                 $scope.helpers = factory.getHelpers();
                 
                 $scope.reos = []; //set as empty array
                 
                 dataMgr.setScopeREOs( function ( data ) { $scope.reos = data; } );
                 
                 $scope.currentFirm = 0;
                 
                 $scope.toggleFirm = function (fid)
                 {
                 if ( $scope.currentFirm == fid )
                 $scope.currentFirm = 0;
                 else
                 $scope.currentFirm = fid;
                 }
                 
                 $scope.isVisible = function ( fid )
                 {
                 return $scope.currentFirm == fid;
                 }
                 
                 $anchorScroll();
                 } );