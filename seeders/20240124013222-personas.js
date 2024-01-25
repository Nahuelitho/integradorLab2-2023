'use strict';
const models = require("../models/Persona")

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      models.findOrCreate({
        where: { id: "1" },
        defaults: {
          nombre: "Mariela Noemi",
          apellido: "Lezcano",
          dni: "26896124",
          telefono: "2664935517",
          email: "m_noemi44@hotmail.com",
          fechaNacimiento: "1999-11-12",
          sexo: "Femenino",
          domicilio: "Ayacucho 445",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "ANDES",
          numeroAfiliado: "132-26896124-04",
          user: "Mariela54",
          password: "contraseña44",
          
        },
      }),
      models.findOrCreate({
        where: { id: "2" },
        defaults: {
          nombre: "Nicolas Ezequiel",
          apellido: "Escobares",
          dni: "24563985",
          telefono: "2664189391",
          email: "nicolas.escobares22@hotmail.com",
          fechaNacimiento: "1994-09-22",
          sexo: "Masculino",
          domicilio: "Riobamba 154",
          provincia: "San Luis",
          localidad: "Fraga",
          obraSocial: "DOSEP",
          numeroAfiliado: "144-24563985-01",
          user: "Nicoescobares22",
          password: "nico123",
        },
      }),
      models.findOrCreate({
        where: { id: "3" },
        defaults: {
          nombre: "Eugenia Maria",
          apellido: "Pereyra",
          dni: "40996533",
          telefono: "2664171144",
          email: "euge_23_42@hotmail.com",
          fechaNacimiento: "2006-10-01",
          sexo: "Femenino",
          domicilio: "Martin de Loyola 441",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "DOSEP",
          numeroAfiliado: "114-40996533-02",
          user: "EugeMar23",
          password: "222456",
        },
      }),
      models.findOrCreate({
        where: { id: "4" },
        defaults: {
          nombre: "Estela ",
          apellido: "Pardo",
          dni: "21894358",
          telefono: "2664338523",
          email: "estelita_pardo@hotmail.com",
          fechaNacimiento: "1988-06-01",
          sexo: "Femenino",
          domicilio: "San Martin 1245",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "SANCOR",
          numeroAfiliado: "159-21894358-04",
          user: "E.Pardo58",
          password: "123456",
        },
      }),
      models.findOrCreate({
        where: { id: "5" },
        defaults: {
          nombre: "Maria Marta",
          apellido: "Aguero",
          dni: "45687235",
          telefono: "2665998234",
          email: "mmarta_aguero@gmail.com",
          fechaNacimiento: "1975-02-24",
          sexo: "Femenino",
          domicilio: "Esteban Adaro SN",
          provincia: "San Luis",
          localidad: "La Toma",
          obraSocial: "RIO SEGUROS",
          numeroAfiliado: "111-45687235-02",
          user: "maguero75",
          password: "456789",
        },
      }),
      models.findOrCreate({
        where: { id: "6" },
        defaults: {
          nombre: "Marcos Antonio",
          apellido: "Parizzia",
          dni: "38568211",
          telefono: "2664536428",
          email: "marcos.44@gmail.com",
          fechaNacimiento: "1991-12-24",
          sexo: "Masculino",
          domicilio: "Raul b Diaz 44",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "LA CAJA",
          numeroAfiliado: "135-38568211-01",
          user: "marquitoparizzia",
          password: "455559",
        },
      }),
      models.findOrCreate({
        where: { id: "7" },
        defaults: {
          nombre: "Brayan Martin",
          apellido: "Bongiovani",
          dni: "40598333",
          telefono: "2665663942",
          email: "bmartin24@gmail.com",
          fechaNacimiento: "1997-11-03",
          sexo: "Masculino",
          domicilio: "Bolivar 993",
          provincia: "San Luis",
          localidad: "San Francisco",
          obraSocial: "OSUTHGRA",
          numeroAfiliado: "125-40598333-06",
          user: "Brayan40",
          password: "123789",
        },
      }),
      models.findOrCreate({
        where: { id: "8" },
        defaults: {
          nombre: "Victoria Veronica",
          apellido: "Escardulla",
          dni: "39265412",
          telefono: "2664223912",
          email: "v.escardulla_27@gmail.com",
          fechaNacimiento: "1993-01-19",
          sexo: "Femenino",
          domicilio: "Rivadavia 579",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "OSDE",
          numeroAfiliado: "119-39265412-03",
          user: "vicky27",
          password: "veronica",
        },
      }),
      models.findOrCreate({
        where: { id: "9" },
        defaults: {
          nombre: "Victor Alberto",
          apellido: "Villaverde",
          dni: "41899534",
          telefono: "2664236519",
          email: "victor454@gmail.com",
          fechaNacimiento: "1997-04-29",
          sexo: "Masculino",
          domicilio: "B El Lince mza 3 c 19",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "OSPAT",
          numeroAfiliado: "154-41899534-04",
          user: "victorAlberto77",
          password: "123444",
        },
      }),
      models.findOrCreate({
        where: { id: "10" },
        defaults: {
          nombre: "Joaquin Ivan",
          apellido: "Escalada",
          dni: "19458331",
          telefono: "2664339666",
          email: "joaquiniescalada@gmail.com",
          fechaNacimiento: "1987-01-05",
          sexo: "Masculino",
          domicilio: "B Cerro de la Cruz Mz 23 C 11",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "OSDE",
          numeroAfiliado: "112-19458331-01",
          user: "JoacoIvan",
          password: "123456",
        },
      }),
      models.findOrCreate({
        where: { id: "11" },
        defaults: {
          nombre: "Mario Ariel",
          apellido: "Castillo",
          dni: "33458927",
          telefono: "2664231822",
          email: "marioarielcast11@gmail.com",
          fechaNacimiento: "1993-06-25",
          sexo: "Masculino",
          domicilio: "Av. Sucre 1155",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "DOSEP",
          numeroAfiliado: "122-33458927-01",
          user: "marioAriel11",
          password: "458895",
        },
      }),
      models.findOrCreate({
        where: { id: "12" },
        defaults: {
          nombre: "Esteban Leonel",
          apellido: "Juarez",
          dni: "41555892",
          telefono: "2664118934",
          email: "estebanjuarez24@gmail.com",
          fechaNacimiento: "1990-08-12",
          sexo: "Masculino",
          domicilio: "Av. Italia 102",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "SWISS MEDICAL",
          numeroAfiliado: "152-41555892-02",
          user: "Esteban22",
          password: "111111",
        },
      }),
      models.findOrCreate({
        where: { id: "13" },
        defaults: {
          nombre: "Leon Antonio",
          apellido: "Ledesma",
          dni: "41998652",
          telefono: "2665263348",
          email: "leonledesma42@gmail.com",
          fechaNacimiento: "1998-11-13",
          sexo: "Masculino",
          domicilio: "Av. Fuerza Aerea 192",
          provincia: "San Luis",
          localidad: "Buena Esperanza",
          obraSocial: "ANDES",
          numeroAfiliado: "142-41998652-03",
          user: "Leon42",
          password: "115698",
        },
      }),
      models.findOrCreate({
        where: { id: "14" },
        defaults: {
          nombre: "Juan Jose",
          apellido: "Arias",
          dni: "46760119",
          telefono: "2664339510",
          email: "juanjoarias19@yahoo.com",
          fechaNacimiento: "1995-06-22",
          sexo: "Masculino",
          domicilio: "Salvador Segado 119",
          provincia: "San Luis",
          localidad: "La Carolina",
          obraSocial: "DOSEP",
          numeroAfiliado: "133-46760119-02",
          user: "jarias19",
          password: "asd144",
        },
      }),
      models.findOrCreate({
        where: { id: "15" },
        defaults: {
          nombre: "Alexander",
          apellido: "Ramirez",
          dni: "49556398",
          telefono: "2664010698",
          email: "alexanez@gmail.com",
          fechaNacimiento: "2010-08-11",
          sexo: "Masculino",
          domicilio: "Gobernador Alric 299",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "SMATA",
          numeroAfiliado: "123-49556398-03",
          user: "alex38",
          password: "contraseña",
        },
      }),
      models.findOrCreate({
        where: { id: "16" },
        defaults: {
          nombre: "Adriana",
          apellido: "Herrera",
          dni: "37882568",
          telefono: "2664063785",
          email: "herrera.adri27@gmail.com",
          fechaNacimiento: "1993-11-16",
          sexo: "Femenino",
          domicilio: "San Juan 1923",
          provincia: "San Luis",
          localidad: "Villa Mercedes",
          obraSocial: "UOM",
          numeroAfiliado: "113-37882568-03",
          user: "adrih27",
          password: "19934525",
        },
      }),
      models.findOrCreate({
        where: { id: "17" },
        defaults: {
          nombre: "Maria Paula",
          apellido: "Gonzalez",
          dni: "40135924",
          telefono: "2664309340",
          email: "maripau899@gmail.com",
          fechaNacimiento: "1998-01-26",
          sexo: "Femenino",
          domicilio: "Julio A Roca 205",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "SMATA",
          numeroAfiliado: "145-40135924-01",
          user: "paumaria23",
          password: "159357",
        },
      }),
      models.findOrCreate({
        where: { id: "18" },
        defaults: {
          nombre: "Amelia Marcela",
          apellido: "Frederich",
          dni: "39452197",
          telefono: "2664219345",
          email: "amemar97@gmail.com",
          fechaNacimiento: "1997-04-16",
          sexo: "Femenino",
          domicilio: "B Cantisani mz 19 c 22",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "OSMEDICA",
          numeroAfiliado: "155-39452197-02",
          user: "amemar97",
          password: "154732",
        },
      }),
      models.findOrCreate({
        where: { id: "19" },
        defaults: {
          nombre: "Mario Nahuel",
          apellido: "Adaro",
          dni: "33567824",
          telefono: "2664023648",
          email: "marionahuad@gmail.com",
          fechaNacimiento: "1990-04-26",
          sexo: "Masculino",
          domicilio: "544 viviendas mz 122 c 20",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "DOSEP",
          numeroAfiliado: "155-33567824-02",
          user: "marioNadaro",
          password: "123456",
        },
      }),
      models.findOrCreate({
        where: { id: "20" },
        defaults: {
          nombre: "Maria Jose",
          apellido: "Blanco",
          dni: "23456285",
          telefono: "2664000395",
          email: "mariblanco_23@gmail.com",
          fechaNacimiento: "1988-11-01",
          sexo: "Femenino",
          domicilio: "Chubut 1192",
          provincia: "San Luis",
          localidad: "San Luis",
          obraSocial: "OSDE",
          numeroAfiliado: "145-23456285-02",
          user: "mariJBlanco23",
          password: "881101",
        },
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
