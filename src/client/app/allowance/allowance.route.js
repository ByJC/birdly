(function() {
    'use strict';

    angular
        .module('app.allowance')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'allowance',
                config: {
                    url: '/allowance',
                    templateUrl: 'app/allowance/allowance.html',
                    controller: 'AllowanceController',
                    controllerAs: 'vm',
                    title: 'Allowance',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Allowance'
                    }
                }
            }
        ];
    }
})();
