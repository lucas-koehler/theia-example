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
import { Emitter, Command, MenuPath, MessageService, MenuModelRegistry, MenuContribution, CommandRegistry, CommandContribution } from '@theia/core/lib/common';
import { ElectronMainMenuFactory } from '@theia/core/lib/electron-browser/menu/electron-main-menu-factory';
import { SampleUpdater, SampleUpdaterClient } from '../../common/updater/sample-updater';
export declare namespace SampleUpdaterCommands {
    const CHECK_FOR_UPDATES: Command;
    const RESTART_TO_UPDATE: Command;
    const MOCK_UPDATE_AVAILABLE: Command;
    const MOCK_UPDATE_NOT_AVAILABLE: Command;
}
export declare namespace SampleUpdaterMenu {
    const MENU_PATH: MenuPath;
}
export declare class SampleUpdaterClientImpl implements SampleUpdaterClient {
    protected readonly onReadyToInstallEmitter: Emitter<void>;
    readonly onReadyToInstall: import("@theia/core").Event<void>;
    notifyReadyToInstall(): void;
}
export declare class ElectronMenuUpdater {
    protected readonly factory: ElectronMainMenuFactory;
    update(): void;
    private setMenu;
}
export declare class SampleUpdaterFrontendContribution implements CommandContribution, MenuContribution {
    protected readonly messageService: MessageService;
    protected readonly menuUpdater: ElectronMenuUpdater;
    protected readonly updater: SampleUpdater;
    protected readonly updaterClient: SampleUpdaterClientImpl;
    protected readyToUpdate: boolean;
    protected init(): void;
    registerCommands(registry: CommandRegistry): void;
    registerMenus(registry: MenuModelRegistry): void;
    protected handleUpdatesAvailable(): Promise<void>;
}
//# sourceMappingURL=sample-updater-frontend-contribution.d.ts.map