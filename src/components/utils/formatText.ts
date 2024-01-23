export const deleteExtraSpaces = (text  : string) => {
    const splittedText = text.split('')
    if (splittedText[0] === ' ') {
        splittedText.splice(0, 1)
        splittedText.splice(splittedText.length - 1, 1)
        return splittedText.join('')
    }
    else
        return text
}