
# React Export and Hooks Questions

## What is the difference between Named Export, Default export and * as export?

### Named Export

- Uses `export` keyword before declarations
- Multiple exports possible from a single file
- Must import with exact name in curly braces
- Example:

export const Component1 = () => {}
export const Component2 = () => {}
import { Component1, Component2 } from './components'

### Default Export

- Uses `export default` keyword
- Only one default export per file
- Can import with any name
- Example:

export default function Component() {}
import AnyName from './component'

### * as Export

- Imports all exports as properties of a single object
- Used for importing multiple exports
- Example:

import * as Components from './components'
// Usage: Components.Component1, Components.Component2

## What is the importance of config.js file?

- Centralizes configuration settings and environment variables
- Makes application maintenance easier
- Stores API endpoints, constants, and environment-specific values
- Helps in managing different environments (development, production, staging)
- Makes configuration changes without modifying core code
- Example:

// config.js
export const config = {
  API_URL: process.env.API_URL,
  API_KEY: process.env.API_KEY,
  DEBUG_MODE: process.env.NODE_ENV === 'development'
}

## What are React Hooks?

React Hooks are functions that allow you to:

- Use state and lifecycle features in functional components
- Introduced in React 16.8
- Replace class components with simpler functional components
- Common hooks include:
  - useState
  - useEffect
  - useContext
  - useReducer
  - useRef
  - useMemo
  - useCallback

## Why do we need a useState Hook?

The useState Hook is essential because:

- Manages state in functional components
- Provides a way to declare state variables
- Returns current state and update function
- Re-renders component when state changes
- Example:

const [count, setCount] = useState(0);
const [user, setUser] = useState(null);

Key benefits:

1. Simpler state management compared to class components
2. Multiple state variables in single component
3. Predictable state updates
4. Easy to test and maintain
5. Functional programming approach

Example usage:

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    ```jsx
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </>
    );
    ```
  );
}
