(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, logger) {
        var service = {
            getExpenses: getExpenses,
            getAllowances : getAllowances
        };

        return service;

        function getAllowances() {
            return $http.get('/api/allowances')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for allowances failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }

        function getExpenses() {
            return $http.get('/api/expenses')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for expenses failed. ' + error.data.description;
                logger.error(msg);
                return $q.reject(msg);
            }
        }
    }
})();
