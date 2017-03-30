var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, ViewEncapsulation, Renderer } from '@angular/core';
import { BaseDynamicComponent, DialogRef } from 'angular2-modal';
var BSModalContainer = (function (_super) {
    __extends(BSModalContainer, _super);
    function BSModalContainer(dialog, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialog = dialog;
        _this.activateAnimationListener();
        return _this;
    }
    return BSModalContainer;
}(BaseDynamicComponent));
export { BSModalContainer };
BSModalContainer.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal-container',
                host: {
                    'tabindex': '-1',
                    'role': 'dialog',
                    'class': 'modal fade',
                    'style': 'position: absolute; display: block'
                },
                encapsulation: ViewEncapsulation.None,
                template: "<div [ngClass]=\"dialog.context.dialogClass\" \n      [class.modal-lg]=\"dialog.context.size == 'lg'\"\n      [class.modal-sm]=\"dialog.context.size == 'sm'\">\n  <div class=\"modal-content\" style=\"display:block\" role=\"document\" overlayDialogBoundary>\n    <ng-content></ng-content>\n  </div>    \n</div>"
            },] },
];
/** @nocollapse */
BSModalContainer.ctorParameters = function () { return [
    { type: DialogRef, },
    { type: ElementRef, },
    { type: Renderer, },
]; };
//# sourceMappingURL=modal-container.component.js.map