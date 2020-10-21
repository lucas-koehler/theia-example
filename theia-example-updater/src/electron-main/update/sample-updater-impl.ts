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

import { ElectronMainApplication, ElectronMainApplicationContribution } from '@theia/core/lib/electron-main/electron-main-application';
import { SampleUpdater, SampleUpdaterClient, UpdateStatus } from '../../common/updater/sample-updater';

import { injectable } from 'inversify';

const {autoUpdater} = require("electron-updater");


var inProgress = false;
var available = false;

autoUpdater.on('checking-for-update', () => {
    console.info("Checking for updates");
    inProgress = true;
    available = false;
})
autoUpdater.on('update-available', () => {
    console.info("Update available");
    inProgress = false;
    available = true;
})
autoUpdater.on('update-not-available', () => {
    console.info("Update not available");
    inProgress = false;
    available = false;
})

@injectable()
export class SampleUpdaterImpl implements SampleUpdater, ElectronMainApplicationContribution {

    protected clients: Array<SampleUpdaterClient> = [];

    async checkForUpdates(): Promise<{ status: UpdateStatus }> {
        console.info("Check for updates called");
        autoUpdater.checkForUpdates();

        if (inProgress) {
            return { status: UpdateStatus.InProgress };
        }
        return { status: available ? UpdateStatus.Available : UpdateStatus.NotAvailable };
    }

    onRestartToUpdateRequested(): void {
        console.info("'Update to Restart' was requested by the frontend.");
        autoUpdater.quitAndInstall();  
    }

    onStart(application: ElectronMainApplication): void {
        // Called when the contribution is starting. You can use both async and sync code from here.
    }

    onStop(application: ElectronMainApplication): void {
        // Invoked when the contribution is stopping. You can clean up things here. You are not allowed call async code from here.
    }

    setClient(client: SampleUpdaterClient | undefined): void {
        if (client) {
            this.clients.push(client);
            console.info('Registered a new sample updater client.');
        } else {
            console.warn("Couldn't register undefined client.");
        }
    }

    disconnectClient(client: SampleUpdaterClient): void {
        const index = this.clients.indexOf(client);
        if (index !== -1) {
            this.clients.splice(index, 1);
            console.info('Disposed a sample updater client.');
        } else {
            console.warn("Couldn't dispose client; it was not registered.");
        }
    }

    dispose(): void {
        console.info('>>> Disposing sample updater service...');
        this.clients.forEach(this.disconnectClient.bind(this));
        console.info('>>> Disposed sample updater service.');
    }

}
