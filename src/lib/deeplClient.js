import axios from "axios";

const textTranslator = async (textInput) => {
    try {
        const { data } = await axios.post(
            "https://api-free.deepl.com/v2/translate",
            {
                text: [textInput],
                target_lang: "DE",
            },
            {
                headers: {
                    Authorization: import.meta.env.VITE_ACCESS_KEY,
                },
            }
        );
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

export { textTranslator };

// import * as deepl from "deepl";

// const accessKey = import.meta.env.VITE_ACCESS_KEY;
// const translator = new deepl.Translator(accessKey);

// const textTranslator = async () => {
//     try {
//         // Translate text into a target language, in this case, French:
//         const translationResult = await translator.translateText(
//             "Hello, world!",
//             null,
//             "fr"
//         );
//         console.log(translationResult.text); // 'Bonjour, le monde !'
//     } catch (error) {
//         console.error(error.message);
//     }
// };
