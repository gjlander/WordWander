import { Card, CardBody, Textarea } from "@nextui-org/react";

export default function Translate() {
    return (
        <Card>
            <CardBody className="flex flex-row justify-around w-full">
                <Textarea
                    label="Text to translate"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs"
                />
                <Textarea
                    label="Translated Text"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs"
                />
            </CardBody>
        </Card>
    );
}
