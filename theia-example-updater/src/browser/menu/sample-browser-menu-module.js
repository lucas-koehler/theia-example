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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var disposable_1 = require("@theia/core/lib/common/disposable");
var browser_menu_plugin_1 = require("@theia/core/lib/browser/menu/browser-menu-plugin");
var sample_menu_contribution_1 = require("./sample-menu-contribution");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(browser_menu_plugin_1.BrowserMainMenuFactory).to(SampleBrowserMainMenuFactory).inSingletonScope();
});
var SampleBrowserMainMenuFactory = /** @class */ (function (_super) {
    __extends(SampleBrowserMainMenuFactory, _super);
    function SampleBrowserMainMenuFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleBrowserMainMenuFactory.prototype.handleDefault = function (menuCommandRegistry, menuNode) {
        if (menuNode instanceof sample_menu_contribution_1.PlaceholderMenuNode && menuCommandRegistry instanceof SampleMenuCommandRegistry) {
            menuCommandRegistry.registerPlaceholderMenu(menuNode);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SampleBrowserMainMenuFactory.prototype.createMenuCommandRegistry = function (menu, args) {
        if (args === void 0) { args = []; }
        var menuCommandRegistry = new SampleMenuCommandRegistry(this.services);
        this.registerMenu(menuCommandRegistry, menu, args);
        return menuCommandRegistry;
    };
    SampleBrowserMainMenuFactory.prototype.createMenuWidget = function (menu, options) {
        return new SampleDynamicMenuWidget(menu, options, this.services);
    };
    SampleBrowserMainMenuFactory = __decorate([
        inversify_1.injectable()
    ], SampleBrowserMainMenuFactory);
    return SampleBrowserMainMenuFactory;
}(browser_menu_plugin_1.BrowserMainMenuFactory));
var SampleMenuCommandRegistry = /** @class */ (function (_super) {
    __extends(SampleMenuCommandRegistry, _super);
    function SampleMenuCommandRegistry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholders = new Map();
        return _this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SampleMenuCommandRegistry.prototype.registerPlaceholderMenu = function (menu) {
        var id = menu.id;
        if (this.placeholders.has(id)) {
            return;
        }
        this.placeholders.set(id, menu);
    };
    SampleMenuCommandRegistry.prototype.snapshot = function () {
        var e_1, _a;
        _super.prototype.snapshot.call(this);
        try {
            for (var _b = __values(this.placeholders.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var menu = _c.value;
                this.toDispose.push(this.registerPlaceholder(menu));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    SampleMenuCommandRegistry.prototype.registerPlaceholder = function (menu) {
        var id = menu.id;
        var unregisterCommand = this.addCommand(id, {
            execute: function () { },
            label: menu.label,
            icon: menu.icon,
            isEnabled: function () { return false; },
            isVisible: function () { return true; }
        });
        return disposable_1.Disposable.create(function () { return unregisterCommand.dispose(); });
    };
    return SampleMenuCommandRegistry;
}(browser_menu_plugin_1.MenuCommandRegistry));
var SampleDynamicMenuWidget = /** @class */ (function (_super) {
    __extends(SampleDynamicMenuWidget, _super);
    function SampleDynamicMenuWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleDynamicMenuWidget.prototype.handleDefault = function (menuNode) {
        if (menuNode instanceof sample_menu_contribution_1.PlaceholderMenuNode) {
            return [{
                    command: menuNode.id,
                    type: 'command'
                }];
        }
        return [];
    };
    return SampleDynamicMenuWidget;
}(browser_menu_plugin_1.DynamicMenuWidget));
//# sourceMappingURL=sample-browser-menu-module.js.map