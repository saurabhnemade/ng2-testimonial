import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { TimerDemoComponent } from './components/timer-demo/timer-demo.component';
import { DemoSectionComponent } from './components/demo-section/demo-section.component';
import { ClockSectionComponent } from './components/clock-section.component';
import { TimerSectionComponent } from './components/timer-section.component';
import { ClockDemoComponent } from './components/clock-demo/clock-demo.component';
import { GettingStartedSectionComponent } from './components/getting-started-section/getting-started-section.component';
import { SearchFilterPipe } from './components/main-menu/search-filter.pipe';
import { ClockModule } from '../src/module';

import { routing } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent, 
        TopMenuComponent,
        TimerDemoComponent,
        DemoSectionComponent, 
        ClockDemoComponent,
        GettingStartedSectionComponent,
        ClockSectionComponent,
        TimerSectionComponent,
        SearchFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ClockModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}