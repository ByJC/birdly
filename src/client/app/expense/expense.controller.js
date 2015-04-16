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

        vm.tags = [];
        vm.tag = '';
        vm.step = 0;
        vm.steps = getStepsForCreation();
        vm.takePicture = takePicture;
        vm.validPicture = validPicture;
        vm.addTag = addTag;
        vm.deleteTag = deleteTag;
        vm.validExpense = validExpense();

        activate();

        function newExpense(libelle, categorie, date, price, comment){
          this.libelle = libelle;
          this.categorie = categorie;
          this.date = date;
          this.price = price;
          this.comment = comment;
        }

        function activate() {
            logger.info('Activated Expense View');
        }

        function deleteTag(tagToDelete) {
          console.log(tagToDelete);
          vm.tags = vm.tags.filter(function (tag){
            return tag != tagToDelete;
          })
        }

        function addTag() {
          vm.tags.push(vm.tag);
          vm.tag = '';
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


        function validExpense() {

        }
    }
})();
