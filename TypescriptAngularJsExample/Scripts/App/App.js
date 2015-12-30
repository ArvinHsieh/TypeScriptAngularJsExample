var ExampleApp;
(function (ExampleApp) {
    var Config = (function () {
        function Config($httpProvider) {
            // Set Ajax XMLHttpRequest Header
            $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        }
        Config.$inject = ["$httpProvider"];
        return Config;
    })();
    ExampleApp.Config = Config;
    //export class ExceptionHandlerFactory ng.IServiceProviderFactory {
    //    constructor(exception, cause) {
    //        console.error(exception);
    //        return true;
    //    }
    //}
    var app = angular.module("ExampleApp", []);
    app.config(Config);
    //app.provider("$exceptionHandler", ExceptionHandler);
    // register services
    app.service(ExampleApp.Common.DataProvider.$name, ExampleApp.Common.DataProvider);
    app.service(ExampleApp.Services.BookManagerService.$name, ExampleApp.Services.BookManagerService);
    // register controllers
    app.controller(ExampleApp.Controllers.BookManagerCtrl.$name, ExampleApp.Controllers.BookManagerCtrl);
    // register directives
    app.directive(ExampleApp.Directives.AutoDisabled.$name, ExampleApp.Directives.AutoDisabled.$inject);
})(ExampleApp || (ExampleApp = {}));
//# sourceMappingURL=App.js.map