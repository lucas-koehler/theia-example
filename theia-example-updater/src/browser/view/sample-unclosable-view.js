"use strict";
/********************************************************************************
 * Copyright (C) 2020 TORO Limited and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleViewUnclosableView = void 0;
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var React = require("react");
/**
 * This sample view is used to demo the behavior of "Widget.title.closable".
 */
var SampleViewUnclosableView = /** @class */ (function (_super) {
    __extends(SampleViewUnclosableView, _super);
    function SampleViewUnclosableView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleViewUnclosableView_1 = SampleViewUnclosableView;
    SampleViewUnclosableView.prototype.init = function () {
        this.id = SampleViewUnclosableView_1.ID;
        this.title.caption = 'Sample Unclosable View';
        this.title.label = 'Sample Unclosable View';
        this.title.iconClass = 'fa fa-window-maximize';
        this.title.closable = false;
        this.update();
    };
    SampleViewUnclosableView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            "Closable",
            React.createElement("input", { type: "checkbox", defaultChecked: this.title.closable, onChange: function (e) { return _this.title.closable = e.target.checked; } })));
    };
    var SampleViewUnclosableView_1;
    SampleViewUnclosableView.ID = 'sampleUnclosableView';
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SampleViewUnclosableView.prototype, "init", null);
    SampleViewUnclosableView = SampleViewUnclosableView_1 = __decorate([
        inversify_1.injectable()
    ], SampleViewUnclosableView);
    return SampleViewUnclosableView;
}(browser_1.ReactWidget));
exports.SampleViewUnclosableView = SampleViewUnclosableView;
//# sourceMappingURL=sample-unclosable-view.js.map