import React, { Component } from 'react'
import Layout from '../Layout'
import { API, graphqlOperation } from 'aws-amplify'
import { listCaracteristicas } from '../../graphql/queries'
import Agregar from './Agregar'
import Arbol from './Arbol'

class Caracteristicas extends Component{

    state = {
        caracteristicas: [],
        nextToken:'',
        next: false
    }

    componentDidMount = async () => {
        this.getCaracteristicas()
    }

    getCaracteristicas = async () => {
        const result = await API.graphql(graphqlOperation(listCaracteristicas))
        this.setState({ caracteristicas: result.data.listCaracteristicas.items })
        this.setState({ nextToken: result.data.listCaracteristicas.nextToken })
        if(this.state.nextToken === null){
            this.setState({ next: false })
        } else {
            this.setState({ next: true })
        }
    }

    handleRecargar = async () => {
        this.getCaracteristicas()
    }

    render(){
        const { caracteristicas } = this.state
        return(
            <Layout>
                <div className='justify-center text-xl'>
                    <div className='flex justify-end'>
                        <Agregar handleRecargar={this.handleRecargar} />
                    </div>
                </div>
                <div className='py-4 pr-4 inline-block rounded-lg border shadow-2xl bg-gray-100'>
                    <Arbol caracteristicas={caracteristicas} handleRecargar={this.handleRecargar} />
                </div>
            </Layout>
        )
    }
}

export default Caracteristicas