"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
var Counter_1 = require("./features/counter/Counter");
require("./App.scss");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement(Counter_1.Counter, null),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            react_1["default"].createElement("span", null,
                react_1["default"].createElement("span", null, "Learn "),
                react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org/", target: "_blank", rel: "noopener noreferrer" }, "React"),
                react_1["default"].createElement("span", null, ", "),
                react_1["default"].createElement("a", { className: "App-link", href: "https://redux.js.org/", target: "_blank", rel: "noopener noreferrer" }, "Redux"),
                react_1["default"].createElement("span", null, ", "),
                react_1["default"].createElement("a", { className: "App-link", href: "https://redux-toolkit.js.org/", target: "_blank", rel: "noopener noreferrer" }, "Redux Toolkit"),
                ",",
                react_1["default"].createElement("span", null, " and "),
                react_1["default"].createElement("a", { className: "App-link", href: "https://react-redux.js.org/", target: "_blank", rel: "noopener noreferrer" }, "React Redux")))));
}
exports["default"] = App;
