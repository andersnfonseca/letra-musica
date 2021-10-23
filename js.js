const pegarLetraMusica = async() => {
        
        var artista = document.getElementById("artista").value;
        var musica = document.getElementById("musica").value;
        var key = `15fcead61e2ec42c7d8b170f6018fbe6`;
        var URL = `https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}&apikey=${key}`

        const dados = await fetch(URL);
        const letraDaMusica = await dados.json();
        // console.log(letraDaMusica.mus[0].translate[0].text);

        document.getElementById("cantor").innerText = letraDaMusica.art.name;
        document.getElementById("letra").innerText = letraDaMusica.mus[0].text;
        
        
        limparCampos();
}

function limparCampos() {
    document.getElementById('artista').value='';
    document.getElementById('musica').value='';
}

function exibirTraducao() {
    
}