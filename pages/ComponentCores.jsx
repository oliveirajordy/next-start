import { useState, useEffect } from 'react'
import Link from 'next/link'

import SouCompoent1 from '../components/SouComponent1'
import SouCompoent2 from '../components/SouComponent2'
import ChangeColorButton from '../components/ChangeColorButton'
import ComponenteTelaPreta from '../components/ComponentTelaPreta'
import ComponenteAnimado from '../components/ComponenteAnimado'

import Layout from '../components/Layout'

const ComponentCOres = props => {

    const [state, setState] = useState({
        c1sty: 'red',
        c2sty: 'blue',
        telapreta: false
    })

    const mudarCor = _ => {
        if (state.c1sty === 'red') {
            setState({
                c1sty: 'green',
                c2sty: 'pinck'
            })
        } else {
            setState({
                c1sty: 'red',
                c2sty: 'blue'
            })
        }
    }

    return (
        <Layout>
            <nav>
                <Link href="/testRec" ><a>Requisições</a></Link>
                <Link href="/" ><a>Index</a></Link>
                <button onClick={_ => setState({ ...state, telapreta: !state.telapreta })} >TelaPreta</button>
            </nav>
            {!state.telapreta && <SouCompoent1 sty={state.c1sty} />}
            {!state.telapreta && <ChangeColorButton mudarCor={mudarCor} />}
            {!state.telapreta && <SouCompoent2 sty={state.c2sty} />}
            {state.telapreta && <ComponenteTelaPreta />}
            {state.telapreta && <ComponenteAnimado />}
        </Layout>
    )
}

export default ComponentCOres