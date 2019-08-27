import { useState, useEffect } from 'react'

const ComponenteAnimado = props => {

    const [state, setState] = useState(false)

    useEffect(_ => {
        setTimeout(_ => setState(!state), 2500)
    })

    return (
        <div className={`${state ? 'down':''}`} >
            <style jsx>{`
                div{
                    position:absolute;
                    height:25px;
                    width:25px;
                    top:0px;
                    right:0px;
                    background-color:purple;
                    transition: all 1.5s ease;
                }
                div.down {
                    top:100%;
                    right:0px;
                    transition: all 1.5s ease;
                }
            `}</style>
        </div>
    )
}

export default ComponenteAnimado