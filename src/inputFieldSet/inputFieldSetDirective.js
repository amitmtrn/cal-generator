export default angular.module('inputFieldSet', [])
  .directive('inputFieldSet', inputFieldSet);

function inputFieldSet() {
  return {
    restrict: 'E',
    controller: inputFieldSetController,
    controllerAs: 'inputfield',
    template: require('inputFieldSet/inputFieldSetDirective.html')
  };
}

class inputFieldSetController {

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
		event.targetScope.results.input.push(this.element[0].querySelector('[name="inputName"]').value);
	}
	
}

inputFieldSetController.$inject=['$element', '$interval', '$window', '$scope'];
