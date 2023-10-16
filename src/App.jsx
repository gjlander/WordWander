import { Card, CardBody } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Hist from "./Hist";

function App() {
    return (<>   
            {/* <Card>
                <CardBody className="text-center">
                    <h1 className="text-4xl">WordWander</h1>
                </CardBody>
            </Card> */}
        <Routes>
            <Route path="/dashboard" element= {<Dashboard/>}>
                <Route path="translate" element = {<Dashboard/>}/>
                <Route path="history" element= {<Hist/>}/>
            </Route>
        </Routes>
     </>
    );
}

export default App;
