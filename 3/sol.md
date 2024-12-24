
# Chapter 03 - Laying the Foundation

## What is NPM?

- NPM is Node Package Manager for JavaScript
- It is the default package manager for Node.js
- It consists of two main parts:
  - CLI (Command Line Interface) tool for publishing/installing packages
  - Online repository that hosts JavaScript packages
- Used to manage dependencies and packages in projects
- Allows installing external packages/modules

## What is Parcel/Webpack? Why do we need it?

- They are web application bundlers
- Bundlers help package/bundle application code and dependencies for production
- Key features:
  - Code splitting
  - Minification
  - Hot Module Replacement
  - Development server
  - Asset optimization
- We need bundlers to:
  - Optimize code for production
  - Handle dependencies
  - Convert modern JS to browser compatible code
  - Process other assets like CSS, images etc.

## What is .parcel-cache?

- Directory created by Parcel bundler
- Stores information about your project when parcel builds it
- Helps in faster subsequent builds by caching
- Can be safely deleted to free space
- Should be added to .gitignore

## What is npx?

- NPX stands for Node Package Execute
- Comes with npm 5.2+
- Allows executing npm package binaries without installing them globally
- Useful for:
  - Running one-off commands
  - Testing different package versions
  - Avoiding global package installations

## Dependencies vs devDependencies

Dependencies:

- Required for production environment
- Essential for application to run
- Installed using: `npm install <package>`

devDependencies:

- Only needed during development/testing
- Not required in production
- Installed using: `npm install --save-dev <package>`
- Examples: testing libraries, bundlers, linters

## What is Tree Shaking?

- Removal of unused/dead code from bundle
- Works with ES6 module syntax (import/export)
- Reduces final bundle size
- Supported by modern bundlers like Webpack/Parcel
- Only includes code that is actually used

## Hot Module Replacement (HMR)

- Feature that updates modules in browser while application runs
- No full page reload needed
- Maintains application state
- Improves development experience
- Faster feedback loop during development

## 5 Superpowers of Parcel

1. Zero Configuration
   - Works out of the box
   - No config files needed
   - Smart defaults

2. Blazing Fast Builds
   - Parallel processing
   - Caching for faster rebuilds
   - Optimized asset bundling

3. Hot Module Replacement
   - Real-time updates
   - No page refresh needed
   - Maintains state

4. Code Splitting
   - Automatic splitting
   - Dynamic imports
   - Optimized loading

5. Robust Asset Support
   - Handles various file types
   - Built-in transformations
   - Automatic optimization

## What is .gitignore?

- File that tells Git which files/folders to ignore
- Should add:
  - node_modules
  - build directories
  - .env files
  - .parcel-cache
  - dist folder
  - log files
  
Should not add:

- Source code
- Configuration files
- Documentation
- Important project files

## package.json vs package-lock.json

package.json:

- Project metadata
- Lists dependencies
- Contains scripts
- Can have version ranges
- Manually maintainable

package-lock.json:

- Exact versions of dependencies
- Ensures consistent installs
- Generated automatically
- Complete dependency tree
- Should not be modified manually

## Why not modify package-lock.json?

- Automatically generated file
- Ensures dependency consistency
- Maintains exact versions
- Could break dependency tree
- Risk of version conflicts

## What is node_modules?

- Directory containing project dependencies
- Created by npm install
- Contains all installed packages
- Should not be pushed to Git because:
  - Very large size
  - Can be regenerated
  - Different across environments
  - Increases repository size

## What is the dist folder?

- Contains production-ready code
- Created by build process
- Minified and optimized files
- Generated automatically
- Can be regenerated anytime

## What is browserslist?

- Config to specify browser support
- Used by build tools
- Ensures compatibility
- Can be specified in package.json
- Helps in CSS/JS transformations

## Different Bundlers

Vite:

- Modern, fast bundler
- Built for Vue.js
- ES modules based
- Great dev experience

Webpack:

- Most popular bundler
- Highly configurable
- Large ecosystem
- Complex configuration

Parcel:

- Zero configuration
- Fast performance
- Easy to use
- Built-in optimizations

## Caret (^) vs Tilde (~)

Caret (^):

- Updates minor versions
- ^1.2.3 allows 1.x.x
- More flexible updates

Tilde (~):

- Updates patch versions
- ~1.2.3 allows 1.2.x
- More restrictive

## Script Types in HTML

1. classic scripts (no type or type="text/javascript")
   - Default behavior
   - Blocks parsing
   - Executed in order

2. module scripts (type="module")
   - Uses ES6 modules
   - Deferred by default
   - Strict mode automatic

3. async scripts (async attribute)
   - Non-blocking
   - Load in parallel
   - Execute when ready

4. defer scripts (defer attribute)
   - Non-blocking
   - Maintains order
   - Executes after HTML parsing
