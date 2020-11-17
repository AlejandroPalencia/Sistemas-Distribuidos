import ngrok from 'ngrok'

let ngURL = ''

export const startNGrok = async function(PORT) {
    const url = await ngrok.connect({
        proto : 'http',
        addr : PORT,
    }, )
    ngURL = url
    console.log (url)
    return url
}