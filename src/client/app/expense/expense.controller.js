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

        vm.steps = getStepsForCreation();
        vm.takePicture = takePicture;
        vm.validPicture = validPicture;
        vm.step = 0;

        activate();

        function activate() {
            logger.info('Activated Expense View');
        }

        function takePicture() {
          vm.isPhotoTaken = !vm.isPhotoTaken;
          vm.step = 1;
        }

        function validPicture() {
          vm.step = 2;
        }

        function getStepsForCreation() {
          return [
            {
              label:'Prenez votre facture en photo.'
            },
            {
              label:'Si cette photo vous convient, validez la.'
            },
            {
              label:'Ajoutez des tags.'
            }
          ];
        }
    }
})();
