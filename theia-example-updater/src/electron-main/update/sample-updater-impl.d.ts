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
/// <reference types="node" />
import { ElectronMainApplication, ElectronMainApplicationContribution } from '@theia/core/lib/electron-main/electron-main-application';
import { SampleUpdater, SampleUpdaterClient, UpdateStatus } from '../../common/updater/sample-updater';
export declare class SampleUpdaterImpl implements SampleUpdater, ElectronMainApplicationContribution {
    protected clients: Array<SampleUpdaterClient>;
    protected inProgressTimer: NodeJS.Timer | undefined;
    protected available: boolean;
    checkForUpdates(): Promise<{
        status: UpdateStatus;
    }>;
    onRestartToUpdateRequested(): void;
    setUpdateAvailable(available: boolean): Promise<void>;
    onStart(application: ElectronMainApplication): void;
    onStop(application: ElectronMainApplication): void;
    setClient(client: SampleUpdaterClient | undefined): void;
    disconnectClient(client: SampleUpdaterClient): void;
    dispose(): void;
}
//# sourceMappingURL=sample-updater-impl.d.ts.map