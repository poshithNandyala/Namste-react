# Emmet

Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It allows developers to write HTML and CSS code more efficiently by using abbreviations that are dynamically parsed and expanded into full code snippets.

## Library vs Framework

## Library

A library is a collection of pre-written code that developers can use to optimize tasks. It provides specific functionality and is called upon by the developer when needed. Examples include jQuery, Lodash, and React.

## Framework

A framework is a comprehensive platform for developing software applications. It dictates the architecture and provides a foundation on which developers build applications. Frameworks often include libraries, tools, and best practices. Examples include Angular, Vue.js, and Django.

## CDN (Content Delivery Network)

A CDN is a network of servers distributed geographically to deliver content more efficiently to users. CDNs cache content like images, videos, and scripts on multiple servers around the world, reducing latency and improving load times. We use CDNs to enhance the performance, reliability, and scalability of web applications.

## React

React is known as React because it allows developers to build user interfaces that "react" to changes in data. React's declarative approach makes it easy to create interactive UIs by updating and rendering components efficiently when the underlying data changes.

## `crossorigin` Attribute

The `crossorigin` attribute in a script tag is used to handle the CORS (Cross-Origin Resource Sharing) requests for the script. It can have values like "anonymous" or "use-credentials". This attribute is important when loading scripts from a different origin to ensure that the correct CORS headers are sent and to control how cookies and authentication data are handled.

## React vs ReactDOM

## React Overview

React is a JavaScript library for building user interfaces. It focuses on the view layer of the application and allows developers to create reusable UI components.

## ReactDOM

ReactDOM is a package that provides DOM-specific methods that enable React to interact with the DOM. It is used to render React components to the DOM and manage the updating of the DOM when the state of components changes.

## Development vs Production React Files

## react.development.js

This is the development version of React, which includes helpful warnings, error messages, and debugging tools. It is not optimized for performance and is larger in size.

## react.production.js

This is the production version of React, which is optimized for performance and minified to reduce file size. It does not include development-specific warnings and debugging tools, making it more suitable for deployment in a live environment.

## `async` vs `defer` Attributes

## `async`

When a script has the `async` attribute, it is downloaded in parallel with other resources and executed as soon as it is available. This can lead to scripts being executed out of order.

## `defer`

When a script has the `defer` attribute, it is downloaded in parallel with other resources but executed only after the HTML document has been completely parsed. This ensures that scripts are executed in the order they appear in the document.
