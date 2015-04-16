(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', '$location'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, $location) {
        var vm = this;

        vm.createExpense = createExpense;
        vm.createAllowance = createAllowance;
        vm.expenses = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getExpenses()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
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

    }
})();
