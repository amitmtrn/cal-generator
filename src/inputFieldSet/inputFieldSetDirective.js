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
	  
  	this.scope.$on('save', this.save);
  }

	save(e) {
		console.log(e);
	}
	
}

inputFieldSetController.$inject=['$element', '$interval', '$window', '$scope'];
