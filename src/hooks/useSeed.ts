import { generateMnemonic, validateMnemonic } from "bip39"
import wordList from "bip39/src/wordlists/english.json"
import { translate } from "../lang/translation"
import { modalAlert } from "../modal/core/modal"
import { encryptAes } from "../services/cryptograpy"

import { decodeWallet, getAddressFromStorage } from "../services/lunesNightly"

const useSeed = () => {
    const generateSeed = () => generateMnemonic()

    const  validateSeed =  async (
        seed: string,
        password: string,
        callback: () => void
    ) => {
       /* if (!validateMnemonic(seed)) {
            modalAlert({
                headline: translate.seed.invalidSeed,
                message: translate.seed.invalidSeedMessage
            })

            return
        }*/
        let address = await decodeWallet(seed)
        console.log(address)
        localStorage.setItem("SEED", encryptAes(seed, password))
        localStorage.setItem("ADDRESS", address)
        callback()
    }

    const toString = (wordList: string[]): string => wordList.join(" ")

    const toStringArray = (seed: string): string[] => seed.split(" ")

    const validateIndividualWord = (word: string): boolean => {
        return wordList.includes(word)
    }

    const getAddress = () => getAddressFromStorage()

    return {
        generateSeed,
        validateSeed,
        toString,
        toStringArray,
        validateIndividualWord,
        getAddress
    }
}

export default useSeed
