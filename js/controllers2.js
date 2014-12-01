
var controllers = angular.module('controllers', []);

controllers.controller('listCtrl', ['$scope', '$interval', function (scope, interval) {
    scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
	scope.gridOptions.columnDefs = [
		{ name: 'firstName' },
		{ name: 'lastName'},
		{ name: 'birthDate', displayName: 'birthDate (not focusable)', allowCellFocus : false },
		{ name: 'balance' },
		{ name: 'email' }
	];
	scope.gridOptions.multiSelect = false;
	scope.gridOptions.modifierKeysToMultiSelect = false;
	scope.gridOptions.noUnselect = true;
	scope.gridOptions.onRegisterApi = function( gridApi ) {
		scope.gridApi = gridApi;
		gridApi.selection.on.rowSelectionChanged(scope, function(row){
			scope.selectedRow = row.entity;
			console.dir(row);
		});
	};
	scope.gridOptions.data = [
        {firstName: 'Laurent1', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine2', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise3', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
	
	
	scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];
	
	interval( function() {scope.gridApi.selection.selectRow(scope.gridOptions.data[0]);}, 0, 1);

	/* scope.selectRow = function (row) {
		scope.selectedRow = row;
	};
	scope.selectedRow = scope.rowCollection[0];
	setTimeout(function () {
		$('table[st-table="rowCollection"] tbody tr:eq(0)').trigger('click');
	}, 10);
	
	//Smart Table With 8000 rows
	var moreRows = [], tempRow = {}, count = 0;
	for (var i = 0; i < 80; i ++) {
		tempRow = {};
		tempRow.firstName = 'Renard_' + (i + 1);//(function (a){return 'Renard_' + (a + 1);})(i);;
		tempRow.lastName = 'Renard';
		tempRow.birthDate = new Date(1987, 10, 9, 12, 23, 12);
		tempRow.balance = 102;
		tempRow.email = 'whatever@gmail.com';
		moreRows.push(tempRow);
	}
	scope.moreRows = moreRows; */
}]);