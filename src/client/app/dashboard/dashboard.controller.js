(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', '$location'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, $location) {
        var vm = this;

        vm.createNewExpense = createNewExpense;
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

        function createNewExpense() {
          $location.path('/expense');
        }

    }
})();
