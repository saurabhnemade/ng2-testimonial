import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { routes } from './../../app.routes';
import { SearchFilterPipe } from './search-filter.pipe';

// webpack html imports
let template = require('./main-menu.component.html');

@Component({
    selector: 'main-menu',
    template,
    pipes: [SearchFilterPipe]
})

export class MainMenuComponent {
    public routes: any = routes;
    public search: any = {};
    public hash: string = '';

    public constructor(private router: Router) {
        this.routes = this.routes.filter((v: any) => v.path !== '**');
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.hash = event.url;
            }
        });
    }
}
