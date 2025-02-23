import '../css/server.css'
const Server = () => {
return (
    <div className="card">
        <div className="top">
            <p className="title">NakamaTec.py</p>
            <span className="buttons">
                <button className="minimize btn">
                    <svg viewBox="0 0 10.2 1" y="0px" x="0px">
                        <rect height="1" width="10.2" y="50%" x="0"></rect>
                    </svg>
                </button>
                <button className="maximize btn">
                    <svg viewBox="0 0 10 10">
                        <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
                    </svg>
                </button>
                <button className="close btn">
                    <svg viewBox="0 0 10 10">
                        <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon>
                    </svg>
                </button>
            </span>
        </div>
        <div className="topfix"></div>
        <hr />
        <div className="content" style={{ textAlign: 'left' }}>
            <p>
                <code>
                    <i className="c1">import</i> os, sys
                    <br />
                    <b className="c2">os</b>.system<b className="c3">(</b>
                    <b className="c4">&quot;Tu nuevo Software&quot;</b>
                    <b className="c3">)</b>
                    <br />
                    <b className="c2">print</b>
                    <b className="c3">(</b>
                    <b className="c4">&quot;Estás listo?&quot;</b>
                    <b className="c3">)</b>
                    <br />
                    <b className="c2">sys</b>.exit<b className="c3">(</b>
                    <b className="c3">)</b>
                    <br />
                    <i className="comment">#¿Qué esperas?</i>
                </code>
            </p>
        </div>
    </div>
);
}

export default Server
