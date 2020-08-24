import React from 'react';
import Button from './components/Button/button';
function App() {
    return (React.createElement("div", { className: 'App' },
        React.createElement("header", { className: 'App-header' },
            React.createElement(Button, null, "Hello"),
            React.createElement(Button, { disabled: true }, "Disabled Button"),
            React.createElement(Button, { btnType: 'primary', btnSize: 'lg' }, "Large Primary"),
            React.createElement(Button, { btnType: 'danger', btnSize: 'sm' }, "Small Danger"),
            React.createElement(Button, { btnType: 'link', href: 'http://www.baidu.com' }, "Baidu Link"),
            React.createElement(Button, { btnType: 'link', href: 'http://www.baidu.com', disabled: true }, "Disabled Link"),
            React.createElement("h1", null, "hello world"),
            React.createElement("h2", null, "hello world"),
            React.createElement("h3", null, "hello world"),
            React.createElement("hr", null),
            React.createElement("code", null, "const a = 1"),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' }, "Learn React"))));
}
export default App;
