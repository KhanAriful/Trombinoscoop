
export function Avatar({initial, large}) {
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

    return (
        <>
            <div>
                <span className="avatar" data-letters={getInitial(initial)} style={{background: color, width: large ? 66 : 49, height: large ? 66 : 49}}></span>
            </div>
        </>
    )
}

