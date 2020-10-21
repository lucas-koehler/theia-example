/********************************************************************************
 * Copyright (c) 2020 SAP SE or an SAP affiliate company and others.
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
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { interfaces } from 'inversify';
import { OutputChannelManager } from '@theia/output/lib/common/output-channel';
export declare class SampleOutputChannelWithSeverity implements FrontendApplicationContribution {
    protected readonly outputChannelManager: OutputChannelManager;
    onStart(): void;
}
export declare const bindSampleOutputChannelWithSeverity: (bind: interfaces.Bind) => void;
//# sourceMappingURL=sample-output-channel-with-severity.d.ts.map