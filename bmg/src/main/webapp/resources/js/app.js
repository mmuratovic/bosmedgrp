'use strict';

var bmgDirectives = angular.module('bmgDirectives', []);
var bmgServices = angular.module('bmgServices', []);
var bmgFilters = angular.module('bmgFilters', []);
var bmgControllers = angular.module('bmgControllers', []);

var bmgApp = angular.module('bmgApp', [
   'ng.shims.placeholder',
   'ui.bootstrap',
   'ngRoute',
   'pascalprecht.translate',
   'ui.router',
   'cgBusy',
   'bmgControllers',
   'bmgFilters',
   'bmgServices',
   'bmgDirectives'
]);

bmgApp.constant('ITEMS_PER_PAGE', 6)
	.constant('ITEMS_PER_CATEGORY', 5);
			
bmgApp.config([ '$translateProvider', '$routeProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', '$provide',
    function($translateProvider, $routeProvider, $httpProvider, $stateProvider, $urlRouterProvider, $provide){

	$urlRouterProvider.otherwise("/news");

    $stateProvider
        .state("news", { url: "/news", views: { "news":{templateUrl: 'resources/partials/news.html'}}})
        .state("radio", { url: "/radio", views: { "radio":{templateUrl: 'resources/partials/radio.html'}}})
        .state("services", { url: "/services", views: { "services":{templateUrl: 'resources/partials/services.html'}}})
        .state("contact", { url: "/contact", views: { "contact":{templateUrl: 'resources/partials/contact.html'}}});
      /*  .state("tabs_english", { url:"/en", views: { "tabs_english": {templateUrl:"resources/partials/tabs_English.html"}}})
       
        .state("tabs_english.world", { url: "/details", templateUrl: "resources/partials/worldNews.html" })
        .state("tabs_english.usa", { url: "/details", templateUrl: "resources/partials/usaNews.html" })
        .state("tabs_english.bosnia", { url: "/details", templateUrl: "resources/partials/bosniaNews.html" })
        .state("tabs_english.sport", { url: "/details", templateUrl: "resources/partials/sportNews.html" })
        .state("tabs_english.mixed", { url: "/details", templateUrl: "resources/partials/mixedNews.html" })
       
        .state("tabs_bosnian", { url:"/en", views: { "tabs_bosnian": {templateUrl:"resources/partials/tabs_Bosnian.html"}}})
        .state("tabs_bosnian.world", { url: "/details", templateUrl: "resources/partials/svijetVijesti.html" })
        .state("tabs_bosnian.usa", { url: "/details", templateUrl: "resources/partials/usaVijesti.html" })
        .state("tabs_bosnian.bosnia", { url: "/details", templateUrl: "resources/partials/bosnaVijesti.html" })
        .state("tabs_bosnian.sport", { url: "/details", templateUrl: "resources/partials/sportVijesti.html" })
        .state("tabs_bosnian.mixed", { url: "/details", templateUrl: "resources/partials/razneVijesti.html" })
        
        .state("tabs_dijaspora", { url:"/en", views: { "tabs_dijaspora": {templateUrl:"resources/partials/tabs_Dijaspora.html"}}});*/

    
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });

	
	$translateProvider.translations('en', {

	});
	
	$translateProvider.preferredLanguage('en');
}]);