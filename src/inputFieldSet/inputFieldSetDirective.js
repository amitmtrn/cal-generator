export default angular.module('inputFieldSet', [])
  .directive('inputFieldSet', inputFieldSet);

function inputFieldSet() {
  return {
    restrict: 'E',
    controller: inputFieldSetController,
    controllerAs: 'inputfield',
    template: require('inputFieldSet/inputFieldSet.html')
  }
}

class inputFieldSetController {

  constructor($element, $interval, $window, $scope) {
  }

}

inputFieldSetController.$inject=['$element', '$interval', '$window', '$scope'];
