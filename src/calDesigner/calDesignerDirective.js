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
  };
}

class calDesignerController {

  constructor($scope) {
    this.scope = $scope;
  }
	
  save() {
	this.scope.results = undefined;
	this.scope.$broadcast('save', this.scope);
  }

}

calDesignerController.$inject=['$scope'];
