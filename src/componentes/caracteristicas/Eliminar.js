import React, { Component } from 'react'
import { deleteCaracteristica } from '../../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { FaTrash } from 'react-icons/fa'

class Eliminar extends Component {

    handleEliminar = async (id) => {
        const input = {
            id: id
        }
        await API.graphql(graphqlOperation(deleteCaracteristica, { input }))
        this.props.handleRecargar()
    }

   render(){
      const id = this.props.id
      return(
         <button className="text-red-500 hover:text-red-600 focus:outline-none mr-1" onClick={ () => this.handleEliminar(id)}>
            <FaTrash />
         </button>
      );
   }
}

export default Eliminar