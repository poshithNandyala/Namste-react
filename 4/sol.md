
# Chapter 04 - Talk is Cheap, Show me the Code

## JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React code more readable and writing templates easier.

### What is JSX?

- JSX is a syntax extension for JavaScript recommended by React
- It allows us to write HTML-like code inside JavaScript
- JSX produces React "elements"
- Example:

### Behind the Scenes of JSX

When you write JSX:

It gets transformed to:

```javascript
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, World!'
);
```

### Superpowers of JSX

1. **HTML-like Syntax**: Makes code more readable and familiar
2. **JavaScript Expressions**: Can embed any JavaScript expression in JSX using curly braces
3. **Attributes Handling**: Can use both HTML and custom attributes
4. **Prevention of XSS**: Automatically escapes values to prevent injection attacks
5. **Object Properties**: Can pass complex data structures as props
6. **Type Safety**: Helps catch errors during compilation

### Role of type attribute in script tag

The type attribute in the script tag specifies the type of script being embedded. Common values include:

1. **text/javascript** (default) - Regular JavaScript code
2. **module** - JavaScript module with import/export support
3. **text/babel** - For JSX code that needs to be transformed
4. **application/json** - For JSON data
5. **text/typescript** - For TypeScript code

Example:

```html
<script type="text/javascript">
    // Regular JavaScript
</script>

<script type="module">
    // ES6 Module
</script>

<script type="text/babel">
    // JSX code
</script>
```

### Babel & Parcel's Role in JSX

- **Babel**: Transforms JSX into regular JavaScript that browsers can understand
- **Parcel**:
  - Bundles the application
  - Integrates with Babel for JSX transformation
  - Provides hot module replacement
  - Optimizes and minifies code

## Components

### Functional Components

- JavaScript functions that return React elements
- Can accept props as arguments
- Must start with a capital letter
- Example:

```javascript
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```

### Difference between Component Syntaxes

1. **{TitleComponent}**
     - Refers to a variable or expression that contains a component
     - Used when component is assigned to a variable
     - Example:

     ```javascript
     const TitleComponent = <h1>Hello</h1>;
     return (
         <div>{TitleComponent}</div>
     );
     ```

2. **`{<TitleComponent/>}`**
     - Self-closing component syntax
     - Used for components without children
     - Example:

     ```javascript
     return (
         <div>
             {<TitleComponent/>}
         </div>
     );
     ```

3. **`{<TitleComponent></TitleComponent>}`**
     - Standard component syntax with opening and closing tags
     - Used when component might have children
     - Example:

     ```javascript
     return (
         <div>
             {<TitleComponent>
                 <span>Child Content</span>
             </TitleComponent>}
         </div>
     );
     ```

### Composing Components

Components can be nested inside other components to create complex UIs:

```javascript
function App() {
    return (
        <div>
            <Header />
            <MainContent>
                <Article />
                <Sidebar />
            </MainContent>
            <Footer />
        </div>
    );
}
```

This composition pattern allows for:

- Reusability of components
- Separation of concerns
- Maintainable codebase
- Better organization of UI logic
