 //Variaveis
    //Quaantidade de Gatos
    var cats = 0;
    var catsP = 0;
    var catsD = 0;
    var catsPg = 0;
    var catsDg = 0;
    //Multiplicador de clicks e gatos por segundo
    var multClick = 1;
    var bps = 0;
    //Valores de Precos
    var MinePrice = 1;
    var MiPrice= 1;

//Funcoes
        function clickG() {
        //Coletagem de Gatos Normais    
        cats += 1 * multClick;
        catsPg += 1;
        //Contagem de Gatos Prateados
        if (catsPg >= 100) {
            catsP += 1;
            catsPg -= 100;
            catsDg += 1;
        }
        //Coletagem de Gatos Dourados
        if (catsDg >=100) {
            catsD += 1;
            catsDg -= 100;
        }
    }
        //Melhoria de Coletor de Gato
        function Mbuy() {
        if (cats >= 100 * MinePrice) {
            cats -= 100 * MinePrice;
            multClick += 1;
            MinePrice += 2;
          //Caso nao tenha gatos suficientes
        } else {
            alert("Voce nao tem gatos o suficiente");
        }
        
        }
        
        //Compra de Mineradores
        function Mibuy() {
            if (cats >= 50 * MiPrice) {
                cats -= 50 * MiPrice;
                bps += 1;
                MiPrice += 1;
              //Caso nao tenha gatos o suficiente    
            } else {
                alert("Voce nao tem gatos o suficiente");
            }
        }
    
//Intervalos

        //Quando a pagina carregar
        window.onload = function() {
            loadGame();
            document.getElementById("displayG").innerHTML = "Gatos: " + cats;
            document.getElementById("displayBP").innerHTML = "Gatos Prateados: " + catsP;
            document.getElementById("displayBD").innerHTML = "Gatos Dourados: " + catsD;
        };
        
        //Display Loja
        setInterval(function() {
            document.getElementById("MbuyDisplay").innerHTML = "Melhorar Coletor de Gatos<br>" + "Preco: " + 100 * MinePrice + " Gatos";
            document.getElementById("MibuyDisplay").innerHTML = "Comprar 1 Minerador de Gatos<br>" + "Preco: " + 50 * MiPrice + " Gatos";
            
        }, 1);
        
        //Gatos por segundo
        setInterval(function() {
            cats += bps * 2;
        }, 1000); //1000ms = 1 segundo
        
        setInterval(function() {
            if (bps >= 1) {
                document.getElementById("MiDisplay").innerHTML = "Mineradores de Gatos: " + bps + " = " + bps * 2 + "s";
            }
            
                document.getElementById("MineDisplay").innerHTML = "Coletor de Gatos Nivel: " + multClick;
            
        }, 1);

        setInterval(function() {
            saveGame();
        }, 1); //10000ms = 10 segundos
        
        setInterval(function() {
            document.getElementById("displayG").innerHTML = "Gatos: " + cats;
            document.getElementById("displayBP").innerHTML = "Gatos Prateados: " + catsP;
            document.getElementById("displayBD").innerHTML = "Gatos Dourados: " + catsD;
        }, 1);
        
        //Salvar
        function saveGame() {
            var gameSave = {
                cats: cats,
                catsP: catsP,
                catsD: catsD,
                catsPg: catsPg,
                catsDg: catsDg,
                multClick: multClick,
                bps: bps,
                MinePrice: MinePrice,
                MiPrice: MiPrice
        };
            localStorage.setItem("gameSave", JSON.stringify(gameSave));
    }
        //Carregar
        function loadGame() {
            var savedGame = JSON.parse(localStorage.getItem("gameSave"));
            if (typeof savedGame.cats !== "undefined") cats = savedGame.cats;
            if (typeof savedGame.catsP !== "undefined") catsP = savedGame.catsP;
            if (typeof savedGame.catsD !== "undefined") catsD = savedGame.catsD;
            if (typeof savedGame.catsPg !== "undefined") catsPg = savedGame.catsPg;
            if (typeof savedGame.catsDg !== "undefined") catsDg = savedGame.catsDg;
            if (typeof savedGame.multClick !== "undefined") multClick = savedGame.multClick;
            if (typeof savedGame.bps !== "undefined") bps = savedGame.bps;
            if (typeof savedGame.MinePrice !== "undefined") MinePrice = savedGame.MinePrice;
            if (typeof savedGame.MiPrice !== "undefined") MiPrice = savedGame.MiPrice;
        }
