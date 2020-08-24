import React from 'react';
var Button = function (props) {
    return (React.createElement("button", null, "111"));
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};
export default Button;
