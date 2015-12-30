var ExampleApp;
(function (ExampleApp) {
    var Services;
    (function (Services) {
        var BookManagerService = (function () {
            function BookManagerService(dataProvider) {
                this.dataProvider = dataProvider;
            }
            BookManagerService.prototype.GetBooks = function (callback) {
                this.dataProvider.Get("GetBooks", HttpMethodEnum.Get)
                    .then(function (result) {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(result.Data, null);
                    }
                    else {
                        callback(null, null);
                    }
                })
                    .catch(function (error) {
                    callback(null, error);
                });
            };
            BookManagerService.prototype.AddBook = function (data, callback) {
                this.dataProvider.Get("AddBook", HttpMethodEnum.Post, data)
                    .then(function (result) {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(true, null);
                    }
                    else {
                        callback(false, null);
                    }
                })
                    .catch(function (error) {
                    callback(null, error);
                });
            };
            BookManagerService.prototype.UpdateBook = function (data, callback) {
                this.dataProvider.Get("UpdateBook", HttpMethodEnum.Post, data)
                    .then(function (result) {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(true, null);
                    }
                    else {
                        callback(false, null);
                    }
                })
                    .catch(function (error) {
                    callback(null, error);
                });
            };
            BookManagerService.prototype.DeleteBook = function (data, callback) {
                this.dataProvider.Get("DeleteBook", HttpMethodEnum.Post, data)
                    .then(function (result) {
                    if (result.Code == ApiResultTypeEnum.Success) {
                        callback(true, null);
                    }
                    else {
                        callback(false, null);
                    }
                })
                    .catch(function (error) {
                    callback(null, error);
                });
            };
            BookManagerService.$name = "BookManagerSvc";
            BookManagerService.$inject = ["DataProvider"];
            return BookManagerService;
        })();
        Services.BookManagerService = BookManagerService;
    })(Services = ExampleApp.Services || (ExampleApp.Services = {}));
})(ExampleApp || (ExampleApp = {}));
