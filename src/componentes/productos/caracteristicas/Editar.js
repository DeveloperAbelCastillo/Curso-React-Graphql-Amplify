import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listCaracteristicas, listCaracteristicasProductos } from '../../../graphql/queries'
import { createCaracteristicasProducto } from '../../../graphql/mutations'
import { FaElementor } from 'react-icons/fa'

class Caracteristicas extends Component{

    state = {
        verModal : false,
        producto : {},
        caracteristicasProducto : [],
        caracteristicasDisponibles : [],
        idSeleccionado : ''
    }
    
    getCaracteristicasDisponibles = async () => {        
        const result = await API.graphql(graphqlOperation(listCaracteristicas))
        await this.setState({ caracteristicasDisponibles: result.data.listCaracteristicas.items })
    }    
    
    getCaracteristicasProducto = async () => {
        const filter = { productoID : { eq: this.state.producto.id }}
        const result = await API.graphql(graphqlOperation(listCaracteristicasProductos, { filter } ))
        await this.setState({ caracteristicasProducto : result.data.listCaracteristicasProductos.items })
        await this.state.caracteristicasProducto.forEach( item => {
            this.filtrar(item.caracteristicaID)
        })
    }
    
    handleCargar = async producto => {
        await this.setState({ producto })
        await this.getCaracteristicasDisponibles()
        await this.getCaracteristicasProducto()
        this.handleModal()
    }
    
    filtrar = async id => {
        const caracteristicasDisponibles = this.state.caracteristicasDisponibles.filter(item => item.id !== id)
        await this.setState({ caracteristicasDisponibles })
    }
    
    handleModal = async () => {
        this.setState({ verModal: !this.state.verModal })
    }

    handleCerrar = async () => {
        this.props.handleRecargar()
        this.handleModal()
    }
    
    handleIdSeleccionado = async event => {
        if(event.target.value !== ''){
            this.setState({ idSeleccionado: event.target.value })
        }
    }

    handleAgregar = async event => {
        event.preventDefault()

        var input = {
            caracteristicaID: this.state.idSeleccionado,
            productoID: this.state.producto.id
        }        

        API.graphql(graphqlOperation(createCaracteristicasProducto, { input }))
        await this.filtrar(this.state.idSeleccionado)
    } 

    render(){
        const { caracteristicasDisponibles, idSeleccionado } = this.state
        const data = this.props.producto
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
                                                <select className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                                    value={idSeleccionado} 
                                                    onChange={this.handleIdSeleccionado}>
                                                    <option value="">--SELECCIONE--</option>
                                                    {caracteristicasDisponibles.map(item =>
                                                        <option className='capitalize' key={item.id} value={item.id}>{item.titulo}</option>
                                                    )};
                                                </select>
                                                <button className="bg-lime-200 text-blue-700 active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-lime-400 outline-none focus:outline-none mr-1 mb-1" 
                                                    type="button" 
                                                    style={{ transition: "all .15s ease" }} 
                                                    onClick={this.handleAgregar}>Agregar</button>
                                                {/* {caracteristicasDisponibles.map(item =>
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
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button className="text-red-500 hover:bg-red-400 hover:text-white border border-red-400 rounded bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" 
                                            type="button" 
                                            style={{ transition: "all .15s ease" }} 
                                            onClick={this.handleCerrar}>Cerrar</button>                                        
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