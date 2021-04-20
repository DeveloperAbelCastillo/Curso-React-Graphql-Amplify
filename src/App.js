import "./tailwind.output.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import "./lenguaje.js";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
  return (
    <div className="bg-red-500 txt-2xl">
      <AmplifySignOut />
      Hola Mundo
    </div>
  );
}

export default withAuthenticator(App);
