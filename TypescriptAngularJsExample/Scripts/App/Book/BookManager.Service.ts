module ExampleApp.Services {

    export class BookManagerService {
        static $name = "BookManagerSvc";
        static $inject = ["DataProvider"];

        private dataProvider: Common.IDataProvider;

        constructor(dataProvider: Common.IDataProvider) {
            this.dataProvider = dataProvider;
        }

        public GetBooks(callback: (data: Array<Models.Book>, error: Error) => void): void {
            this.dataProvider.Get("GetBooks", HttpMethodEnum.Get)
                .then((result: Common.IApiResult<Array<Models.Book>>) => {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(result.Data, null);
                    } else {
                        callback(null, null);
                    }
                })
                .catch((error) => {
                    callback(null, error);
                });
        }

        public AddBook(data: Models.Book, callback: (isSuccess: boolean, error: Error) => void): void {
            this.dataProvider.Get("AddBook", HttpMethodEnum.Post, data)
                .then((result: Common.IApiResult<any>) => {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(true, null);
                    } else {
                        callback(false, null);
                    }
                })
                .catch((error) => {
                    callback(null, error);
                });
        }

        public UpdateBook(data: Models.Book, callback: (isSuccess: boolean, error: Error) => void): void {
            this.dataProvider.Get("UpdateBook", HttpMethodEnum.Post, data)
                .then((result: Common.IApiResult<any>) => {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(true, null);
                    } else {
                        callback(false, null);
                    }
                })
                .catch((error) => {
                    callback(null, error);
                });
        }

        public DeleteBook(data: Models.Book, callback: (isSuccess: boolean, error: Error) => void): void {
            this.dataProvider.Get("DeleteBook", HttpMethodEnum.Post, data)
                .then((result: Common.IApiResult<any>) => {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(true, null);
                    } else {
                        callback(false, null);
                    }
                })
                .catch((error) => {
                    callback(null, error);
                });
        }
    }

}