import math from 'mathjs';
export default angular.module('calPreviewer', [])
  .directive('calPreviewer', calPreviewer);

function calPreviewer() {
  return {
    restrict: 'E',
    controller: calPreviewerController,
    controllerAs: 'previewer',
    template: require('calPreviewer/calPreviewerDirective.html')
  };
}

class calPreviewerController {

  constructor($element, $interval, $window, $scope) {
	  this.element = $element;
	  this.temp = {"inputs":["x","y","z"],"outputs":["x+y","x-y","z^2"]};
  }

  cal() {
	NodeList.prototype.forEach = Array.prototype.forEach;
	var exp = '';
	  this.element[0].querySelectorAll('[data-type="input"]')
		  .forEach((element, index, array) => {
		  exp += element.name + '=' + element.value + ';';
	  });
	  
	  this.element[0].querySelectorAll('[data-type="output"]')
		  .forEach((element, index, array) => {
		  let fullexp = math.eval(exp + this.temp.outputs[index]);
		  element.value = fullexp.entries[0];
	  });
	  
  }
	
}

calPreviewerController.$inject=['$element', '$interval', '$window', '$scope'];
