import React, { Component } from 'react'
import Rama from './Arbol'

class Arbol extends Component{
    render(){
        const categorias = this.props.categorias
        const idActual = this.props.idActual
        const filtrados = categorias.filter(categoria => categoria.categoriaPadreID === idActual)

        return filtrados.map((categoria) => {
            return(
                <div key={categoria.id} className='pl-4'>
                    {categoria.titulo}
                    <Rama categorias={categorias} idActual={categoria.id} />
                </div>
            )
        })
    }
}

export default Arbol