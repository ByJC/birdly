(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', '$location', '$scope'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, $location, $scope) {
        var vm = this;

        vm.showExpenses = true;
        vm.createExpense = createExpense;
        vm.createAllowance = createAllowance;
        vm.switch = switchTable;
        vm.expenses = [];
        vm.allowances = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getExpenses(), getAllowances()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getAllowances() {
          return dataservice.getAllowances().then(function(data){
            vm.allowances = data;
            return vm.allowances;
          })
        }

        function getExpenses() {
          return dataservice.getExpenses().then(function(data) {
            vm.expenses = data;
            return vm.expenses;
          })
        }

        function createAllowance() {
          $location.path('/allowance');
        }

        function createExpense() {
          $location.path('/expense');
        }

        function switchTable() {
          vm.showExpenses = !vm.showExpenses;
        }

        $scope.$on('expense-create', function (event, data){
          console.log('toto');
          vm.expenses.push(data);
        });

    }
})();
