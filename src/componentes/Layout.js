import React, { Component } from 'react'
import { Authenticator, Greetings, SignIn, ConfirmSignIn, RequireNewPassword, ConfirmSignUp, VerifyContact, ForgotPassword, TOTPSetup, Loading} from 'aws-amplify-react'
import '@aws-amplify/ui/dist/style.css'
import '../lenguaje'

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
                    <>
                        <div className="">
                            { this.props.children }
                        </div>
                    </>
                )}
            </>
        )
    }
}

export default Layout