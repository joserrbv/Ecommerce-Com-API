import React from 'react';


export default function ComponentsError({error}) {

    return (
        <center className="container column gap-2 tela-erro">
          <h1>{error?.titulo}</h1>
          <p>{error?.msg}</p>

          <button className='btn' onClick={() => { window.location.reload() }}>Tentar novamente!</button>
        </center>
    )
}