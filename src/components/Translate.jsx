import { Card, CardBody, Textarea, Button, Input } from "@nextui-org/react";
// import { textTranslator } from "../lib/deeplClient";
import { useState } from "react";

const langOptions = [
    {
        code: "BG",
        lang: "Bulgarian",
    },
    {
        code: "CS",
        lang: "Czech",
    },
    {
        code: "DA",
        lang: "Danish",
    },
    {
        code: "DE",
        lang: "German",
    },
    {
        code: "EL",
        lang: "Greek",
    },
    {
        code: "EN",
        lang: "English",
    },
    {
        code: "ES",
        lang: "Spanish",
    },
    {
        code: "ET",
        lang: "Estonian",
    },
    {
        code: "FI",
        lang: "Finnish",
    },
    {
        code: "FR",
        lang: "French",
    },
    {
        code: "HU",
        lang: "Hungarian",
    },
];

export default function Translate() {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [targetLang, setTargetLang] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setOutputValue(inputValue);
        setInputValue("");
        // textTranslator();
        console.log(inputValue);
    };
    return (
        <Card className="flex flex-row justify-center">
            <CardBody className="flex flex-row justify-around w-3/4 lg:max-w-800">
                <form className="w-2/5" onSubmit={handleSubmit}>
                    <Textarea
                        label="Text to translate"
                        labelPlacement="outside"
                        placeholder="Translate me please..."
                        // className="max-w-xs"
                        value={inputValue}
                        onValueChange={setInputValue}
                    />
                    <Button type="submit">Translate</Button>
                </form>
                <form className="w-2/5">
                    <Textarea
                        isReadOnly
                        label="Translated Text"
                        labelPlacement="outside"
                        // placeholder="Enter your description"
                        // className="w-2/5"
                        value={outputValue}
                    />
                    <Input
                        label="Choose language"
                        labelPlacement="outside"
                        // placeholder="Choose language"
                        className="w-1/2 pt-6"
                        list="languages"
                        name="targetLang"
                        value={targetLang}
                        onValueChange={setTargetLang}
                    />
                    <datalist id="languages">
                        {langOptions.map((lang) => (
                            <option key={lang.code} value={lang.lang} />
                        ))}
                    </datalist>
                </form>
            </CardBody>
        </Card>
    );
}
