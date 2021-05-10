import React, { Component } from 'react'
import Layout from '../Layout'
import { API, graphqlOperation } from 'aws-amplify'
import { listProductos, listCategorias } from '../../graphql/queries'
import Agregar from './Agregar'
import Arbol from './Arbol'

class Productos extends Component{

    state = {
        productos : [],
        categorias : [],
        nextToken : '',
        next : false
    }

    componentDidMount = async () => {
        this.getProdcutos()
        this.getCategorias()
    }
    
    getProdcutos = async () => {
        const result = await API.graphql(graphqlOperation(listProductos))
        this.setState({ productos: result.data.listProductos.items })
        this.setState({ nextToken: result.data.listProductos.nextToken })
        if(this.state.nextToken === null){
            this.setState({ next: false })
        } else {
            this.setState({ next: true})
        }
    }

    getCategorias = async () => {
        const result = await API.graphql(graphqlOperation(listCategorias))
        this.setState({ categorias: result.data.listCategorias.items })
    }

    handleRecargar = async () => {
        this.getProdcutos()
    }

    render(){
        const { productos, categorias } = this.state
        return(
            <Layout>
                <div className='justify-center text-xl'>
                    <div className='flex justify-end'>
                        <Agregar productos={productos} categorias={categorias} handleRecargar={this.handleRecargar} />
                    </div>
                </div>
                <div className='py-4 pr-4 inline-block rounded border shadow-2xl bg-gray-100'>
                    <Arbol productos={productos} categorias={categorias} idActual={null} handleRecargar={this.handleRecargar} />
                </div>
            </Layout>
        )
    }
}

export default Productos