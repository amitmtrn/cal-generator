export default angular.module('outputFieldSet', [])
  .directive('outputFieldSet', outputFieldSet);

function outputFieldSet() {
  return {
    restrict: 'E',
    controller: outputFieldSetController,
    controllerAs: 'outputfield',
    template: require('outputFieldSet/outputFieldSetDirective.html')
  };
}

class outputFieldSetController {

  constructor($element, $interval, $window, $scope) {
  }

}

outputFieldSetController.$inject=['$element', '$interval', '$window', '$scope'];
