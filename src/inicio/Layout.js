import React, { Component } from 'react'
import Menu from "./menu/Menu"

class Layout extends Component {
    render(){
        return(
            <div className="p-2">
                <Menu />
                { this.props.children }
            </div>
        )
    }
}

export default Layout