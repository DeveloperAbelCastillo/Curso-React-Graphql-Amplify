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
        const idActual = this.props.idActual
        const filtrados = caracteristicas.filter(caracteristica => caracteristica.caracteristicaPadreID === idActual)

        return filtrados.map((caracteristica) => {
            return(
                <div key={caracteristica.id} className='pl-4'>
                    <div className='flex'>
                        <Editar caracteristica={caracteristica} caracteristicas={caracteristicas} handleRecargar={this.handleRecargar}/>
                        { caracteristica.subCaracteristicas.items.length === 0 && (
                            <Eliminar id={caracteristica.id} handleRecargar={this.handleRecargar} />
                        )}
                        {caracteristica.titulo}
                    </div>
                    <Rama caracteristicas={caracteristicas} idActual={caracteristica.id} handleRecargar={this.handleRecargar} />
                </div>
            )
        })
    }
}

export default Arbol