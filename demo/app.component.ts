import { Component, ViewContainerRef, AfterContentInit } from '@angular/core';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

import { Router, NavigationEnd } from '@angular/router';

// google code-prettify
declare const PR: any;

let template = require('./app.component.html');

@Component({
    selector: 'demo-app',
    template,
    directives: [ MainMenuComponent, TopMenuComponent ]
})
export class AppComponent implements AfterContentInit {
    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef, private router: Router) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }

    public ngAfterContentInit(): any {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (typeof PR !== 'undefined') {
                    // google code-prettify
                    setTimeout(PR.prettyPrint, 50);
                }
            }
        });
    }
}