var app = angular.module('toDoApp', []);

app.controller('FormController', ['$scope', function($scope) {
  $scope.lead = {
    area: 0,
    size: 0,
    addItem: false,
    checkItem: false,
    qtySqft: 0,
    qty: 0,
    mrp: 0,
    net: 0,
    mrpTotal: 0,
    netTotal: 0,
    sale: 0,
    taxAmt: 0
  };

  $scope.sections = [
    { id: 'tiles', label: 'Tiles' },
    { id: 'sanitaryWares', label: 'Sanitary Wares' },
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'paint', label: 'Paint' },
    { id: 'doorsAndWindows', label: 'Doors and Windows' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'others', label: 'Others' }
  ];

  $scope.addressOptions = [
    { id: 'shipping', label: 'Shipping address' },
    { id: 'billing', label: 'Same as billing address' },
  ];

  $scope.showAddMoreData = false;

  $scope.toggleAddMore = function() {
    $scope.showAddMoreData = !$scope.showAddMoreData;
  };
}]);
