var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ViewEncapsulation, ElementRef, Renderer } from '@angular/core';
import { BaseDynamicComponent } from './base-dynamic-component';
import { DialogRef } from '../models/dialog-ref';
/**
 * A component that acts as a top level container for an open modal window.
 */
var CSSDialogContainer = (function (_super) {
    __extends(CSSDialogContainer, _super);
    function CSSDialogContainer(dialog, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialog = dialog;
        _this.activateAnimationListener();
        return _this;
    }
    return CSSDialogContainer;
}(BaseDynamicComponent));
export { CSSDialogContainer };
CSSDialogContainer.decorators = [
    { type: Component, args: [{
                selector: 'css-dialog-container',
                host: {
                    'tabindex': '-1',
                    'role': 'dialog'
                },
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
CSSDialogContainer.ctorParameters = function () { return [
    { type: DialogRef, },
    { type: ElementRef, },
    { type: Renderer, },
]; };
//# sourceMappingURL=css-dialog-container.js.map