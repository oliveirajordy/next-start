import { useState, useEffect } from 'react'

const SouComponent1 = props => {

    const [count, setCount] = useState(0)

    useEffect(_ => {
        setCount(count + 1)
    },[props.sty])

    return (
        <div>
            <p>Sou Componente 1</p>
            <p>Essas são minhas props {props.sty}(que mudam) </p>
            <p>{count}</p>
            <style jsx>{`
                div{
                    width: 150px;
                    height: 150px;
                    background-color:${props.sty};
                }    
            `}</style>
        </div>
    )
}

export default SouComponent1