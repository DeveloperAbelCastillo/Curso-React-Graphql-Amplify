import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listCaracteristicas, listCaracteristicasProductos } from '../../graphql/queries_'
import { createCaracteristicasProducto, updateCaracteristicasProducto } from '../../graphql/mutations'
import { FaElementor } from 'react-icons/fa'

class Caracteristicas extends Component{

    state = {
        verModal : false,
        producto : {},
        caracteristicas : [],
        caracteristicasDisponibles : [],
        caracteristicasProductos : [],
        nextToken : '',
        next : false
    }

    getCaracteristicas = async () => {
        const filter = { caracteristicaPadreID : { notContains: '' } }
        const result = await API.graphql(graphqlOperation(listCaracteristicas, { filter } ))
        this.setState({ caracteristicasDisponibles: result.data.listCaracteristicas.items })
        this.setState({ nextToken: result.data.listCaracteristicas.nextToken })
        if(this.state.nextToken === null){
            this.setState({ next: false })
        } else {
            this.setState({ next: true})
        }
        const result2 = await API.graphql(graphqlOperation(listCaracteristicasProductos))
        this.setState({ caracteristicasProductos: result2.data.listCaracteristicasProductos.items })
    }

    handleCargar = async data => {
        const producto = this.props.producto
        const caracteristicas = this.props.producto.caracteristicas.items
        this.setState({ producto })
        this.setState({ caracteristicas })
        await this.getCaracteristicas()
        //this.asignarCaracteristicas(caracteristicas)
        this.handleModal()
    }

    handleModal = async () => {
        this.setState({ verModal: !this.state.verModal })
    }

    // asignarCaracteristicas = async caracteristicas => {
    //     caracteristicas.forEach(item => {
    //         console.log(item)
    //     })
    //     // caracteristicas.items.forEach()
    // }

    handleCaracteristica = async event => {
        const existe = this.state.caracteristicas.find(item => item.id === event.target.value)
        if(existe === undefined){
            const caracteristicaDisponible = this.state.caracteristicasDisponibles.find(item => item.id === event.target.value)
            const caracteristica = {
                caracteristicaID : caracteristicaDisponible.id,
                productoID : this.state.producto.id
            }
            await this.setState({ caracteristicas: [...this.state.caracteristicas, caracteristica ] })
        } else {
            const caracteristicas = this.state.caracteristicas.filter(item => item.id !== event.target.value)            
            await this.setState({ caracteristicas: caracteristicas })
        }
    }

    handleGuardar = async event => {
        event.preventDefault()
        console.log(this.state.caracteristicas)
        console.log(this.state.caracteristicasProductos)
        this.state.caracteristicas.forEach(caracteristica => {
            var input = {}
            const actual = this.state.caracteristicasProductos.find(item => item.caracteristicaID === caracteristica.caracteristicaID)
            
            if(actual === undefined){
                input = {
                    caracteristicaID: caracteristica.caracteristicaID,
                    productoID: caracteristica.productoID
                }
                console.log('Create:',input)
                //API.graphql(graphqlOperation(createCaracteristicasProducto, { input }))
            } else {
                input = {
                    id : actual.id,
                    caracteristicaID: caracteristica.id,
                    productoID: this.state.producto.id
                }
                console.log('Update:',input)
                //API.graphql(graphqlOperation(updateCaracteristicasProducto, { input }))
            }

        })

        this.props.handleRecargar()
        this.handleModal()
    }

    render(){
        const { caracteristicasDisponibles } = this.state
        const data = this.props
        return(
            <>
                <div className='flex justify-center'>
                    <button className='text-green-700 hover:text-green-500 focus:outline-none mr-1' onClick={() => this.handleCargar(data)}>
                        <div className='flex'>
                            <FaElementor className='self-center' />
                        </div>
                    </button>
                </div>

                { this.state.verModal && (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="self-center text-3xl font-semibold">Seleccionar Características</h3>
                                        <button className="p-1 ml-auto bg-transparent border-0 text-blackopacity-5 float-right text-3xl leading-nonefont-semibold outline-none focus:outline-none" 
                                            onClick={this.handleModal}>
                                            <span className="bg-transparent text-black opacity-50 text-3xl block outline-none focus:outline-none">×</span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="my-4 text-gray-600 text-lg leading-relaxed">
                                            <div className='block'>
                                                {caracteristicasDisponibles.map(item =>
                                                        <div className='flex' key={item.id}>
                                                            <input className='m-2 h-5 w-5 text-gray-600'
                                                                type="checkbox" 
                                                                defaultChecked={this.state.caracteristicas.id !== undefined ? true : false}
                                                                name={item.titulo}
                                                                value={item.id}
                                                                onChange={this.handleCaracteristica} /> 
                                                            <div className='self-center'>
                                                                {item.titulo}
                                                            </div>
                                                        </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button className="text-red-500 hover:bg-red-400 hover:text-white border border-red-400 rounded bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" 
                                            type="button" 
                                            style={{ transition: "all .15s ease" }} 
                                            onClick={this.handleModal}>Cancelar</button>
                                        <button className="bg-lime-200 text-blue-700 active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-lime-400 outline-none focus:outline-none mr-1 mb-1" 
                                            type="button" 
                                            style={{ transition: "all .15s ease" }} 
                                            onClick={this.handleGuardar}>Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                )}
            </>
        )
    }
}

export default Caracteristicas