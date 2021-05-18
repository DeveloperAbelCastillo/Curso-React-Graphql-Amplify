import React, { Component } from 'react'
import Editar from './Editar'
import Eliminar from './Eliminar'
import Agregar from './opciones/Agregar'

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
                        <Agregar caracteristica={caracteristica} handleRecargar={this.handleRecargar} />
                        {/* { caracteristica.subCaracteristicas.items.length === 0 && (
                        )} */}
                        {caracteristica.titulo}
                        {caracteristica.dscripcion}
                        <div className='pl-8'>
                            {/* { caracteristica.opciones.items.map(item => (
                                <div key={item.id} className='flex px-6'>
                                    <EliminarCaracteristica id={item.id} handleRecargar={this.handleRecargar} />
                                    <div className='text-blue-700'>{item.caracteristica.titulo}</div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                    {/* <Rama opciones={caracteristicas} idActual={caracteristica.id} handleRecargar={this.handleRecargar} /> */}
                </div>
            )
        })
    }
}

export default Arbol