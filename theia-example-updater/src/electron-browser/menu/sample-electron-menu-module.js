"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var electron_main_menu_factory_1 = require("@theia/core/lib/electron-browser/menu/electron-main-menu-factory");
var sample_menu_contribution_1 = require("../../browser/menu/sample-menu-contribution");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(electron_main_menu_factory_1.ElectronMainMenuFactory).to(SampleElectronMainMenuFactory).inSingletonScope();
});
var SampleElectronMainMenuFactory = /** @class */ (function (_super) {
    __extends(SampleElectronMainMenuFactory, _super);
    function SampleElectronMainMenuFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SampleElectronMainMenuFactory.prototype.handleDefault = function (menuNode, args, options) {
        if (args === void 0) { args = []; }
        if (menuNode instanceof sample_menu_contribution_1.PlaceholderMenuNode) {
            return [{
                    label: menuNode.label,
                    enabled: false,
                    visible: true
                }];
        }
        return [];
    };
    SampleElectronMainMenuFactory = __decorate([
        inversify_1.injectable()
    ], SampleElectronMainMenuFactory);
    return SampleElectronMainMenuFactory;
}(electron_main_menu_factory_1.ElectronMainMenuFactory));
//# sourceMappingURL=sample-electron-menu-module.js.map