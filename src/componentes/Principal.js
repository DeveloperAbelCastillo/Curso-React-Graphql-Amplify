import React, { Component } from 'react'
import Layout from './Layout'
import Menu from './menu/Menu'

class Principal extends Component {
    render(){
        return(
            <Layout>
                <div className='sm:flex min-h-screen'>
                    <div className='sm:w-1/3 lg:w-1/4 p-2 bg-gray-200 text-blue-800 font-bold'>
                        <Menu />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Principal