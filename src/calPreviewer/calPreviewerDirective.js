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
	  this.temp = {"inputs":["x","y"],"outputs":["x+y"]};
  }

}

calPreviewerController.$inject=['$element', '$interval', '$window', '$scope'];
