import '../css/main.css';

const MainHome = () => {
    return (
        <div>
            <div className="titulo">
    <h1><span className="color1">Desarrollo</span> <span className="color2">de software</span></h1>
</div>

            <div className="container">
                <div className="bannerimg">
                    <img src="https://media.istockphoto.com/id/1830163120/es/foto/grupo-de-programadores-inform%C3%A1ticos-hablando-mientras-trabajan-en-la-oficina-de-ti.jpg?s=612x612&w=0&k=20&c=6Ldjzq8HTSQbdai_zCqPxKSK8gz1IuWJ7nKKCkP69RQ=" alt="" />
                </div>
                <div className="containerTexto">
                    <div>
                        <p className='texto'>
                            En <span className="resaltado">Nakama Tec</span>, sabemos que cada negocio es único y que las soluciones genéricas no siempre se ajustan a sus necesidades. Por eso, nos especializamos en el desarrollo de software a medida, diseñado específicamente para potenciar tu empresa y optimizar tus procesos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHome;