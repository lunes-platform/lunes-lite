import { Translation } from "./types"

const EN: Translation = {
    lunesWallet: "Lunes Wallet",
    attention: "Attention",
    welcome: {
        hero: {
            title: "Here, you are the only person in control of your finances.",
            subtitle:
                "Access your Lunes digital account and simplify your day to day."
        },
        button: "Access"
    },
    password: {
        enterPassword: {
            label: "Password",
            placeholder: "Enter you password"
        },
        confirmPassword: {
            label: "Confirm password",
            placeholder: "Enter you password again"
        },
        button: "Next",
        termsAdvice: "By accessing Lunes Wallet, you agree to the ",
        terms: "Terms of Service",
        passwordNotMatch: "Passwords didn't match",
        passwordSavedSuccess: "Password saved successfully"
    },
    terms: {
        accessAccount: "Access Account",
        faq: [
            {
                headline: "Attention!",
                explanation:
                    "The storage of your cryptocurrencies in the LunesWallet wallet is decentralized."
            },
            {
                headline: "What does that mean?",
                explanation:
                    "It means that your assets are not in the custody of Lunes Wallet, we do not store your coins on our servers. The Seed will be in your possession."
            },
            {
                headline: "What is Seed?",
                explanation:
                    'There are 12 words in English that give you access to your funds in your Blockchain wallet of your favorite currency. "Write down and backup the Seed, and keep it in a safe place, if you lose the Seed you will lose your funds."'
            },
            {
                headline: "I know!",
                explanation:
                    "That I should write down and backup my Seed and keep it in a safe place, either physical or digital. I am also instructed that my cryptocurrency funds are not stored or held in custody by Lunes does not back up my Seeds. I know that in case of loss of my Seed, or wrong notation of words, it is not possible to recover."
            }
        ]
    },
    seed: {
        title: "Your Seed",
        instructions: "Enter your 12 english words seed in lowercase.",
        typeWord: "Enter word",
        generate: "Generate",
        validate: "Validate",
        invalidSeed: "Invalid Seed!",
        invalidSeedMessage: "Check orthography and word order and try again."
    },
    balance: {
        title: "Account balance"
    },
    home: {
        defaultIcon: "Default",
        explorer: "Explorer",
        receive: "Receive",
        send: "Send",
        support: "Support"
    },
    send: {
        navigationTitle: "Send",
        pageTitle: "Insert Lunes wallet address",
        instructions:
            "Send only Lunes to this address, sending other coins can result in permanent lost.",
        receiverAddressLabel: "Receiver address",
        receiverAddressPlaceholder: "Enter the receiver address",
        amountLabel: "Amount",
        amountPlaceholder: "Value in Lunes",
        available: "Available",
        fee: "Fee",
        confirm: "Continue",
        feeDescription: "Network Fee"
    },
    sendConfirm: {
        modalPassword: {
            headline: "Enter your password",
            message: "To confirm this transfer you need to enter your password",
            errorMessage: "Inválid password"
        },
        pageTitle: "Chek if everithing is ok",
        pageInstructions:
            "Before you confirm this transction check if everything is ok. This action can not be undone.",
        amountOf: "Amount of ",
        totalAmount: "Total Amount"
    },
    hooks: {
        useTransaction: {
            invalidAmountHeadLine: "Invalid Amount",
            invalidAmountMessage: "Total amount must be greater than zero",
            insufficientFundsHeadLine: "Insufficient funds",
            insufficientFundsMessage:
                "You have no balance to complete this transaction",
            invalidAddressHeadLine: "Invalid address",
            invalidAddressMessage:
                "The address entered does not match a Valid Lunes address",
            successHeadLine: "Success!",
            successMessage: "Your transaction was successful",
            failureHeadLine: "Shipping cancelled!",
            failureMessage:
                "Failed to make the transaction. Check shipping data and password."
        }
    }
}

export default EN
