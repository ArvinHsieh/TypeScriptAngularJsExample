var ExampleApp;
(function (ExampleApp) {
    var Models;
    (function (Models) {
        var BookManagerViewModel = (function () {
            function BookManagerViewModel() {
            }
            return BookManagerViewModel;
        })();
        Models.BookManagerViewModel = BookManagerViewModel;
        var Book = (function () {
            function Book() {
            }
            return Book;
        })();
        Models.Book = Book;
    })(Models = ExampleApp.Models || (ExampleApp.Models = {}));
})(ExampleApp || (ExampleApp = {}));
var ActionModelEnum;
(function (ActionModelEnum) {
    ActionModelEnum[ActionModelEnum["ListView"] = 0] = "ListView";
    ActionModelEnum[ActionModelEnum["EditView"] = 1] = "EditView";
})(ActionModelEnum || (ActionModelEnum = {}));
//# sourceMappingURL=BookManager.ViewModel.js.map