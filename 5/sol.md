
## Is JSX mandatory for React?
No, JSX is not mandatory for React. JSX is a syntax extension that makes writing React components more intuitive, but you can write React applications using plain JavaScript. However, JSX makes the code more readable and writing templates becomes easier.

Example without JSX:

const element = React.createElement('div', null, 'Hello World');


Example with JSX:

const element = <div>Hello World</div>;


## Is ES6 mandatory for React?
No, ES6 (ECMAScript 2015) is not mandatory for React, but it's highly recommended. ES6 introduces several features that make React development more efficient:
- Arrow functions
- Classes
- Template literals
- Destructuring
- Modules
- Let and Const declarations

You can write React with ES5, but the code will be more verbose and less maintainable.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

1. `{TitleComponent}` - This references the component itself, not rendered JSX
2. `{<TitleComponent/>}` - This is used for rendering a component without children
3. `{<TitleComponent></TitleComponent>}` - This is used for rendering a component that can have children

## How can I write comments in JSX?
In JSX, comments must be wrapped in curly braces and written in the JavaScript multi-line comment syntax:


{/* This is a comment in JSX */}

{/* 
  Multi-line
  comment 
*/}


## What is `<React.Fragment></React.Fragment>` and `<></>`?
React Fragment is a feature that allows you to return multiple elements from a component without adding an extra DOM node. 


// Using React.Fragment
<React.Fragment>
  <h1>Title</h1>
  <p>Paragraph</p>
</React.Fragment>

// Using short syntax
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>


## What is Virtual DOM?
Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by:
1. Creating a virtual representation of UI
2. When state changes, React creates a new Virtual DOM tree
3. Compares new Virtual DOM with previous one (diffing)
4. Only updates the real DOM where necessary

## What is Reconciliation in React?
Reconciliation is the process through which React updates the DOM. When a component's state changes, React:
1. Creates a new Virtual DOM tree
2. Compares it with the previous Virtual DOM tree
3. Calculates the minimum number of changes needed
4. Updates only the necessary parts of the actual DOM

## What is React Fiber?
React Fiber is a complete rewrite of React's core algorithm introduced in React 16. It's main features are:
- Ability to split rendering work into chunks
- Ability to pause, abort, or reuse work
- Ability to assign priority to different types of updates
- New concurrency primitives

## Why we need keys in React? When do we need keys in React?
Keys help React identify which items have changed, been added, or been removed in lists. Keys should be used:
- When rendering lists of elements
- When elements in the list can change (add/remove/reorder)
- To give elements a stable identity


const items = list.map(item => 
  <li key={item.id}>{item.name}</li>
);


## Can we use index as keys in React?
While you can use index as keys, it's not recommended because:
- It can cause issues with component state
- It can affect performance
- It can cause bugs with item order/deletion

Use unique and stable identifiers instead:

// Not recommended
items.map((item, index) => <li key={index}>{item}</li>)

// Recommended
items.map(item => <li key={item.id}>{item.name}</li>)


## What is props in React?
Props (properties) are inputs that components can receive. They are:
- Read-only
- Passed from parent to child components
- Used to make components reusable

Ways to handle props:

// Regular props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Destructuring props
function Welcome({name}) {
  return <h1>Hello, {name}</h1>;
}

// Default props
Welcome.defaultProps = {
  name: 'Guest'
};


## What is a Config Driven UI?
Config Driven UI is an approach where the UI is rendered based on a configuration file or data. Benefits include:
- Easier maintenance
- Consistent UI across platforms
- Dynamic UI changes without code changes
- A/B testing capability

Example:

const config = {
  header: {
    logo: "logo.png",
    navigation: ["Home", "About", "Contact"]
  },
  footer: {
    links: ["Privacy", "Terms"]
  }
};

function App({config}) {
  return (
    <div>
      <Header {...config.header} />
      <Footer {...config.footer} />
    </div>
  );
}


## Coding Assignment: Build a Food Ordering App

Key components needed:
1. Header Component
   - Logo
   - Nav items
   - Cart

2. Body Component
   - Search
   - Restaurant List
   - Restaurant Card
     - Image
     - Name, Rating, Cuisine, Delivery Time

3. Footer Component
   - Copyright
   - Links
   - Address
   - Contact

Example structure:

// App.js
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// Restaurant Card Component
const RestaurantCard = ({name, cuisine, rating, deliveryTime, imageUrl}) => {
  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p>{rating} stars</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

// Restaurant List Component
const RestaurantList = ({restaurants}) => {
  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
};

