
import wordList from "bip39/src/wordlists/english.json"
import { translate } from "../lang/translation"
import { modalAlert } from "../modal/core/modal"
import { encryptAes } from "../services/cryptograpy"

import { decodeWallet, getAddressFromStorage, getNFTs } from "../services/lunesNightly"
import { validateMnemonic } from "bip39"
const bip39 = require('bip39')
const useSeed = () => {    
    const generateSeed = () => bip39.generateMnemonic()

    const  validateSeed =  async (
        seed: string,
        password: string,
        callback: () => void
    ) => {
       try {
        if (!validateMnemonic(seed)) {
            modalAlert({
                headline: translate.seed.invalidSeed,
                message: translate.seed.invalidSeedMessage
            })

            return
        }
        let address = await decodeWallet(seed)
        localStorage.setItem("SEED", encryptAes(seed, password))
        localStorage.setItem("ADDRESS", address)
        callback()
       } catch (error) {
        modalAlert({
            headline: translate.seed.invalidSeed,
            message: translate.seed.invalidSeedMessage
        })
       }
       
    }

    const toString = (wordList: string[]): string => wordList.join(" ")

    const toStringArray = (seed: string): string[] => seed.split(" ")

    const validateIndividualWord = (word: string): boolean => {
        return wordList.includes(word)
    }

    const getAddress = () => getAddressFromStorage()
    const getNFTUser = async (listAddress:any = []) => await getNFTs(listAddress)
    return {
        generateSeed,
        validateSeed,
        toString,
        toStringArray,
        validateIndividualWord,
        getAddress,
        getNFTUser
    }
}

export default useSeed
