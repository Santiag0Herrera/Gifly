const key = "u7hFNutEbvTI1vc43IeOPYrhkJ2XjCkJ"

async function getGifByTitle(keyword, amount){
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=${amount}&offset=0&rating=pg&lang=en`
        )
        const data = await response.json();
        return data.data;
}

export default getGifByTitle