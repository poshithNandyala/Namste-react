const root=ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", {
    style: { color: "pink" }
}, "Hello World");
const heading2 = React.createElement("h2", null, "Hello World");
const heading3 = React.createElement("div", null, [heading1, heading2]);

root.render(heading3);



