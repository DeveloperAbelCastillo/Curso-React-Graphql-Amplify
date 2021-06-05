import React, { Component } from 'react'
import { deleteCaracteristicasProducto } from '../../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { FaTrash } from 'react-icons/fa'

class EliminarCaracteristica extends Component {

    handleEliminarCaracteristica = async (id) => {
        const input = {
            id: id
        }
        await API.graphql(graphqlOperation(deleteCaracteristicasProducto, { input }))
        this.props.handleRecargar()
    }

   render(){
      const id = this.props.id
      return(
         <button className="text-red-500 hover:text-red-600 focus:outline-none mr-1" onClick={ () => this.handleEliminarCaracteristica(id)}>
            <FaTrash />
         </button>
      );
   }
}

export default EliminarCaracteristica