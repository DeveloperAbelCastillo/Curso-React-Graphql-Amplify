import React, { Component } from 'react'
import Rama from './Arbol'
import Editar from './Editar'
import Eliminar from './Eliminar'
import Opcion from './Opcion'
import EliminarOpcion from './EliminarOpcion'

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
                        <Editar caracteristica={caracteristica} handleRecargar={this.handleRecargar} />
                        <Eliminar id={caracteristica.id} handleRecargar={this.handleRecargar} />
                        <Opcion caracteristica={caracteristica} handleRecargar={this.handleRecargar} />
                        {caracteristica.titulo}
                        <div className='ml-2 self-center font-light italic text-xs'>
                            ({caracteristica.descripcion})
                        </div>
                    </div>
                    <div>
                        { caracteristica.opciones && (
                            caracteristica.opciones.map(item => (
                                <div className='pl-12'> 
                                    <EliminarOpcion id={caracteristica.id} opciones={caracteristica.opciones} opcion={item} handleRecargar={this.handleRecargar} />
                                    {item} 
                                </div>
                            ))                          
                        )}
                    </div>
                    {/* <Rama opciones={caracteristicas} idActual={caracteristica.id} handleRecargar={this.handleRecargar} /> */}
                </div>
            )
        })
    }
}

export default Arbol