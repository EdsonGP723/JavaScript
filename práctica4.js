let JuegoDeTronos = {
    titulo: "Juego de Tronos",
    autor: "George R.R. Martin",
    añoDePublicación: 1996,
    Generos: ["Novela, Literatura fantástica, Alta fantasía, Ficción política"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let Metro2033 = {
    titulo: "Metro 2033",
    autor: "Dimitry Glukhovsky",
    añoDePublicación: 2002,
    Generos: ["Novela, Ciencia ficción, Ciencia ficción apocalíptica"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let ElColorQueCayoDelCielo = {
    titulo: "El color que cayó del cielo",
    autor: "Howard Phillips Lovecraft",
    añoDePublicación: 1927,
    Generos: ["Cuento"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let datosPersonales = {
    nombre : "Edson",
   edad: 20,
   soyEstudiante:true,
   pasatiempos:["Jugar Videojuegos","Ver peliculas y series","Leer","Jugar D&D"],

   contacto: {
        email: "edsongp1007@gmail.com",
        movil: "5547796350"
   },

   librosFavoritos:[JuegoDeTronos,Metro2033,ElColorQueCayoDelCielo],
};

console.log(datosPersonales);
JuegoDeTronos.escribirFichaBibliografica();
Metro2033.escribirFichaBibliografica();
ElColorQueCayoDelCielo.escribirFichaBibliografica();