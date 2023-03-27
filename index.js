function buscarPokemon(data){

    //obtener el valor del input
    const pokemon = document.getElementById("pokemonName").value;
    //obtener el elemento donde se mostrara el resultado
    const resultado = document.getElementById("contenedor__pokemon");
    resultado.innerHTML = "";
    //Llamar a la api
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        // Crear el elemento donde se mostrará el nombre
      	const nombre = document.createElement("p");
        //Agregar el nombre al elemento
        nombre.innerText = data.name;
        //Agregar el elemento al resultado
        resultado.appendChild(nombre);

        // Crear el elemento donde se mostrará la imagen
        const imagen = document.createElement("img");
        //Agregar imagen al elemento
        imagen.src = data.sprites.front_default;
        //Agregar el elemento al resultado
        resultado.appendChild(imagen);
    }).catch(error => console.log(error));
}