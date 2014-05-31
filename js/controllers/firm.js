ngapp.controller( 'FirmCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll )
                 {
                 dataMgr.setScopeFirms( function ( data )
                                       {
                                       $scope.firm = factory.getFirm( data, $routeParams.id );
                                       } );
                 
                 $scope.helpers = factory.getHelpers();
                 
                 $anchorScroll();
                 } );