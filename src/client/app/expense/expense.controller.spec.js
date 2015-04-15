/* jshint -W117, -W030 */
describe('ExpenseController', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.expense');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('ExpenseController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Expense controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });
});
