ngapp.controller( 'CountryContactsCtrl', function ( $scope, factory, dataMgr, $routeParams, $anchorScroll, $location )
                 {
                 $scope.helpers = factory.getHelpers();
                 
                 $scope.countryId = parseInt( $routeParams.id );
                 
                 dataMgr.setScopeCountries( function ( data )
                                           {
                                           
                                           $scope.country = factory.getCountry( data, $routeParams.id );
                                           $scope.towns = $scope.country.towns;
                                           
                                           try
                                           {
                                           $scope.state = factory.getState( $scope.country.states, $routeParams.sid );
                                           } catch ( e ) { }
                                           } );
                 
                 if ( $scope.state )
                 $scope.selectedStateId = $scope.state.id;
                 
                 dataMgr.setScopeContacts( function ( data )
                                          {
                                          $scope.contacts = data;
                                          } );
                 
                 
                 $scope.redirectToState = function ()
                 {
                 $location.path( "/countryWithStateContacts/" + $scope.countryId + "/" + $scope.selectedStateId );
                 }
                 
                 $anchorScroll();
                 } );