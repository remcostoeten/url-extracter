const removeAllExceptCharacter = (
    text: string,
    character: any,
    keepContaining: any
) => {
    const lines = text.split('\n')
    const filteredLines = text
        .split('\n')
        .filter(
            keepContaining
                ? (line: string | any[]) => line.includes(character)
                : (line: string | any[]) => !line.includes(character)
        )
    const newText = filteredLines.join('\n')
    return newText
}

export default removeAllExceptCharacter
