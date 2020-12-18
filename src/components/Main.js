import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"

const Main = ({children}) => {
    return (
        <div className="main">
            <div className="main-top">
                <MenuIcon/>
            </div>
            <div className="main-body">
 {children}
            </div>
        </div>
    )
}

export default Main
