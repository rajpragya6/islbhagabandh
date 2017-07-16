	var scotchApp = angular.module('scotchApp', ['ngRoute', 'ui.bootstrap' , 'ngSanitize',
            "com.2fdevs.videogular"]);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'assets/Pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'assets/Pages/about.html',
				controller  : 'aboutController'

			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'assets/Pages/contact.html',
				controller  : 'contactController'
			})


			.when('/gallery', {
				templateUrl : 'assets/Pages/gallery.html',
				controller  : 'galleryController'

			})


			.when('/faculty', {
				templateUrl : 'assets/Pages/faculty.html',
				controller  : 'facultyController'

			})


			.when('/careers', {
				templateUrl : 'assets/Pages/careers.html',
				controller  : 'careersController'

			})


			.when('/curricular', {
				templateUrl : 'assets/Pages/curricular.html',
				controller  : 'curricularController'

			})

			.when('/about_school', {
				templateUrl : 'assets/Pages/about_school.html',
				controller  : 'about_schoolController'

			})	

			.when('/principal_desk', {
				templateUrl : 'assets/Pages/principal_desk.html',
				controller  : 'principal_deskController'

			})

			.when('/school_prayer', {
				templateUrl : 'assets/Pages/school_prayer.html',
				controller  : 'school_prayerController'

			})

			.when('/rules', {
				templateUrl : 'assets/Pages/rules.html',
				controller  : 'rulesController'

			})


	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($rootScope, $scope) {
		// create a message to display in our view
		$rootScope.currentPage = "Home";
	  $scope.myInterval = 4000;
	  $scope.slides = [

	  	{
	      image: 'assets/images/slide30.jpg'
	    },
	    {
	      image: 'assets/images/slide1.jpg'
	    },
	    {
	      image: 'assets/images/slide2.jpg'
	    },
	    {
	      image: 'assets/images/slide3.jpg'
	    },
	    {
	      image: 'assets/images/slide4.jpg'
	    }
	  ];
	});

	scotchApp.controller('aboutController', function($rootScope, $scope) {
		$rootScope.currentPage = "about";
	});

	scotchApp.controller('contactController', function($rootScope, $scope) {
		$rootScope.currentPage = "Contact";
           function init_map() {
            var myOptions = {
              zoom: 16,
            center: new google.maps.LatLng(23.7382786, 86.3845596),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('googleMap'), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(23.7382786, 86.3845596)
        });
        infowindow = new google.maps.InfoWindow({
            content: '<strong>ISL Bhagabandh</strong><br>Bhagabandh<br>828111 Dhanbad<br>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }
    // google.maps.event.addDomListener(window, 'load', init_map);
    init_map();
	});

	scotchApp.controller('galleryController', function($rootScope, $scope, $modal, $sce) {
		$scope.showImage = function(imageUrl){
			$scope.imageUrl = imageUrl;
			var modalInstance = $modal.open({
				templateUrl: 'assets/Pages/modal_popup.html', //'<img src = "'+imageUrl+'" class="modal-image">'
				resolve: {
					imageUrl: function () {
					  return $scope.imageUrl;
					}
				},
				controller: function($scope, $modalInstance, imageUrl){
					$scope.close = function(){
						$modalInstance.dismiss();
					}
					$scope.imageUrl = imageUrl;
				}
			})
		}
		$rootScope.currentPage = "gallery";


		$scope.showVideo = function(videoUrl){
			$scope.imageUrl = videoUrl;
			var modalInstance = $modal.open({
				templateUrl: 'assets/Pages/video_popup.html', //'<img src = "'+imageUrl+'" class="modal-image">'
				resolve: {
					imageUrl: function () {
					  return $scope.imageUrl;
					}
				},
				controller: function($scope, $modalInstance, imageUrl){
					$scope.close = function(){
						$modalInstance.dismiss();
					}
					$scope.imageUrl = imageUrl;
				 	$scope.config = {
		                preload: "none",
		                sources: [
		                    {src: $sce.trustAsResourceUrl(imageUrl), type: "video/mp4"}
		                ],
		                tracks: [
		                    {
		                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
		                        kind: "subtitles",
		                        srclang: "en",
		                        label: "English",
		                        default: ""
		                    }
		                ],
		                theme: {
		                    url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"
		                }
		            };
				}
			})
		}

	});



	scotchApp.controller('about_schoolController', function($rootScope, $scope) {
		$rootScope.currentPage = "about_school";
	});


	scotchApp.controller('principal_deskController', function($rootScope, $scope) {
		$rootScope.currentPage = "principal_desk";
	});


	scotchApp.controller('school_prayerController', function($rootScope, $scope) {
		$rootScope.currentPage = "school_prayer";
	});


	scotchApp.controller('rulesController', function($rootScope, $scope) {
		$rootScope.currentPage = "rules";
	});

	scotchApp.controller('curricularController', function($rootScope, $scope) {
		$rootScope.currentPage = "curricular";
	});

	scotchApp.controller('careersController', function($rootScope, $scope) {
		$rootScope.currentPage = "careers";
	});

	scotchApp.controller('facultyController', function($rootScope, $scope) {
		$rootScope.currentPage = "faculty";
	});







