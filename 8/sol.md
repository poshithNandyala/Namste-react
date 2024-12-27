# What is a Microservice?

Microservices is an architectural style that structures an application as a collection of small, loosely coupled, and independently deployable services. Each service:

- Runs in its own process
- Communicates via well-defined APIs
- Handles a specific business functionality
- Can be developed, deployed and scaled independently
- Can be written in different programming languages
- Can use different data storage technologies

## What is Monolith architecture?

Monolithic architecture is a traditional software design pattern where an application is built as a single, self-contained unit. Characteristics include:

- Single codebase
- Single deployment unit
- Shared database
- Tightly coupled components
- All components must be developed in same technology stack
- Scaling requires replicating entire application

## What is the difference between Monolith and Microservice?

| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| Architecture | Single unified unit | Collection of independent services |
| Deployment | Single deployment | Independent deployments |
| Scaling | Entire application must be scaled | Individual services can be scaled |
| Development | Single technology stack | Multiple technology stacks possible |
| Database | Shared database | Independent databases |
| Communication | Function calls | API calls |
| Maintenance | More complex as size grows | Easier to maintain individual services |

## Why do we need a useEffect Hook?

useEffect Hook is essential in React for:

- Performing side effects in functional components
- Handling lifecycle events (componentDidMount, componentDidUpdate, componentWillUnmount)
- Managing API calls
- Setting up subscriptions or event listeners
- Cleaning up resources
- Updating DOM
- Managing timers and intervals

Example:

useEffect(() => {
  // API call
  fetchData();
  
  return () => {
    // Cleanup
    cleanup();
  }
}, [dependencies]);

## What is Optional Chaining?

Optional chaining (?.) is a JavaScript feature that allows safe access to nested object properties, even if an intermediate property doesn't exist.

const user = {
  address: {
    street: "123 Main St"
  }
};

// Without optional chaining
const zipCode = user && user.address && user.address.zipCode; // undefined

// With optional chaining
const zipCode = user?.address?.zipCode; // undefined

## What is Shimmer UI?

Shimmer UI is a loading state design pattern that shows a skeleton version of your content before the actual data loads. Benefits:

- Improves perceived performance
- Reduces layout shift
- Provides better user experience
- Indicates content is loading
- Maintains visual structure

Example:

## What is the difference between JS expression and JS statement?

JavaScript Expression:

- Produces a value
- Can be used where a value is expected
- Examples:
  - 5 + 5
  - user.name
  - functionCall()
  - true ? 'yes' : 'no'

JavaScript Statement:

- Performs an action
- Controls program flow
- Examples:
  - if...else
  - for loops
  - switch
  - variable declarations

## What is Conditional Rendering?

Conditional rendering is displaying different content based on certain conditions in React.

function Greeting({ isLoggedIn }) {
  // Using if-else
  if (isLoggedIn) {
    return **Welcome back!**;
  } else {
    return **Please sign in.**;
  }
  
  // Using ternary operator
  return isLoggedIn ? `# Welcome back!` : `# Please sign in.`;
  
  // Using logical &&
  return isLoggedIn && `# Welcome back!`;
}

## What is CORS?

Cross-Origin Resource Sharing (CORS) is a security mechanism that:

- Controls how web pages in one domain can request resources from another domain
- Prevents unauthorized cross-origin access
- Uses HTTP headers to define access permissions
- Is implemented by browsers
- Can be configured on server-side

Headers include:

- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers

## What is async and await?

async/await is a JavaScript syntax for handling asynchronous operations:

async:

- Declares an asynchronous function
- Always returns a Promise
- Allows use of await keyword

await:

- Pauses execution until Promise resolves
- Can only be used inside async functions
- Makes asynchronous code look synchronous

async function fetchUser() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

## What is the use of `const json = await data.json();` in getRestaurants()?

This line:

- Converts the Response object from fetch into JSON format
- Returns a Promise that resolves with the parsed JSON data
- Must be awaited as .json() is asynchronous
- Transforms raw response data into usable JavaScript object
- Necessary step to access actual API response data

Example flow:

async function getRestaurants() {
  const response = await fetch('api/restaurants'); // Returns Response object
  const json = await response.json(); // Parses Response to JSON
  setRestaurants(json.data); // Use parsed data
}
