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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.SampleUpdaterImpl = void 0;
var inversify_1 = require("inversify");
var sample_updater_1 = require("../../common/updater/sample-updater");
var SampleUpdaterImpl = /** @class */ (function () {
    function SampleUpdaterImpl() {
        this.clients = [];
        this.available = false;
    }
    SampleUpdaterImpl.prototype.checkForUpdates = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.inProgressTimer) {
                    return [2 /*return*/, { status: sample_updater_1.UpdateStatus.InProgress }];
                }
                return [2 /*return*/, { status: this.available ? sample_updater_1.UpdateStatus.Available : sample_updater_1.UpdateStatus.NotAvailable }];
            });
        });
    };
    SampleUpdaterImpl.prototype.onRestartToUpdateRequested = function () {
        console.info("'Update to Restart' was requested by the frontend.");
        // Here comes your install and restart implementation. For example: `autoUpdater.quitAndInstall();`
    };
    SampleUpdaterImpl.prototype.setUpdateAvailable = function (available) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.inProgressTimer) {
                    clearTimeout(this.inProgressTimer);
                }
                if (!available) {
                    this.inProgressTimer = undefined;
                    this.available = false;
                }
                else {
                    this.inProgressTimer = setTimeout(function () {
                        var e_1, _a;
                        _this.inProgressTimer = undefined;
                        _this.available = true;
                        try {
                            for (var _b = __values(_this.clients), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var client = _c.value;
                                client.notifyReadyToInstall();
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }, 5000);
                }
                return [2 /*return*/];
            });
        });
    };
    SampleUpdaterImpl.prototype.onStart = function (application) {
        // Called when the contribution is starting. You can use both async and sync code from here.
    };
    SampleUpdaterImpl.prototype.onStop = function (application) {
        // Invoked when the contribution is stopping. You can clean up things here. You are not allowed call async code from here.
    };
    SampleUpdaterImpl.prototype.setClient = function (client) {
        if (client) {
            this.clients.push(client);
            console.info('Registered a new sample updater client.');
        }
        else {
            console.warn("Couldn't register undefined client.");
        }
    };
    SampleUpdaterImpl.prototype.disconnectClient = function (client) {
        var index = this.clients.indexOf(client);
        if (index !== -1) {
            this.clients.splice(index, 1);
            console.info('Disposed a sample updater client.');
        }
        else {
            console.warn("Couldn't dispose client; it was not registered.");
        }
    };
    SampleUpdaterImpl.prototype.dispose = function () {
        console.info('>>> Disposing sample updater service...');
        this.clients.forEach(this.disconnectClient.bind(this));
        console.info('>>> Disposed sample updater service.');
    };
    SampleUpdaterImpl = __decorate([
        inversify_1.injectable()
    ], SampleUpdaterImpl);
    return SampleUpdaterImpl;
}());
exports.SampleUpdaterImpl = SampleUpdaterImpl;
//# sourceMappingURL=sample-updater-impl.js.map