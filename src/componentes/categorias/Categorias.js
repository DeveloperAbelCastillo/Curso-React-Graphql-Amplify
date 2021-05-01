import React, { Component } from 'react'
import Layout from '../Layout'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorias } from '../../graphql/queries_'
import Agregar from './Agregar'
import Arbol from './Arbol'

class Categorias extends Component{

    state = {
        categorias: [],
        nextToken:'',
        next: false
    }

    componentDidMount = async () => {
        this.getCategorias()
    }

    getCategorias = async () => {
        const result = await API.graphql(graphqlOperation(listCategorias))
        this.setState({ categorias: result.data.listCategorias.items })
        this.setState({ netToken: result.data.listCategorias.netToken })
        if(this.state.nextToken === null){
            this.setState({ next: false })
        } else {
            this.setState({ next: true })
        }
    }

    handleRecargar = async () => {
        this.getCategorias()
    }

    render(){
        const { categorias } = this.state
        return(
            <Layout>
                <div className='justify-center text-xl'>
                    <div className='flex justify-end'>
                        <Agregar handleRecargar={this.handleRecargar} />
                    </div>
                </div>
                <div className='inline-block rounded-lg border shadow-2xl bg-gray-100'>
                    <Arbol categorias={categorias} idActual={null} handleRecargar={this.handleRecargar} />
                </div>
            </Layout>
        )
    }
}

export default Categorias