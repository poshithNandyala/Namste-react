# React Interview Questions

## Adding Images in React Apps

There are several ways to add images in React:

1. Import and use directly:

   ```jsx
   import logo from './logo.png';
   
   function App() {
     return <img src={logo} alt="Logo" />;
   }
   ```

2. Using public folder:

   ```jsx
   function App() {
     return <img src="/images/logo.png" alt="Logo" />;
   }
   ```

3. Using CDN/external URLs:

   ```jsx
   function App() {
     return <img src="https://example.com/logo.png" alt="Logo" />;
   }
   ```

4. Using require():

   ```jsx
   function App() {
     return <img src={require('./images/logo.png')} alt="Logo" />;
   }
   ```

## console.log(useState())

When we console.log(useState()), it returns an array with two elements:

```jsx
const result = useState(); // returns [undefined, function]
console.log(result); // Output: [undefined, ƒ()]
```

- First element is the state value (undefined if no initial value)
- Second element is the setter function

## useEffect without Dependency Array

When useEffect is used without a dependency array:

```jsx
useEffect(() => {
  // This code runs after every render
  console.log('Component updated');
});
```

- It will run after every render of the component
- This can lead to infinite loops if you're updating state inside
- Example of potential issue:

```jsx
useEffect(() => {
  setCount(count + 1); // This will cause infinite loop!
}); // No dependency array
```

## What is SPA (Single Page Application)?

A Single Page Application (SPA) is a web application that:

- Loads a single HTML page
- Dynamically updates content without full page reloads
- Uses client-side routing

Example of SPA structure:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Client Side Routing vs Server Side Routing

### Client Side Routing

- Happens in the browser using JavaScript
- No server requests for new pages
- Faster page transitions
- Better user experience

Example:

```jsx
// Using React Router (Client-side)
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### Server Side Routing

- Each URL request fetches new HTML from server
- Full page reloads
- Traditional approach

Example:

```html
<!-- Traditional Server-side routing -->
<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
</nav>
```

### Key Differences

1. Performance:
   - Client-side: Faster after initial load
   - Server-side: Initial page loads are faster

2. SEO:
   - Client-side: Requires additional setup for SEO
   - Server-side: Better SEO by default

3. Resource Usage:
   - Client-side: More browser resources
   - Server-side: More server resources

4. Development:
   - Client-side: More complex initial setup
   - Server-side: Simpler to implement
