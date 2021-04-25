import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render(){
        return(
            <div className='p-2'>
                <div className="m-4 text-center text-3xl font-bold text-yellow-900">
                    Bienvenido a la cafetería
                </div>
                <div className="p-4">
                    <NavLink className="mx-2 px-2 py-1 rounded-md text-yellow-700" to='/'>
                        Productos
                    </NavLink>
                    <NavLink className="mx-2 px-2 py-1 rounded-md text-yellow-700" to='/promociones'>
                        Promociones
                    </NavLink>
                    <NavLink className="mx-2 px-2 py-1 rounded-md text-yellow-700" to='/principal'>
                        Mi Cuenta
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Menu