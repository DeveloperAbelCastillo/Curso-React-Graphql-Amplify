import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { updateCaracteristica } from '../../graphql/mutations'
import { FaElementor } from 'react-icons/fa'

class Opcion extends Component {
    state = {
        verModal : false,
        caracteristica : {},
        opciones : [],
        opcion : ""
    }

    handleOpcion = async event => {
        this.setState({ opcion: event.target.value })
    }

    handleCargar = (caracteristica) => {
        const opciones = caracteristica.opciones
        this.setState({ caracteristica })
        if(opciones !== null)
            this.setState({ opciones })
        this.handleModal()
    }

    handleAgregar = async event =>{
        event.preventDefault()

        const { opciones } = this.state
        
        opciones.push(this.state.opcion)

        var input = {
            id: this.state.caracteristica.id,
            opciones: opciones
        }

        await API.graphql(graphqlOperation(updateCaracteristica, { input }))
        this.setState({ caracteristica: {...this.state.caracteristica, id: ''}})
        this.setState({ opcion: ''})

        this.props.handleRecargar()
        this.handleModal()
    }

    handleModal = async () => {
        this.setState({ verModal: !this.state.verModal})
    }

    render(){
        const { opcion } = this.state
        const data = this.props.caracteristica
        return(
            <>
                <div className='flex justify-center'>
                    <button className="text-blue-700 hover:text-green-500 focus:outline-none mr-1" onClick={() => this.handleCargar(data)}>
                        <FaElementor />
                    </button>
                </div> 

                { this.state.verModal && (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="self-center text-3xl font-semibold">Agregar Opci??n</h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-blackopacity-5 float-right text-3xl leading-nonefont-semibold outline-none focus:outline-none" 
                                        onClick={this.handleModal}>
                                        <span className="bg-transparent text-black opacity-50 text-3xl block outline-none focus:outline-none">??</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="my-4 text-gray-600 text-lg leading-relaxed">
                                        <div className='overflow-auto max-h-70'>
                                            <input className='bg-white focus:outline-none focus:shadow-outlineborder border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                                type="texto" 
                                                placeholder="Opcion" 
                                                name="titulo" 
                                                value={ opcion }
                                                onChange={this.handleOpcion} />
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

export default Opcion