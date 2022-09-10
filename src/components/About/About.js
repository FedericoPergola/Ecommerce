

const About = () =>{
    return(
        <>
        <h2 className="d-flex justify-content-center p-5 fs-1">¿Quienes somos?</h2>
        <div className="row mx-5">
            <div className="col-6 px-3">
                <img className="w-75" src="../assests/contact.jpg" alt="" />
            </div>
            <div className="col-6 pt-5">
                <p className="fs-4">
                    En Mundo Mate contamos con 15 años de experiencia en el rubro.
                    Tenemos personal calificado para cumplir sus requerimientos y necesidades.
                </p>
                <p className="fs-4 mt-5">
                    Ofrecemos la más amplia variedad de mates y bombillas en el país.
                    Con nosotros encontrarás todo lo referido al mate para todos los gustos y estilos,
                    de la más alta calidad y a precios competitivos.
                </p>
                <p className="fs-4 mt-5">
                    Trabajamos con dedicación pensando en la satisfacción de nuestros clientes.
                    Estamos ubicados en la localidad de Palermo, nuestro personal está para atenderle.
                    ¡Lo esperamos!
                </p>
            </div>

        </div>
        </>
    )
}

export default About