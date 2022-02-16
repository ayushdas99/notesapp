import React from "react";

const Header = ({ handleToggleDarkMode}) => {
    return(
        <div className="header">
            <h1>Notes Application</h1>
            <button>Home</button>
            <button>About</button>
            <button onClick={() => handleToggleDarkMode(
                (previousDarkMode => !previousDarkMode))}>
                    Toggle</button>
        </div>
    )
}
export default Header;