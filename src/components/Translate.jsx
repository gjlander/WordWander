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
    {
        code: "ID",
        lang: "Indonesian",
    },
    {
        code: "IT",
        lang: "Italian",
    },
    {
        code: "JA",
        lang: "Japanese",
    },
    {
        code: "KO",
        lang: "Korean",
    },
    {
        code: "LT",
        lang: "Lithuanian",
    },
    {
        code: "LV",
        lang: "Latvian",
    },
    {
        code: "NB",
        lang: "Norwegian",
    },
    {
        code: "NL",
        lang: "Dutch",
    },
    {
        code: "PL",
        lang: "Polish",
    },
    {
        code: "PT",
        lang: "Portuguese",
    },
    {
        code: "RO",
        lang: "Romanian",
    },
    {
        code: "RU",
        lang: "Russian",
    },
    {
        code: "SK",
        lang: "Slovak",
    },
    {
        code: "SL",
        lang: "Slovenian",
    },
    {
        code: "SV",
        lang: "Swedish",
    },
    {
        code: "TR",
        lang: "Turkish",
    },
    {
        code: "UK",
        lang: "Ukrainian",
    },
    {
        code: "ZH",
        lang: "Chinese (simplified)",
    },
];

export default function Translate() {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    // const [targetLang, setTargetLang] = useState("");
    // const [langForm, setLangForm] = useState({
    //     text: "",
    //     targetLang: "",
    // });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setLangForm((prev) => ({ ...prev, [name]: value }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOutputValue(inputValue);
        setInputValue("");
        // textTranslator();
        // console.log(langForm);
    };
    return (
        <Card className="flex flex-row justify-center">
            <CardBody className="flex flex-row justify-around w-3/4 lg:max-w-800">
                <form id="langForm" className="w-2/5" onSubmit={handleSubmit}>
                    <Textarea
                        label="Text to translate"
                        labelPlacement="outside"
                        placeholder="Translate me please..."
                        // className="max-w-xs"
                        value={inputValue}
                        name="text"
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
                        onValueChange={setOutputValue}
                    />
                    {/* <label htmlFor="languages">Choose language: </label> */}
                    <Input
                        list="languages"
                        label="Choose language"
                        labelPlacement="outside"
                        className="mt-6"
                    />
                    <datalist
                        type="select"
                        name="targetLang"
                        id="languages"
                        form="langForm"
                    >
                        {langOptions.map((lang) => (
                            <option
                                key={lang.code}
                                label={lang.lang}
                                value={lang.code}
                                // selected={lang.code === "DE" ? true : false}
                            />
                        ))}
                    </datalist>
                </form>
            </CardBody>
        </Card>
    );
}
