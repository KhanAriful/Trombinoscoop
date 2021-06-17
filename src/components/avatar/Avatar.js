
export function Avatar({initial}) {
    const randomColor = () => {
        let color = Math.floor(Math.random()*16777215).toString(16)
        let finalColor = '#' + color
        return finalColor
    }
    const color = randomColor()
    return (
        <>
            <div>
                <span className="avatar" data-letters={initial} style={{background:color}}></span>
            </div>
        </>
    )
}

