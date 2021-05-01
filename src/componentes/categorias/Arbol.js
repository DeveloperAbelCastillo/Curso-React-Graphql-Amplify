import React, { Component } from 'react'
import Rama from './Arbol'
import Editar from './Editar'
import Eliminar from './Eliminar'

class Arbol extends Component{

    handleRecargar = async () => {
        this.props.handleRecargar()
    }

    render(){
        const categorias = this.props.categorias
        const idActual = this.props.idActual
        const filtrados = categorias.filter(categoria => categoria.categoriaPadreID === idActual)

        return filtrados.map((categoria) => {
            return(
                <div key={categoria.id} className='pl-4'>
                    <div className='flex'>
                        <Editar categoria={categoria} categorias={categorias} handleRecargar={this.handleRecargar}/>
                        { categoria.subCategorias.items.length === 0 && (
                            <Eliminar id={categoria.id} handleRecargar={this.handleRecargar} />
                        )}
                        {categoria.titulo}
                    </div>
                    <Rama categorias={categorias} idActual={categoria.id} handleRecargar={this.handleRecargar} />
                </div>
            )
        })
    }
}

export default Arbol