[![Join the chat at https://gitter.im/ng2-component-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ng2-component-starter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/axa-ch/ng2-component-starter.svg)](https://david-dm.org/axa-ch/ng2-component-starter)
[![devDependencies Status](https://david-dm.org/axa-ch/ng2-component-starter/dev-status.svg)](https://david-dm.org/axa-ch/ng2-component-starter?type=dev)

# ng2-component-starter
This repository is a starting point to build reuseable and testable Angular 2 components.

## Features

* [Angular 2.0.1](https://angular.io/)
* [TypeScript 2](https://www.typescriptlang.org/docs/release-notes/typescript-2.0.html)
* Type management with NPM ([@types](https://www.npmjs.com/~types))
* Demo application that shows the component(s) in action
  * webpack
* Linter's to follow the official Angular 2 Style Guide through [Codelyzer](https://www.npmjs.com/package/codelyzer)

## Installation

1. Clone the repository  
`git clone https://github.com/axa-ch/ng2-component-starter.git`
2. Change directory to ng2-component-starter  
`cd ng2-component-starter`
3. Install global node module dependencies  
`npm install webpack protractor rimraf -g`
4. Run `npm install` to install local node-module dependencies

## Commands

* `npm run demo` - Run demo to see sample components in action (visit http://localhost:3000)

## Making a component

### Cleanup checklist
This starter project could have some items / settings you probably want to remove or adjust. This checklist helps you to review your component needs.

* [ ] Fork repository to your own account or wherever you want
* [ ] Clone your repository locally
* [ ] Refactor README.md in `main` folder
  1. This includes refactoring repo-clone link
  2. This includes refactoring gitter link and (dev)Dependency status links
* [ ] Edit package.json
  1. Edit different properties such as `name`, `description`, `repository-url` and further more
* [ ] Edit `demo/index.html`
  1. Author link
  2. Meta description
* [ ] Edit `demo/components/clock-section.component.ts`
  1. `ClockSectionComponent` src property
* [ ] Edit `demo/components/getting-started-section/getting-started-section.component.html`
  1.  iframe src
* [ ] Edit `demo/components/getting-started-section/getting-started-section.component.ts`
  1. `name` property
* [ ] Implement your new component

## Publish your component to the offical npm registry

If you would like to publish your component to the **@axa-ch** scope, you have to log in to this account using npm. [See contact information on npmjs.](https://www.npmjs.com/~axa-ch)  

1. `npm login` - Then enter user and password and email
2. `npm publish --access public` - Publishes the repo.
3. Consider adding your personal npmjs user as contributor to the newly published repository. So you can continue working with your personal account.

# ng2-your-component

[Describe your component here. Mention dependencies to other modules/components here if neccessary.]

## Installation

[Required steps to make your component ready to use]

`npm install ng2-your-component --save`

## Demo

[Link to a location, where to see your component in action]

## Usage

[How to use your component. How to get started quickly.]

### CommonJS

ng2-your-component ships as un-bundled CommonJS modules (located in the dist folder), which can be imported with require('ng2-your-component');, or import for those environments that support this method (e.g. TypeScript 1.6+).

### System.register

ng2-your-component also ships with a bundle in the system format (dist/ng2-your-component-bundle.js), suitable for use with the es6-module-loader and related loaders such as SystemJS.

## API

[Refer to API documentation of your component. Cosider doing this in the GitHub wiki.]