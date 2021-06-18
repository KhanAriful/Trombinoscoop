
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
    const size = {
        'M': {pixel: 49},
        'L': {piexl: 66},
    }
    const handleSize = () => {
        let value = 0
        if (type === 'M') {
            value = size.M.pixel
            return value
        } else if ( type === 'L') {
            value = size.L.piexl
            return value
        }
        return value
    }

    const color = randomColor()
    
    const taille = handleSize() + 'px'

    return (
        <>
            <div>
                <span className="avatar" data-letters={getInitial(initial)} style={{background:color, height:taille, width:taille}}></span>
            </div>
        </>
    )
}

