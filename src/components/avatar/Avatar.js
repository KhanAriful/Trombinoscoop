
export function Avatar({initial, large, color}) {

    const getInitial = (name) => {
        const str = name
        var first = str.match(/\b(\w)/g)
        let joinLetter = first.join('')
        let final = joinLetter.toUpperCase()
        return final
    }

    return (
        <>
            <div>
                <span className="avatar avatar-text" style={{background: color ? color : 'rgb(69, 154, 170)', width: large ? 66 : 49, height: large ? 66 : 49, fontSize: large ? 26 : 20}}>{getInitial(initial)}</span>
            </div>
        </>
    )
}

