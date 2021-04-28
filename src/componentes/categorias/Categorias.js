import React, { Component } from 'react'
import Layout from '../Layout'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorias } from '../../graphql/queries'
import Agregar from './Agregar'

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
        console.log(this.state.categorias)
    }

    handleRecargar = async () => {
        this.getCategorias()
    }

    render(){
        return(
            <Layout>
                <div className='justify-center text-xl'>
                    <div className='flex justify-end'>
                        <Agregar handleRecargar={this.handleRecargar} />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Categorias