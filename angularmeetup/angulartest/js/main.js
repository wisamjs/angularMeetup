'use strict';

// Define your Angular project and give it a name. Referenced in ng-app attribute in index.html
var myNGProject = angular.module('hyApp', []);


// Create a controller called hyAppCtrl
// Pass the dependency of $scope to the function
myNGProject.controller('hyAppCtrl', function($scope) {

  // Define Scope and an array of data
  $scope.instructors = [
  {
    name: 'Drew Minns',
    twitter: 'drewisthe',
    website: 'http://www.drewminns.com'
  }, {
    name: 'Brenna O\'Brien',
    twitter: 'brnnbrn',
    website: 'http://brennaobrien.com/'
  }, {
    name: 'Christina Truong',
    twitter: 'christinatruong',
    website: 'http://christinatruong.com/'
  }, {
    name: 'Wes Bos',
    twitter: 'wesbos',
    website: 'http://wesbos.com'
  }];

});
