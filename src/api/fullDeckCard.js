const numberDesc = 6
const baseUrl = 'https://deckofcardsapi.com/api/deck'
const idDesc = 'c8ie1dldbojc'
const newDescCardUrl = `/${idDesc}/shuffle/?deck_count=${numberDesc}` // хвост url новой колоды + shuffle


export const getApiDesc = async function () {
    try {
        const res = await fetch(`${baseUrl}${newDescCardUrl}`)
        return  await res.json()
    } catch (e) {
        console.warn(e)
    }
}



export const getFirstThreeCard = async function() {
    try {
        const res = await fetch(`${baseUrl}/${idDesc}/draw/?count=3`)
        return  await res.json()
    } catch (e) {
        console.warn(e)
    }
}

export const getNextCard = async function() {
    try {
        const res = await fetch(`${baseUrl}/${idDesc}/draw/?count=1`)
        return  await res.json()
    } catch (e) {
        console.warn(e)
    }
}

export default {
    getApiDesc,
    getFirstThreeCard,
    getNextCard
}

//{ "code": "KD", "image": "https://deckofcardsapi.com/static/img/KD.png", "images": { "svg": "https://deckofcardsapi.com/static/img/KD.svg", "png": "https://deckofcardsapi.com/static/img/KD.png" }, "value": "KING", "suit": "DIAMONDS" }


// { "code": "7H", "image": "https://deckofcardsapi.com/static/img/7H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/7H.svg", "png": "https://deckofcardsapi.com/static/img/7H.png" }, "value": "7", "suit": "HEARTS" }
