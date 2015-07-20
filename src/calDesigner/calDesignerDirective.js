import 'inputFields/inputFieldsDirective';
import 'outputFields/outputFieldsDirective';

export default angular.module('calDesigner', ['inputFields', 'outputFields'])
  .directive('calDesigner', calDesigner);

function calDesigner() {
  return {
    restrict: 'E',
    controller: calDesignerController,
    controllerAs: 'designer',
    template: require('calDesigner/calDesignerDirective.html')
  }
}

class calDesignerController {

  constructor($element, $interval, $window) {
    

  }

}

calDesignerController.$inject=['$element', '$interval', '$window'];
