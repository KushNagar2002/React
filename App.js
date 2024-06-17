import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// ReactElement(object) => HTML (Browser Understands)

// const heading = React.createElement("h1", {id:"heading"}, "Namste React🚀");


// JSX code is transpiled before it reaches the JS
//  - This is transpiled using parcel and parcel uses babel to do that.
// JSX => React.creatElement => ReactElement-JS Object => HTML Element (render).

// const jsxheading = (<h1 className="head">Namaste React using JSX🚀</h1>)

// React Component 
//     - Class Based Components
//     - Function Based Components

// Functional Component
// const Title = () => (
//     <h1 className="head">
//         Namaste React using JSX🚀 
//     </h1>
// );

// const HeadingComponent = () => (
//     <div id="container">
//         <Title/>
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);