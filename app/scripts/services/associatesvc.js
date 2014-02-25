/* jshint indent:false */

'use strict';

angular.module('confrontApp')
	.service('Associatesvc', function Associatesvc(API, $http) {
		return {
			setUpScope: function(scope) {
				scope.selectedParent = {};
				scope.selectedChild = {};

				if(!scope.meta) {
					throw 'no metadata in $scope';
				}

				scope.loadData = function() {
					$http.get(API + '/' + scope.meta.parentEntity)
						.success(function(data) {
							scope.parents = data;
						});

					$http.get(API + '/' + scope.meta.childEntity)
						.success(function(data) {
							scope.allChildren = data;
						});
				};

				scope.loadChildrenForParent = function(id) {
					$http.get(API + '/' + scope.meta.parentEntity + '/' + id + '/' + scope.meta.childEntity)
						.success(function(data) {
							scope.chosenChildren = data;
						});
				};

				scope.associate = function() {
					var data = {};
					data[scope.meta.childEntityIdProperty] = scope.selectedChild.id;
					data[scope.meta.parentEntityIdProperty] = scope.selectedParent.id;

					$http.post(API + '/' + scope.meta.familyEntity, data)
						.success(function() {
							scope.loadChildrenForParent(scope.selectedParent.id);
						});
				};

				scope.$watch('selectedParent', function() {
					if(scope.selectedParent.id) {
						scope.loadChildrenForParent(scope.selectedParent.id);
					}
				});

				scope.loadData();
			}
		};
	});