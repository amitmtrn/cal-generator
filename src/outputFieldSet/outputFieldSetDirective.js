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
	this.scope = $scope;
	  
  	this.scope.$on('save', this.save);
  }

	save(e) {
		console.log(e);
	}

}

outputFieldSetController.$inject=['$element', '$interval', '$window', '$scope'];
