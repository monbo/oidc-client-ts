// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

import { CordovaPopupWindow } from "./CordovaPopupWindow";
import { INavigator } from "./INavigator";

export class CordovaPopupNavigator implements INavigator {
    public prepare(params: any) {
        const popup = new CordovaPopupWindow(params);
        return Promise.resolve(popup);
    }
}