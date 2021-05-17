import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createCaracteristica } from '../../graphql/mutations'
import { FaPlusSquare, FaPlus } from 'react-icons/fa'

class Agregar extends Component {
    state = {
        verModal : false,
        caracteristica : {
            id : "",
            titulo : "",
            descripcion : ""
        }
    }

    handleTitulo = async event => {
        this.setState({ caracteristica: {...this.state.caracteristica, titulo: event.target.value }})
    }

    handleDescripcion = async event => {
        this.setState({ caracteristica: {...this.state.caracteristica, descripcion: event.target.value }})
    }
    
    handleModal = async () => {
        this.setState({ verModal: !this.state.verModal })
    }

    handleAgregar = async event =>{
        event.preventDefault()        
        const input = {
            titulo: this.state.caracteristica.titulo,
            descripcion: this.state.caracteristica.descripcion,
        }

        await API.graphql(graphqlOperation(createCaracteristica, { input }))
        this.setState({ caracteristica: {...this.state.caracteristica, titulo: ''}})
        this.setState({ caracteristica: {...this.state.caracteristica, descripcion: ''}})
        
        this.props.handleRecargar()
        this.handleModal()
    }

    render(){
        const { caracteristica } = this.state
        return(
            <>
                <div className='flex justify-between'>
                    <div className='self-center'>
                        <button className='text-blue-700 bg-blue-100 rounded-md text-3xl m-2 px-2 hover:bg-blue-200 hover:text-blue-800 focues:bg-blue-600 focus:text-blue-200 focus:outline-none'
                            onClick={() => this.handleModal()}>
                            <div className='flex'>
                                <FaPlusSquare className='self-center' />
                                <div className='p-2'>Agregar Característica</div>
                            </div>
                        </button>
                    </div>
                </div>

                { this.state.verModal && (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
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
                                        <div className='overflow-auto max-h-70'>
                                            <input className='bg-white focus:outline-none focus:shadow-outlineborder border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                                type="texto" 
                                                placeholder="Título" 
                                                name="titulo" 
                                                value={caracteristica.titulo}
                                                onChange={this.handleTitulo} />
                                            <input className='bg-white focus:outline-none focus:shadow-outlineborder border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                                type="texto" 
                                                placeholder="Descripción" 
                                                name="descripcion" 
                                                value={caracteristica.descripcion}
                                                onChange={this.handleDescripcion} />
                                            {/* <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                <input className='bg-white focus:outline-none focus:shadow-outlineborder border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                                    type="texto" 
                                                    placeholder="Opcion" 
                                                    name="descripcion" 
                                                    value={caracteristica.descripcion} />
                                                <button className="p-1 ml-auto bg-transparent border-0 text-blackopacity-5 float-right text-3xl leading-nonefont-semibold outline-none focus:outline-none" >
                                                    <FaPlus className='self-center' />
                                                </button>
                                            </div>
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                <h3 className="self-center text-lg">Seleccionar Características</h3>
                                                <button className="p-1 ml-auto bg-transparent border-0 text-blackopacity-5 float-right text-3xl leading-nonefont-semibold outline-none focus:outline-none" 
                                                    onClick={this.handleEliminar}>
                                                    <span className="bg-transparent text-black opacity-50 text-3xl block outline-none focus:outline-none">×</span>
                                                </button>
                                            </div> */}
                                        {/* <select className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                            value={caracteristica.caracteristicaPadreID} 
                                            onChange={this.handleCaracteristicaPadreID}>
                                            <option value="">--SELECCIONE--</option>
                                            {caracteristicas.map(item =>
                                                <option className='capitalize' key={item.id} value={item.id}>{item.titulo}</option>
                                            )};
                                        </select> */}
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
                                        onClick={this.handleAgregar}>Guardar</button>
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

export default Agregar