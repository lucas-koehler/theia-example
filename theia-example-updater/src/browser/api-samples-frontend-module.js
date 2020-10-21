"use strict";
/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var sample_dynamic_label_provider_command_contribution_1 = require("./label/sample-dynamic-label-provider-command-contribution");
var sample_unclosable_view_contribution_1 = require("./view/sample-unclosable-view-contribution");
var sample_output_channel_with_severity_1 = require("./output/sample-output-channel-with-severity");
var sample_menu_contribution_1 = require("./menu/sample-menu-contribution");
var sample_file_watching_contribution_1 = require("./file-watching/sample-file-watching-contribution");
require("../../src/browser/style/branding.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    sample_dynamic_label_provider_command_contribution_1.bindDynamicLabelProvider(bind);
    sample_unclosable_view_contribution_1.bindSampleUnclosableView(bind);
    sample_output_channel_with_severity_1.bindSampleOutputChannelWithSeverity(bind);
    sample_menu_contribution_1.bindSampleMenu(bind);
    sample_file_watching_contribution_1.bindSampleFileWatching(bind);
});
//# sourceMappingURL=api-samples-frontend-module.js.map