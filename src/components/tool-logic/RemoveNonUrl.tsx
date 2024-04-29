export default function removeNonURLs(text: string) {
    if (typeof text !== 'string' || text === '') {
        return ''
    }

    const urlPattern =
        /(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*/g
    const lines = text.split('\n')

    const urls = lines.map((line: string) => line.match(urlPattern)?.join('\n'))

    const filteredLines = urls.filter((url: null) => url !== null)

    const newText = filteredLines.join('\n')
    return newText
}
