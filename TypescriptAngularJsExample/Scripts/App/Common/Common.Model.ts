module ExampleApp.Common {

    export interface IApiResult<TModel> {
        Code: number;
        Data?: TModel;
    }

}
