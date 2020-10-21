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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var proxy_factory_1 = require("@theia/core/lib/common/messaging/proxy-factory");
var electron_main_application_1 = require("@theia/core/lib/electron-main/electron-main-application");
var electron_connection_handler_1 = require("@theia/core/lib/electron-common/messaging/electron-connection-handler");
var sample_updater_1 = require("../../common/updater/sample-updater");
var sample_updater_impl_1 = require("./sample-updater-impl");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(sample_updater_impl_1.SampleUpdaterImpl).toSelf().inSingletonScope();
    bind(sample_updater_1.SampleUpdater).toService(sample_updater_impl_1.SampleUpdaterImpl);
    bind(electron_main_application_1.ElectronMainApplicationContribution).toService(sample_updater_1.SampleUpdater);
    bind(electron_connection_handler_1.ElectronConnectionHandler).toDynamicValue(function (context) {
        return new proxy_factory_1.JsonRpcConnectionHandler(sample_updater_1.SampleUpdaterPath, function (client) {
            var server = context.container.get(sample_updater_1.SampleUpdater);
            server.setClient(client);
            client.onDidCloseConnection(function () { return server.disconnectClient(client); });
            return server;
        });
    }).inSingletonScope();
});
//# sourceMappingURL=sample-updater-main-module.js.map