(function () {
    'use strict';

    angular
        .module('app.allowance')
        .controller('AllowanceController', ExpenseController);

    ExpenseController.$inject = ['logger'];
    /* @ngInject */
    function ExpenseController(logger) {
        var vm = this;
        vm.title = 'Allowance';

        activate();

        function activate() {
            logger.info('Activated Expense View');
        }

}})();
