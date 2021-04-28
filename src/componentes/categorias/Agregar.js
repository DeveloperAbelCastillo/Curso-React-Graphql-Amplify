import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorias } from '../../graphql/queries'
import { createCategoria } from '../../graphql/mutations'
import { FaPlusSquare } from 'react-icons/fa'

class Agregar extends Component {
    state = {
        verModal : false,
        categoria : {
            id : "",
            titulo : "",
            categoriaPadreID : ""
        },
        categorias : []
    }

    componentDidMount = async () => {
        this.getCategorias()
    }

    getCategorias = async () => {
        const result = await API.graphql(graphqlOperation(listCategorias))
        this.setState({ categorias: result.data.listCategorias.items })
    }

    handleTitulo = async event => {
        this.setState({ categoria: {...this.state.categoria, titulo: event.target.value }})
    }

    handleCategoriaPadreID = async event => {
        this.setState({ categoria: {...this.state.categoria, categoriaPadreID: event.target.value }})
    }

    handleModal = async () => {
        this.setState({ verModal: !this.state.verModal })
    }

    handleAgregar = async event =>{
        event.preventDefault()
        var input = {
            titulo: this.state.categoria.titulo
        }

        if( this.state.categoria.categoriaPadreID !== ''){
            input = {
                titulo: this.state.categoria.titulo,
                categoriaPadreID: this.state.categoria.categoriaPadreID
            }
        }

        await API.graphql(graphqlOperation(createCategoria, { input }))
        this.setState({ categoria: {...this.state.categoria, titulo: ''}})
        this.setState({ categoria: {...this.state.categoria, categoriaPadreID: ''}})

        this.props.handleRecargar()
        this.getCategorias()
        this.handleModal()
    }

    render(){
        const { categoria, categorias } = this.state
        return(
            <>
                <div className='flex justify-between'>
                    <div className='self-center'>
                        <button className='text-blue-700 bg-blue-100 rounded-md text-3xl m-2 px-2 hover:bg-blue-200 hover:text-blue-800 focues:bg-blue-600 focus:text-blue-200 focus:outline-none'
                            onClick={this.handleModal}>
                            <div className='flex'>
                                <FaPlusSquare className='self-center' />
                                <div className='p-2'>Agregar Categoría</div>
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
                                    <h3 className="text-3xl font-semibold">Agregar Categoría</h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-blackopacity-5 float-right text-3xl leading-nonefont-semibold outline-none focus:outline-none" 
                                        onClick={this.handleModal}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
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
                                            value={categoria.titulo}
                                            onChange={this.handleTitulo} />
                                        <select className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-1'
                                            value={categoria.categoriaPadreID} 
                                            onChange={this.handleCategoriaPadreID}>
                                            <option value="">--SELECCIONE--</option>
                                            {categorias.map(item =>
                                                <option className='capitalize' key={item.id} value={item.id}>{item.titulo}</option>
                                            )};
                                        </select>
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