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
	this.element = $element;
	  
  	this.scope.$on('save', this.save.bind(this));
  }

	save(event) {
		if(!event.targetScope.results) {
			event.targetScope.results = {
				input: [],
				output: []
			};
		}
		event.targetScope.results.output.push(this.element[0].querySelector('[name="outputName"]').value);
	}

}

outputFieldSetController.$inject=['$element', '$interval', '$window', '$scope'];
