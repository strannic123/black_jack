const numberDesc = 6
const baseUrl = 'https://deckofcardsapi.com/api/deck'
const idDesc = 'c8ie1dldbojc'
const newDescCardUrl = `/${idDesc}/shuffle/?deck_count=${numberDesc}` // хвост url новой колоды + shuffle

// получаем первую полную колоду с ее id
// export async function getApiDesc() {
//     try {
//         const res = await fetch(`${baseUrl}${newDescCardUrl}`)
//         return  await res.json()
//     } catch (e) {
//         console.warn(e)
//     }
// }

export const getApiDesc = async function () {
    try {
        const res = await fetch(`${baseUrl}${newDescCardUrl}`)
        return  await res.json()
    } catch (e) {
        console.warn(e)
    }
}

// получаем первые три карты
//  async function getFirstThreeCard() {
//     try {
//         const res = await fetch(`${baseUrl}${idDesc}/draw/?count=3`)
//         return  await res.json()
//     } catch (e) {
//         console.warn(e)
//     }
// }

export const getFirstThreeCard = async function() {
    try {
        const res = await fetch(`${baseUrl}/${idDesc}/draw/?count=3`)
        return  await res.json()
    } catch (e) {
        console.warn(e)
    }
}

export default {
    getApiDesc,
    getFirstThreeCard
}

//{ "code": "KD", "image": "https://deckofcardsapi.com/static/img/KD.png", "images": { "svg": "https://deckofcardsapi.com/static/img/KD.svg", "png": "https://deckofcardsapi.com/static/img/KD.png" }, "value": "KING", "suit": "DIAMONDS" }


// { "code": "7H", "image": "https://deckofcardsapi.com/static/img/7H.png", "images": { "svg": "https://deckofcardsapi.com/static/img/7H.svg", "png": "https://deckofcardsapi.com/static/img/7H.png" }, "value": "7", "suit": "HEARTS" }
