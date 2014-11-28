
var controllers = angular.module('controllers', ['smart-table']);

controllers.controller('listCtrl', ['$scope', '$filter', function (scope, filter) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.getters={
        firstName: function (value) {
            //this will sort by the length of the first name string
            return value.firstName.length;
        }
    };
	
	scope.selectRow = function (row) {
		scope.selectedRow = row;
	};
	// scope.selectedRow = scope.rowCollection[0];
	setTimeout(function () {
		$('table[st-table="rowCollection"] tbody tr:eq(0)').trigger('click');
	}, 10);
}]);