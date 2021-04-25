import React, { Component } from 'react'
import { Authenticator, Greetings, SignIn, ConfirmSignIn, RequireNewPassword, ConfirmSignUp, VerifyContact, ForgotPassword, TOTPSetup, Loading} from 'aws-amplify-react'
import '@aws-amplify/ui/dist/style.css'
import '../lenguaje'
import Menu from './menu/Menu'

class Layout extends Component {
    state = {
        sesionIniciada : ""
    }

    estatusSesion = async (authState) => {
        this.setState({sesionIniciada: authState })
    }

    render(){
        return(
            <>
                <Authenticator
                    authState="signIn"
                    onStateChange={(authState) => this.estatusSesion(authState)}
                    hide={[
                        Greetings,
                        SignIn,
                        ConfirmSignIn,
                        RequireNewPassword,
                        ConfirmSignUp,
                        VerifyContact,
                        ForgotPassword,
                        TOTPSetup,
                        Loading
                        ]}
                    hideDefault={true}
                >
                    <SignIn />
                    <ConfirmSignIn />
                    <RequireNewPassword />
                    <ConfirmSignUp />
                    <VerifyContact />
                    <ForgotPassword />
                    <TOTPSetup />
                    <Loading />
                </Authenticator>
                { this.state.sesionIniciada === "signedIn" && (
                    <div className='sm:flex sm:min-h-screen'>
                        <div className='sm:w-1/3 lg:w-1/4 p-2 bg-gray-200 text-blue-800 font-bold'>
                            <Menu />
                        </div>
                        <div className='sm:w-2/3 lg:w-3/4 p-2'>
                            { this.props.children }
                        </div>
                    </div>
                )}
            </>
        )
    }
}

export default Layout