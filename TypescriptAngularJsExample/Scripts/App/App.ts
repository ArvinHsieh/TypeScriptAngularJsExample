module ExampleApp {

    export class Config {

        static $inject = ["$httpProvider"];

        constructor($httpProvider: ng.IHttpProvider) {
            // Set Ajax XMLHttpRequest Header
            $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        }

    }

    export class ExceptionHandlerProvider implements ng.IExceptionHandlerProvider {
        static $name = "$exceptionHandler";

        public mode(mode: string): void {
            // Set mode is log or rethorw
        }

        public $get($injector) {
            return (exception, cause) => {
                console.error(exception);
            };
        }
    }
   
    var app = angular.module("ExampleApp", []);
    app.config(Config);
    app.provider(ExceptionHandlerProvider.$name, ExceptionHandlerProvider);

    // register services
    app.service(Common.DataProvider.$name, Common.DataProvider);
    app.service(Services.BookManagerService.$name, Services.BookManagerService);

    // register controllers
    app.controller(Controllers.BookManagerCtrl.$name, Controllers.BookManagerCtrl);

    // register directives
    app.directive(Directives.AutoDisabled.$name, Directives.AutoDisabled.$inject);
}