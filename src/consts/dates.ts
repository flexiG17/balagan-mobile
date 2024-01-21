const getDates = () => {
    const dateText = ['пн','вт','ср','чт','пт','сб','вс',]

    let today = new Date().getDate()
    let result = [{
        day: today,
        text: 'вс',
        isToday: true
    }]
    let textIndex = dateText.indexOf(result[0].text)

    for (let i = today + 1; result.length < 12; i++) {
        if (textIndex + 1 === dateText.length)
            textIndex = 0
        else
            textIndex += 1

        result.push({
            day: i,
            text: dateText[textIndex],
            isToday: false
        })

        if (i === 31)
            i = 0
    }
    return result
}

export default getDates