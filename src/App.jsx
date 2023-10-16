import { Card, CardBody } from "@nextui-org/react";
import Translate from "./components/Translate";

function App() {
    return (
        <>
            <Card>
                <CardBody className="text-center">
                    <h1 className="text-4xl">WordWander</h1>
                </CardBody>
            </Card>
            <Translate />
        </>
    );
}

export default App;
