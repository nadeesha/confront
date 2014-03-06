'use strict';

angular.module('confrontApp')
	.service('Crudsvc', function Crudsvc($http, API) {
		return {
			setupScope: function(scope, endpoint, definition) {
				scope.list = [];

				function loadData() {
					$http.get(API + '/' + endpoint)
						.success(function(data) {
							scope.list = data;
							console.log(data);
						});

					scope.workingItem = {};
					scope.op = false;
				}

				loadData();

				scope.edit = function(c) {
					scope.op = 'edit';
					scope.workingItem = c;
				};

				scope.create = function() {
					scope.op = 'create';
					scope.workingItem = definition;
				};

				scope.determineType = function(name) {
					if (name.toUpperCase().indexOf('DATE') > -1) {
						return 'datetime-local';
					} else {
						return 'text';
					}
				}

				scope.submit = function(c) {
					if (scope.op === 'edit') {
						$http.put(API + '/' + endpoint + '/' + c.id, c)
							.success(function() {
								loadData();
							});
					} else if (scope.op === 'create') {
						$http.post(API + '/' + endpoint + '/', c)
							.success(function() {
								loadData();
							});
					}
				};
			}
		};
	});
