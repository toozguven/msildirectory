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

    $scope.helpers.showLoading = false;
  } );


  //async load other data
  setTimeout( "globalDataMgr.setScopeFirms( function ( data ) { } );", 1 );
  setTimeout( "globalDataMgr.setScopeContacts( function ( data ) { } );", 11 );
  setTimeout( "globalDataMgr.setScopeComms( function ( data ) { } );", 22 );
  setTimeout( "globalDataMgr.setScopeREOs( function ( data ) { } );", 33 );

  
  $scope.selectedCountryId = 0;

  $scope.redirectToCountry = function ()
  {
    $scope.helpers.showLoading = true;

    if ( $scope.selectedCountryId == "210" )
      $location.path( "/countryWithState/" + $scope.selectedCountryId + "/0" );
    else if ( $scope.selectedCountryId == "43" )
      $location.path( "/china/" + $scope.selectedCountryId );
    else
      $location.path( "/country/" + $scope.selectedCountryId );
  }

  $scope.gotoContactSearch = function ( phrase )
  {
    if ( phrase )
    {
      if ( phrase.length <= 2 )
        alert( "Search term must be at least 3 characters." );
      else
      {
        $location.path( "/findContacts/" + phrase );
      }
    }
    else
      alert( "Please enter a search phrase." );
  }

  $scope.gotoFirmSearch = function ( phrase )
  {
    if ( phrase )
    {
      if ( phrase.length <= 2 )
        alert( "Search term must be at least 3 characters." );
      else
      {
        $scope.helpers.showLoading = true;
        $location.path( "/findFirms/" + phrase );
      }
    }
    else
      alert( "Please enter a search phrase." );
  }

  $scope.scrollToSearch = function ()
  {
    $location.hash( "searchBox" );
    $anchorScroll();
  }
  
  $anchorScroll();
} );