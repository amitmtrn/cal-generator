import 'inputFieldSet/inputFieldSetDirective';

export default angular.module('inputFields', ['inputFieldSet'])
  .directive('inputFields', inputFields);

function inputFields() {
  return {
    restrict: 'E',
    controller: inputFieldsController,
    controllerAs: 'inputs',
    template: require('inputFields/inputFieldsDirective.html')
  };
}

class inputFieldsController {

  constructor($element, $compile, $scope) {
    this.el = $element;
  	this.compile = $compile;
	this.scope = $scope;
  }

  addInputField() {
    var compiled = this.compile('<input-field-set>')(this.scope);
  	this.el.append(compiled);
  }

}

inputFieldsController.$inject=['$element', '$compile', '$scope'];
