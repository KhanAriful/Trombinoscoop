
export function Avatar({initial, large}) {
    const randDarkColor = () => {
        var lum = -0.25;
        var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }

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
                <span className="avatar avatar-text" style={{background: randDarkColor(), width: large ? 66 : 49, height: large ? 66 : 49, fontSize: large ? 26 : 20}}>{getInitial(initial)}</span>
            </div>
        </>
    )
}

