export default angular.module('outputFields', [])
  .directive('outputFields', outputFields);

function outputFields() {
  return {
    restrict: 'E',
    controller: outputFieldsController,
    controllerAs: 'outputs',
    template: require('outputFields/outputFieldsDirective.html')
  }
}

class outputFieldsController {

  constructor($element, $interval, $window, $scope) {
  }

}

outputFieldsController.$inject=['$element', '$interval', '$window', '$scope'];
