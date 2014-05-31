ngapp.controller( 'ContactCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll )
                 {
                 
                 dataMgr.setScopeContacts( function ( data )
                                          {
                                          $scope.contact = factory.getContact( data, $routeParams.id );
                                          } );
                 
                 $scope.helpers = factory.getHelpers();
                 
                 $anchorScroll();
                 } );