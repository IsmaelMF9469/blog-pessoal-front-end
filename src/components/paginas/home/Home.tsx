import React, { useState } from "react";
import './Home.css';

function Home () {
    const [num, setNum] = useState (0);
    const [int, setInt] = useState (0)

    return (
        <>
        <h1> Você clicou {num} vezes </h1>
        <h2> {int} pessoas comparecerá ao evento </h2>

        <button color="secundary" onClick={() => setNum(num + 1)}> 
        Clique aqui 
        </button>

        <button onClick={() => setInt(int + 1)}> 
        clique aqui se voce irá ao evento
        </button>

        <button onClick={() => setInt(int - 1)}> 
        clique aqui se voce não irá ao evento
        </button>
        </>
    )
}

export { Home }