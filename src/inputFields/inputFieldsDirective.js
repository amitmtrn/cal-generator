import 'inputFieldSet/inputFieldSetDirective';

export default angular.module('inputFields', ['inputFieldSet'])
  .directive('inputFields', inputFields);

function inputFields() {
  return {
    restrict: 'E',
    controller: inputFieldsController,
    controllerAs: 'inputs',
    template: require('inputFields/inputFieldsDirective.html')
  }
}

class inputFieldsController {

  constructor($element) {
    this.el = $element;
  }

  addInputField() {
    this.el.append('<inputFieldSet>');
  }

}

inputFieldsController.$inject=['$element'];
