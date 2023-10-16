import * as deepl from "deepl-node";

const accessKey = import.meta.env.VITE_ACCESS_KEY;
const translator = new deepl.Translator(accessKey);

const textTranslator = async () => {
    try {
        // Translate text into a target language, in this case, French:
        const translationResult = await translator.translateText(
            "Hello, world!",
            null,
            "fr"
        );
        console.log(translationResult.text); // 'Bonjour, le monde !'
    } catch (error) {
        console.error(error.message);
    }
};

export { textTranslator };
