import { NgModule } from '@angular/core';
import { Modal as BaseModal } from 'angular2-modal';
import { Modal } from './modal';
export var providers = [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
];
var JSNativeModalModule = (function () {
    function JSNativeModalModule() {
    }
    JSNativeModalModule.getProviders = function () {
        return providers;
    };
    return JSNativeModalModule;
}());
export { JSNativeModalModule };
JSNativeModalModule.decorators = [
    { type: NgModule, args: [{
                providers: providers
            },] },
];
/** @nocollapse */
JSNativeModalModule.ctorParameters = function () { return []; };
//# sourceMappingURL=js-native.module.js.map