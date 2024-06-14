var app = angular.module('toDoApp', []);

app.controller('FormController', ['$scope', function($scope) {
  $scope.lead = {
    area: 0,
    size: 0,
    addItem: false,
    checkItem: false,
    lostEnquiries: false,
    qtySqft: 0,
    qty: 0,
    mrp: 0,
    net: 0,
    mrpTotal: 0,
    netTotal: 0,
    sale: 0,
    taxAmt: 0,
    totalTax: 0,
    totalPrice: 0,
    totalSale: 0,
    handlingChrg: 0,
    transportation: 0,
    loading: 0,
    noLabel: 0,
    roundOff: 0,
    grandTotal: 0,
    paid: 0,
    balance: 0,
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

  $scope.rightSideInputFields = [
    { id: 'totalTax', label: 'Total Tax', disabled: true },
    { id: 'totalPrice', label: 'Total Price', disabled: true },
    { id: 'totalSale', label: 'Total Sale Value', disabled: true },
    { id: 'handlingChrg', label: 'Handling Charges' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'loading', label: 'Loading' },
    { id: 'noLabel', label: '', showRadioButtons: true },
    { id: 'roundOff', label: 'Round Off' },
    { id: 'grandTotal', label: 'Grand Total' },
    { id: 'paid', label: 'Paid', disabled: true },
    { id: 'balance', label: 'Balance', disabled: true },
  ];

  $scope.isFieldDisabled = function(fieldId) {
    var field = $scope.rightSideInputFields.find(function(item) {
        return item.id === fieldId;
    });
    return field && field.disabled;
  };

  $scope.setFieldBackgroundColor = function(fieldId) {
    if (fieldId === 'grandTotal') {
        return 'lightgreen';
    }
  };

  $scope.showToDoForm = true;
  $scope.closeForm = function() {
    $scope.showToDoForm = false;
  };

  $scope.prevPage = function() {
    $scope.showToDoForm = true;
  };

  $scope.todayFollowUp = { count: 220, amount: '1,76,550', color: '#007bff' };
  $scope.pending = { count: 3020, amount: '1,23,543', color: '#dc3545' };
  $scope.thisWeek = { count: 1376, amount: '23,543', color: '#ffc107' };
  $scope.upcoming = { count: 7805, amount: '35,543', color: '#28a745' };
  $scope.all = { count: 14918, amount: '1,30,99,543', color: '#a448cb' };

  $scope.enquiries = [
    { nameLoc: 'BRUCE WAYNE', userStatus: 'Alfred P', type: 'Follow-Up call', remarks: 'Purchased', amount: '10,000', created: '11 June', updated: '11 June', followUp: '11 June', source: 'Walk in' },
    { nameLoc: 'CLARK KENT', userStatus: 'Jonathan K', type: 'Follow-Up call', remarks: 'Enquiry', amount: '9450', created: '11 June', updated: '11 June', followUp: '11 June', source: 'Walk in' },
    { nameLoc: 'DIANA PRINCE', userStatus: 'Bruce W', type: 'Follow-Up call', remarks: 'Switched Off', amount: '9000', created: '12 June', updated: '13 June', followUp: '13 June', source: 'Field visit' },
    { nameLoc: 'HAL JORDAN', userStatus: 'Bruce W', type: 'Follow-Up call', remarks: 'Call not connected', amount: '5000', created: '12 June', updated: '13 June', followUp: '14 June', source: 'Field visit' },
    { nameLoc: 'LEX LUTHOR', userStatus: 'Lex corp', type: 'Follow-Up call', remarks: 'Purchased', amount: '10,000', created: '12 June', updated: '13 June', followUp: '14 June', source: 'Walk in' },
  ];
}]);
