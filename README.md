# Namaster React🚀

# Parcel
- Dev Build
- Local Server
- HMR= Hot Module Replacement
- File Watching Algorithm -- written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling -- Supports older browsers
- Diagnostic
- Error Handling
- HTTP's
- Tree Shaking -- Removes unneccesary code
- Different dev and prod bundles

# ReactElement is an object then it gets converted into HTML  that Browser Understands.
# React Components are of 2 types: 
    - 1: Function Based Component (New Way)
    - 2: Class based Component (Old way)
# Component Composition => is when we call one function component into the other.

# JSX code is transpiled before it reaches the JS
    - This is transpiled using parcel and parcel uses babel to do that.

# JSX => React.creatElement => ReactElement-JS Object => HTML Element (render).

# Passing a Prop to the function is same like passing Arguments to the function. 

# Always give key while working with the map.

# React don't recommend using index as a key in map.

# Two types of Export/Import
    - Deafult Import/Export
        -> export default Components;
        -> import Components from "path";

    - Named Import/Export
        -> export const Component;
        -> import {Component} from "path";

# React Hooks
- Normal JS utility functions
- There are 2 very important Hooks:-
    - useState() - Superpowerful state variable in react
        -> We can import this how named import works
    - useEffect() 
        -> Use effect will be called with the 2 arguments which is (callback function) and (Dependency).
        -> It will first render the whole component then it will render itself.

# Fetch() is given by browsers not from javascript.

# Conditional Rendering
- Rendering on the basis of condition (Ex: While the page is loading, display Shimmer)

# Ternary Operator 
- It is a shorthand for the "if-else" statement. Its syntax is:
    - condition ? expressionIfTrue : expressionIfFalse

# For login button, Whole function is getting called again (Ex: Write console.log("Header Render) in header function then in console we can see that how many times we have clicked on the button) 

# When state variable updates, react triggers a reconciliation cycle (re-renders the component).

# Virtual DOM is the object representatin of JSX (Actual DOM).

# React fiber (The New Reconciliation Algorithm) which finds out the difference between 2 virtual DOM and updates only the portion that is required. [That is why REACT is Fast.]
