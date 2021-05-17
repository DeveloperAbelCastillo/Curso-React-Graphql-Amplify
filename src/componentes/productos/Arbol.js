import React, { Component } from 'react'
import Rama from './Arbol'
import Editar from './Editar'
import Eliminar from './Eliminar'
import Caracteristicas from './Caracteristicas'

class Arbol extends Component{

    handleRecargar = async () => {
        this.props.handleRecargar()
    }

    render(){
        const productos = this.props.productos
        const categorias = this.props.categorias
        const idActual = this.props.idActual
        const categoriasfiltradas = categorias.filter(categoria => categoria.categoriaPadreID === idActual)

        return categoriasfiltradas.map((categoria) => {
            return(
                <div key={categoria.id} className='pl-4'>
                    <div className='flex'>
                        {categoria.titulo}
                    </div>
                    { productos.filter(producto => producto.categoriaID === categoria.id).map((producto) => {
                        console.log(producto.caracteristicas.items)
                        return(
                            <div key={producto.id}>
                                <div className='flex pl-4'>
                                    <Editar producto={producto} categorias={categorias} handleRecargar={this.handleRecargar}/>
                                    <Eliminar id={producto.id} handleRecargar={this.handleRecargar} />
                                    <Caracteristicas producto={producto} handleRecargar={this.handleRecargar} />
                                    {producto.titulo}
                                </div>
                                <div className='pl-8'>
                                    { producto.caracteristicas.items.map(item => (
                                        <div className='px-6'>{item.caracteristica.titulo}</div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                    <Rama productos={productos} categorias={categorias} idActual={categoria.id} handleRecargar={this.handleRecargar} />
                </div>
            )
        })
    }
}

export default Arbol