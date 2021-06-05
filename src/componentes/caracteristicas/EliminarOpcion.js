import React, { Component } from 'react'
import { updateCaracteristica } from '../../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
import { FaTrash } from 'react-icons/fa'

class EliminarOpcion extends Component {

   handleEliminar = async (data) => {   
      const { opcion, id } = data

      const opciones = data.opciones.filter(item => item !== opcion )

    var input = {
          id: id,
          opciones: opciones
    }

    await API.graphql(graphqlOperation(updateCaracteristica, { input }))   
    this.props.handleRecargar()
   }

   render(){
      const data = this.props
      return(
         <button className="text-red-500 hover:text-red-600 focus:outline-none mr-1" onClick={ () => this.handleEliminar(data)}>
            <FaTrash />
         </button>
      );
   }
}

export default EliminarOpcion