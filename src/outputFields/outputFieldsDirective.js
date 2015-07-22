import 'outputFieldSet/outputFieldSetDirective';

export default angular.module('outputFields', ['outputFieldSet'])
  .directive('outputFields', outputFields);

function outputFields() {
  return {
    restrict: 'E',
    controller: outputFieldsController,
    controllerAs: 'outputs',
    template: require('outputFields/outputFieldsDirective.html')
  };
}

class outputFieldsController {

  constructor($element, $compile, $scope) {
    this.el = $element;
  	this.compile = $compile;
	this.scope = $scope;
  }

  addOutputField() {
    var compiled = this.compile('<output-field-set>')(this.scope);
  	this.el.append(compiled);
  }

}

outputFieldsController.$inject=['$element', '$compile', '$scope'];
