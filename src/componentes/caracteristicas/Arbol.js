import React, { Component } from 'react'
import Rama from './Arbol'
import Editar from './Editar'
import Eliminar from './Eliminar'

class Arbol extends Component{

    handleRecargar = async () => {
        this.props.handleRecargar()
    }

    render(){
        const caracteristicas = this.props.caracteristicas
        return caracteristicas.map((caracteristica) => {
            return(
                <div key={caracteristica.id} className='pl-4'>
                    <div className='flex'>
                        <Editar caracteristica={caracteristica} handleRecargar={this.handleRecargar}/>
                        <Eliminar id={caracteristica.id} handleRecargar={this.handleRecargar} />
                        {/* { caracteristica.subCaracteristicas.items.length === 0 && (
                        )} */}
                        {caracteristica.titulo}
                        {caracteristica.dscripcion}
                    </div>
                    {/* <Rama opciones={caracteristicas} idActual={caracteristica.id} handleRecargar={this.handleRecargar} /> */}
                </div>
            )
        })
    }
}

export default Arbol