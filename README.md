[![Join the chat at https://gitter.im/ng2-component-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ng2-component-starter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/axa-ch/ng2-component-starter.svg)](https://david-dm.org/axa-ch/ng2-component-starter)
[![devDependencies Status](https://david-dm.org/axa-ch/ng2-component-starter/dev-status.svg)](https://david-dm.org/axa-ch/ng2-component-starter?type=dev)

# ng2-component-starter
This repository is a starting point to build reuseable and testable Angular 2 components.

## Features

* [Angular 2 RC5](https://angular.io/)
* Linter's to follow the official Angular 2 Style Guide through [Codelyzer](https://www.npmjs.com/package/codelyzer)
* Type manager with [Typings](https://github.com/typings/typings)

## Installation

1. Clone the repository  
`git clone https://github.com/axa-ch/ng2-component-starter.git`
2. Change directory to ng2-component-starter  
`cd ng2-component-starter`
3. Install global node module dependencies  
`npm install webpack protractor typings rimraf -g`
4. Run `npm install` to install local node-module dependencies
5. Run `typings install` to install required TypeScript typings.

## Commands

## Making a component

### Cleanup checklist
* Fork repository to your own account or wherever you want
* Clone your repository localy
* Refactor README.md in `main` folder
⋅⋅* This includes refactoring repo-clone link
⋅⋅* This includes refactoring gitter link and (dev)Dependency status links
* Edit package.json
⋅⋅* Edit diffrent properties such as `name`, `description`, `repository-url` and further more
* Edit `demo/index.html`
⋅⋅* Author link
⋅⋅* Meta description
* Edit `demo/components/clock-section.ts`
⋅⋅* `ClockSectionComponent` src property
* Edit `demo/components/getting-started/getting-started.template.html`
⋅⋅* iFrame src
* Edit `demo/components/getting-started/getting-started.ts`
⋅⋅* `name` property
* Implement your new component

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

This starter project could have some items / settings you probably want to remove or adjust. This checklist helps you to review your component needs.

# ng2-your-component

[Describe your component here. Mention dependencies to other modules/components here if neccessary.]

## Installation

[Required steps to make your component ready to use]

`npm install ng2-your-component --save`

## Demo

[Link to a location, where to see your component in action]

## Usage

[How to use your component. How to get started quickly.]

## API

[Refer to API documentation of your component. Cosider doing this in the GitHub wiki.]