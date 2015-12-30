module ExampleApp.Controllers {
    
    export interface IBookManagerScope extends ng.IScope {
        model: Models.BookManagerViewModel;

        timeout: ng.ITimeoutService;
        bookManagerSvc: Services.BookManagerService;

        ChangeActionModel(actionModel: ActionModelEnum, book?: Models.Book): void;
        GetBooks(): void;
        SaveBook(): void;
        DeleteBook(book: Models.Book): void;
    }

    export class BookManagerCtrl {
        static $name = "BookManagerCtrl";
        static $inject = ["$scope", "$timeout", "BookManagerSvc"];

        private scope: IBookManagerScope;

        constructor(
            $scope: IBookManagerScope,
            $timeout: ng.ITimeoutService,
            bookManagerSvc: Services.BookManagerService) {

            this.scope = $scope;

            this.scope.timeout = $timeout;
            this.scope.bookManagerSvc = bookManagerSvc;

            this.scope.ChangeActionModel = this.ChangeActionModel;
            this.scope.GetBooks = this.GetBooks;
            this.scope.SaveBook = this.SaveBook;
            this.scope.DeleteBook = this.DeleteBook;

            this.InitializeViewModel();
        }

        private InitializeViewModel(): void {
            var model = new Models.BookManagerViewModel();
            model.ActionModel = ActionModelEnum.ListView;
            model.IsBlock = false;
            this.scope.model = model;
        }

        public ChangeActionModel(actionModel: ActionModelEnum, member?: Models.Book): void {
            var scope: IBookManagerScope = <any>this;

            scope.model.ActionModel = actionModel;

            if (member) {
                scope.model.EditModel = member;
            } else {
                scope.model.EditModel = new Models.Book();
            }
        }

        public GetBooks(): void {
            var scope: IBookManagerScope = <any>this;
            scope.model.IsBlock = true;
            scope.bookManagerSvc.GetBooks(
                (data) => {
                    if (data == null) {
                        scope.model.Message = "Not found data.";
                    }
                    scope.timeout(() => {
                        scope.model.Books = data;
                    });
                    scope.model.IsBlock = false;
                });
        }

        public SaveBook(): void {
            var scope: IBookManagerScope = <any>this;
            
            var hasBook: boolean = false;
            scope.model.Books.forEach((book, index) => {
                if (book.ID == scope.model.EditModel.ID) {
                    hasBook = true;
                    return;
                }
            });

            if (hasBook) {
                scope.bookManagerSvc.UpdateBook(
                    scope.model.EditModel,
                    (isSuccess) => {
                        if (isSuccess) {
                            scope.GetBooks();
                            scope.timeout(() => {
                                scope.model.Message = "success";
                                scope.model.ActionModel = ActionModelEnum.ListView;
                            });
                        } else {
                            scope.timeout(() => {
                                scope.model.Message = "fail";
                            });
                        }
                    });
            } else {
                scope.bookManagerSvc.AddBook(
                    scope.model.EditModel,
                    (isSuccess) => {
                        if (isSuccess) {
                            scope.GetBooks();
                            scope.timeout(() => {
                                scope.model.Message = "success";
                                scope.model.ActionModel = ActionModelEnum.ListView;
                            });
                        } else {
                            scope.timeout(() => {
                                scope.model.Message = "fail";
                            });
                        }
                    });
            }
        }

        public DeleteBook(book: Models.Book): void {
            var scope: IBookManagerScope = <any>this;

            scope.bookManagerSvc.DeleteBook(
                book,
                (isSuccess) => {
                    if (isSuccess) {
                        scope.GetBooks();
                        scope.timeout(() => {
                            scope.model.Message = "success";
                        });
                    } else {
                        scope.timeout(() => {
                            scope.model.Message = "fail";
                        });
                    }
                });
        }



    }

}