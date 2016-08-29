import {Component} from '@angular/core';

let name = `AXA Angular 2 Component Starter`;

// webpack html imports
let template = require('./getting-started.template.html');

let desc = `
`;
//let dependencies = require('./dependencies.md');
//let installation = require('./installation.md');
//let readingDocumentation = require('./reading-documentation.md');

@Component({
  selector: 'clock-section',
  template: template
})
export class GettingStartedSectionComponent {
  public name:string = name;
  public desc:string = desc;
  public dependencies:string = 'deps N/A'; //dependencies;
  public installation:string = 'installation N/A'; //installation;
  public readingDocumentation:string = 'reading N/A' //readingDocumentation;
}