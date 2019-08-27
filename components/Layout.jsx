const Layout = props => {
    return (
        <div className="app" >
            <div className="header">
                <h1>Testando Next.js</h1>
            </div>
            <div className="main">
                {props.children}
            </div>
            <div className="footer">
                Por: <a href="">Jordy Oliveira</a>
            </div>
            <style jsx>{`
            .app{
                display:flex;
                flex-direction: column;
                width: 500px;
                height: 500px;              
            }
            h1{
                margin:0;
            }
            .header{
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .main{
                flex-grow:1;
                position:relative;
            }
            .footer{
                height:30px;
                background-color:#777;
            }
        `}</style>
        </div>
    )
}

export default Layout