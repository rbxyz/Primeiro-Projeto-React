function Titulo2 ({ nome, paragrafo, cor }) {
    return (
        <div>
            <h1 style={{ color: cor }}>Meu Nome é {nome ? nome : "Fulano"}</h1>
            {paragrafo ? (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque odit iusto doloribus velit, similique enim distinctio molestias sint provident ad consectetur aliquam beatae culpa at autem expedita earum molestiae?</p>
            ) : (
            <p>Nada</p>
            )}
        </div>
    );
}
export default Titulo2;