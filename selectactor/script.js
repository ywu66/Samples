angular.module('sampleApp', [])
.controller('mainCtrl', function($scope) {
  $scope.actors = [
    {
      name: 'Leonardo DiCaprio',
      photo: 'http://www.hollystock.com/images/celebs/mid/5069.jpg'
    },
    {
      name: 'Angelina Jolie',
      photo: 'http://www.hollystock.com/images/celebs/mid/504.jpg'
    },
    {
      name: 'George Clooney',
      photo: 'http://www.hollystock.com/images/celebs/mid/2922.jpg'
    }
  ];

});