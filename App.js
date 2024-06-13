// ReactElement(object) => HTML (Browser Understands)

const heading = React.createElement("div",
    {id:"heading"},
    React.createElement("div",{id:"parent"},
    React.createElement("div", {id:"child"}, 
    [React.createElement("h1",{},"I'm an H1 tag"), React.createElement("h2",{},"I'm an H2 tag")]
    ),
)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);