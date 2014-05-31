ngapp.controller( 'HomeCtrl', function ( $scope, factory, dataMgr, $anchorScroll, $location )
                 {
                 //set global var so we can call it from setTimeout
                 globalDataMgr = dataMgr;
                 
                 $scope.helpers = factory.getHelpers();
                 
                 $scope.finishedLoadingCountries = false;
                 $scope.finishedLoadingFirms = true;
                 
                 $scope.finishedLoading = $scope.finishedLoadingCountries && $scope.finishedLoadingFirms;
                 
                 
                 dataMgr.setScopeCountries( function ( data )
                                           {
                                           $scope.countries = data;
                                           $scope.finishedLoadingCountries = true;
                                           } );
                 
                 
                 
                 setTimeout( "globalDataMgr.setScopeFirms( function ( data ) { } );", 1 );
                 
                 
                 setTimeout( "globalDataMgr.setScopeContacts( function ( data ) { } );", 11 );
                 
                 
                 $scope.selectedCountryId = 0;
                 
                 $scope.redirectToCountry = function ()
                 {
                 if ( $scope.selectedCountryId == "210" )
                 $location.path( "/countryWithState/" + $scope.selectedCountryId + "/0" );
                 else
                 $location.path( "/country/" + $scope.selectedCountryId );
                 }
                 
                 
                 $scope.helpers.showLoading = !( $scope.finishedLoading );
                 } );