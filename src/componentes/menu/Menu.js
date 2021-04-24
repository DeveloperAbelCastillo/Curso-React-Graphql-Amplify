import React, { Component } from 'react'
import { Auth } from 'aws-amplify'

class Menu extends Component {
    state = {
        username: ""
    }

    componentDidMount = async () => {
        this.obterUsuario();
    }

    obterUsuario = async () => {
        const user = await Auth.currentUserInfo()
        this.setState({ username: user.username})
    }

    signOut = async () => {
        try{
            await Auth.signOut({ global: true })
        } catch (error) {
            console.log('Error al cerrar la sesion: ', error)
        }
    }

    render(){
        const { username } = this.state
        return(
            <div className='flex flex-wrap justify-center m-2'>
                <img className="w-14 h-14 rounded-full border border-2 border-gray-400" src="https://i.pravatar.cc/300" alt="" />
                <div className="inline-block self-center text-center sm:text-sm lg:text-base">
                    <div className="m-1 uppercase">{username}</div>
                    <button className="m-1 px-1 border border-gray-400 bg-gray-200 rounded focus:outline-none" onClick={ () => this.signOut() }>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        )
    }
}

export default Menu