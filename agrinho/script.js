const imagens = [ 
    "drones.jpg",
     "sensores.jpg", 
     "automaçao.jpg",
      "bigdata.jpg"
     ]; 
     let indice = 0;
      function mostrarProximaImagem() {
         const img =
          document.getElementById('carrossel-imagem');
           img.src = imagens[indice];
            indice = (indice + 1) % imagens.length;
         } 
         setInterval(mostrarProximaImagem, 3000);
          // Troca de imagem a cada 3 segundos