import { Card, CardBody, Textarea, Button } from "@nextui-org/react";
// import { textTranslator } from "../lib/deeplClient";
import { useState } from "react";

export default function Translate() {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setOutputValue(inputValue);
        setInputValue("");
        // textTranslator();
        console.log(inputValue);
    };
    return (
        <Card>
            <CardBody className="flex flex-row justify-center w-full">
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <Textarea
                        label="Text to translate"
                        labelPlacement="outside"
                        placeholder="Enter your translation..."
                        className="max-w-xs"
                        value={inputValue}
                        onValueChange={setInputValue}
                    />
                    <Button type="submit">Translate</Button>
                </form>
                <Textarea
                    isReadOnly
                    label="Translated Text"
                    labelPlacement="outside"
                    // placeholder="Enter your description"
                    className="max-w-xs"
                    value={outputValue}
                />
            </CardBody>
        </Card>
    );
}
