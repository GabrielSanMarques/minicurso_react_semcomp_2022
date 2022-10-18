import React from "react";
import { ReactDOM } from "react";

function HelloWorld(){
    return(
        <div>
            <h1>Hello World</h1>
        </div>

    );
};

ReactDOM.render(
    <HelloWorld />,
    document.getElementById(root)
);