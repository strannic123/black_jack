const numberDesc = 6
const baseUrl = 'https://deckofcardsapi.com/api/deck'
let idDesc = ''
const newDescCardUrl = `/${idDesc}/shuffle/?deck_count=${numberDesc}` // хвост url новой колоды + shuffle

export const getFullDeckId = async function () {
    try {
        const res = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numberDesc}`)
        const data = await res.json()
        idDesc = data['deck_id']
        return true
    } catch (e) {
        console.warn(e)
    }
}

export const getApiDesc = async function () {
    try {
        const res = await fetch(`${baseUrl}${newDescCardUrl}`)
        return await res.json()
    } catch (e) {
        console.warn(e)
    }
}


export const getFirstThreeCard = async function () {
    try {
        const res = await fetch(`${baseUrl}/${idDesc}/draw/?count=3`)
        return await res.json()
    } catch (e) {
        console.warn(e)
    }
}

export const getNextCard = async function () {
    try {
        const res = await fetch(`${baseUrl}/${idDesc}/draw/?count=1`)
        return await res.json()
    } catch (e) {
        console.warn(e)
    }
}



