var app = angular.module('app', ["ngMaterial", "ngMessages", "ngMdIcons","ngRoute"]);
			app.config(function($routeProvider) {
		  $routeProvider
		  .when('/main', {
			templateUrl: 'main.htm'
		  })
		  .when('/feedback', {
			templateUrl: 'feedback.htm'
		  })
		  .when('/pads', {
			templateUrl: 'pads.htm'
		  })
		  .otherwise({
			redirectTo: '/main'
		  });
		  });
        app.controller('MainCtrl', function($scope, $http, $rootScope, test) {
			$scope.user = {
			  title: 'Developer',
			  email: 'ipsum@lorem.com',
			  firstName: '',
			  lastName: '',
			  company: 'Google',
			  address: '1600 Amphitheatre Pkwy',
			  city: 'Mountain View',
			  state: 'CA',
			  biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
			  postalCode: '94043'
			};
			$scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
			'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
			'WY').split(' ').map(function(state) {
				return {abbrev: state};
			  });
            $scope.credentials = {
                username: '',
                password: ''
            };
			$scope.imagePath_1 = 'images/lucky.jpg';
			$scope.imagePath_2 = 'images/colonel_meow.jpg';
			$scope.imagePath_3 = 'images/nala.jpg';
			$scope.imagePath_4 = 'images/maru.jpg';
            $scope.login = function(credentials) {
                AuthService.login(credentials).then(function() {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                }, function() {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            };

            $scope.test = test.getstatus();
            $scope.save = function() {}

            //table data
            $scope.data = {
                employees: [{
                    date: '13/08/2016',
                    userName: 'Иванов В.Г',
                    user_status: ''
                }, {
                    date: 'Сегодня',
                    userName: 'Козлов С.Ю',
                    user_status: ''
                }, {
                    date: 'Вчера',
                    userName: 'Сидоров П.А',
                    user_status: ''
                }]
            }

            $scope.navbar_color = '#786b59';
            $scope.panel_color = '#786b59';

            $scope.footer_color = '#786b59';

            //table items
            $scope.orderByField = 'firstName';
            $scope.reverseSort = false;

            $scope.site_text = {
                text: [{
                    first: 'Example1'
                }, {
                    first: 'Example2'
                }]
            }
        });
		app.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('docs-dark', 'default')
		  .primaryPalette('yellow')
		  .dark();

		});
        app.service('test', function() {
                this.getstatus = function() {
                    return 'fuckyeah';
                }
                this.myFunc = function(x) {
                    return x.toString(16);
                }
            }
        );