import "./tailwind.output.css";
import Principal from "./componentes/Principal"
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
  return (
    <div className="">
      <Principal />
    </div>
  );
}

export default App;
