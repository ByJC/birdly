(function () {
    'use strict';

    angular
        .module('app.expense')
        .controller('ExpenseController', ExpenseController);

    ExpenseController.$inject = ['logger'];
    /* @ngInject */
    function ExpenseController(logger) {
        var vm = this;
        vm.title = 'Expense';

        activate();

        function activate() {
            logger.info('Activated Expense View');
        }
    }
})();
