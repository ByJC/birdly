(function() {
    'use strict';

    angular
        .module('app.expense')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'expense',
                config: {
                    url: '/expense',
                    templateUrl: 'app/expense/expense.html',
                    controller: 'ExpenseController',
                    controllerAs: 'vm',
                    title: 'Expense',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Expense'
                    }
                }
            }
        ];
    }
})();
