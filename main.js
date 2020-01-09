function apiRequest() {
    fetch(procurarPokemon())
        .then(result => {
            return result.json()
        })
        .then(data => {
            const resultados = data;
            var pokemon = data;
            for (i = 0; i < data.results.length; i++) {
                var node = document.createElement("option");
                var textnode = document.createTextNode(data.results[i].name);
                node.appendChild(textnode);
                document.getElementById("select").appendChild(node);
            }
        });

}
apiRequest()

function procurarPokemon() {
    // var query = document.querySelector("#myText").value
    var query = 'pokemon'
    query = "https://pokeapi.co/api/v2/" + query + "?limit=300"
    return query;
}

function selectPokemon() {
    //console.log('iniciou select')
    var position = parseInt(document.getElementById("select").selectedIndex) +1;
    //var position = 1;
    //for (i = 0; i < 100; i++) {
        //console.log('this is position ' + position + 'type ' + typeof (position));
        var information = document.createElement("div");
        query = "https://pokeapi.co/api/v2/pokemon/" + position + "/"
        //console.log('this is the string to the pokemon ' + query)

        fetch(query)
            .then(result => {
                return result.json()
            })
            .then(data => {
                const resultados = data;
                var pokemon = data;
                //console.log('this is ability ' + data.abilities[0].ability.name)
               // console.log('this is image ' + data.sprites.back_default)

                var img = new Image();
                var div = document.getElementById('imagem');
                img.onload = function () {
                    div.innerHTML += '<img src="' + img.src + '" />';
                };
                img.src = data.sprites.front_default;

                description = data.abilities[0].ability.name;
                var div = document.getElementById('description');
                div.innerHTML +='<p>' + description +'</p> </br>';

            });
      //  position = position + 1;
   // }
}
