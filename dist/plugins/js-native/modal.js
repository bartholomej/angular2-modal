var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
import { Overlay, DROP_IN_TYPE, Modal as Modal_ } from 'angular2-modal';
import { JSNativePresetBuilder } from './presets/js-native-preset';
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        return _super.call(this, overlay) || this;
    }
    Modal.prototype.alert = function () {
        return new JSNativePresetBuilder(this, DROP_IN_TYPE.alert);
    };
    Modal.prototype.prompt = function () {
        return new JSNativePresetBuilder(this, DROP_IN_TYPE.prompt);
    };
    Modal.prototype.confirm = function () {
        return new JSNativePresetBuilder(this, DROP_IN_TYPE.confirm);
    };
    Modal.prototype.create = function (dialogRef, type, bindings) {
        return dialogRef;
    };
    return Modal;
}(Modal_));
export { Modal };
Modal.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Modal.ctorParameters = function () { return [
    { type: Overlay, },
]; };
//# sourceMappingURL=modal.js.map