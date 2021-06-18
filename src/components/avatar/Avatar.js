
export function Avatar({initial, type}) {
    const randomColor = () => {
        let color = Math.floor(Math.random()*16777215).toString(16)
        let finalColor = '#' + color
        return finalColor
    }
    const getInitial = (name) => {
        const str = name
        var first = str.match(/\b(\w)/g)
        let joinLetter = first.join('')
        let final = joinLetter.toUpperCase()
        return final
    }
    const color = randomColor()

    const size = {
        M: {width: 49, height: 49},
        L: {width: 66, height: 66},
    }

    console.log(size)

    return (
        <>
            <div>
                <span className="avatar" data-letters={getInitial(initial)} style={{background:color}}></span>
            </div>
        </>
    )
}

