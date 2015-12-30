var ExampleApp;
(function (ExampleApp) {
    var Controllers;
    (function (Controllers) {
        var BookManagerCtrl = (function () {
            function BookManagerCtrl($scope, $timeout, bookManagerSvc) {
                this.scope = $scope;
                this.scope.timeout = $timeout;
                this.scope.bookManagerSvc = bookManagerSvc;
                this.scope.ChangeActionModel = this.ChangeActionModel;
                this.scope.GetBooks = this.GetBooks;
                this.scope.SaveBook = this.SaveBook;
                this.scope.DeleteBook = this.DeleteBook;
                this.InitializeViewModel();
            }
            BookManagerCtrl.prototype.InitializeViewModel = function () {
                var model = new ExampleApp.Models.BookManagerViewModel();
                model.ActionModel = ActionModelEnum.ListView;
                model.IsBlock = false;
                this.scope.model = model;
            };
            BookManagerCtrl.prototype.ChangeActionModel = function (actionModel, member) {
                var scope = this;
                scope.model.ActionModel = actionModel;
                if (member) {
                    scope.model.EditModel = member;
                }
                else {
                    scope.model.EditModel = new ExampleApp.Models.Book();
                }
            };
            BookManagerCtrl.prototype.GetBooks = function () {
                var scope = this;
                scope.model.IsBlock = true;
                scope.bookManagerSvc.GetBooks(function (data) {
                    if (data == null) {
                        scope.model.Message = "Not found data.";
                    }
                    scope.timeout(function () {
                        scope.model.Books = data;
                    });
                    scope.model.IsBlock = false;
                });
            };
            BookManagerCtrl.prototype.SaveBook = function () {
                var scope = this;
                var hasBook = false;
                scope.model.Books.forEach(function (book, index) {
                    if (book.ID == scope.model.EditModel.ID) {
                        hasBook = true;
                        return;
                    }
                });
                if (hasBook) {
                    scope.bookManagerSvc.UpdateBook(scope.model.EditModel, function (isSuccess) {
                        if (isSuccess) {
                            scope.GetBooks();
                            scope.timeout(function () {
                                scope.model.Message = "success";
                                scope.model.ActionModel = ActionModelEnum.ListView;
                            });
                        }
                        else {
                            scope.timeout(function () {
                                scope.model.Message = "fail";
                            });
                        }
                    });
                }
                else {
                    scope.bookManagerSvc.AddBook(scope.model.EditModel, function (isSuccess) {
                        if (isSuccess) {
                            scope.GetBooks();
                            scope.timeout(function () {
                                scope.model.Message = "success";
                                scope.model.ActionModel = ActionModelEnum.ListView;
                            });
                        }
                        else {
                            scope.timeout(function () {
                                scope.model.Message = "fail";
                            });
                        }
                    });
                }
            };
            BookManagerCtrl.prototype.DeleteBook = function (book) {
                var scope = this;
                scope.bookManagerSvc.DeleteBook(book, function (isSuccess) {
                    if (isSuccess) {
                        scope.GetBooks();
                        scope.timeout(function () {
                            scope.model.Message = "success";
                        });
                    }
                    else {
                        scope.timeout(function () {
                            scope.model.Message = "fail";
                        });
                    }
                });
            };
            BookManagerCtrl.$name = "BookManagerCtrl";
            BookManagerCtrl.$inject = ["$scope", "$timeout", "BookManagerSvc"];
            return BookManagerCtrl;
        })();
        Controllers.BookManagerCtrl = BookManagerCtrl;
    })(Controllers = ExampleApp.Controllers || (ExampleApp.Controllers = {}));
})(ExampleApp || (ExampleApp = {}));
//# sourceMappingURL=BookManager.Controller.js.map