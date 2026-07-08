// Coordenadas iniciales para ver el mapamundi completo
export const INITIAL_CENTER = [0, 20];
export const INITIAL_ZOOM = 2;

// Base de datos expandida de Grandes Maravillas del Mundo (24 ubicaciones)
export const MARAVILLAS = [
  {
    id: "chichen-itza",
    nombre: "Chichén Itzá",
    pais: "México",
    coordenadas: [-88.5678, 20.6843],
    descripcion:
      "Legendaria ciudad maya famosa por la pirámide escalonada conocida como El Castillo o templo de Kukulcán.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg",
  },
  {
    id: "machu-picchu",
    nombre: "Machu Picchu",
    pais: "Perú",
    coordenadas: [-72.545, -13.1631],
    descripcion:
      "Antigua e impresionante ciudadela inca construida en el siglo XV en lo alto de la cordillera de los Andes.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg/1280px-Machu_Picchu%2C_Peru_%282018%29.jpg",
  },
  {
    id: "cristo-redentor",
    nombre: "Cristo Redentor",
    pais: "Brasil",
    coordenadas: [-43.2105, -22.9519],
    descripcion:
      "La monumental estatua de Jesús de Nazaret con los brazos abiertos que corona el cerro del Corcovado en Río de Janeiro.",
    imagen:
      "https://cdn-imgix.headout.com/media/images/d777f7d9-83e8-43d7-9f06-6ea3683f516e-1750702096435-273021.jpg?auto=compress%2Cformat&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop",
  },
  {
    id: "coliseo-roma",
    nombre: "El Coliseo",
    pais: "Italia",
    coordenadas: [12.4922, 41.8902],
    descripcion:
      "El anfiteatro más grande del Imperio Romano, un ícono de la arquitectura clásica donde luchaban los gladiadores.",
    imagen:
      "https://lacorriente.com/wp-content/uploads/2021/05/coliseo-de-roma-historia.jpg",
  },
  {
    id: "petra",
    nombre: "Petra",
    pais: "Jordania",
    coordenadas: [35.4444, 30.3285],
    descripcion:
      "Famoso sitio arqueológico excavado directamente en la roca caliza rosada del desierto, conocida como la Ciudad Perdida.",
    imagen:
      "https://geologyscience.com/wp-content/uploads/2023/01/Petra-Jordan.webp",
  },
  {
    id: "taj-mahal",
    nombre: "Taj Mahal",
    pais: "India",
    coordenadas: [78.0421, 27.1751],
    descripcion:
      "Un majestuoso mausoleo de mármol blanco construido por el emperador Shah Jahan en memoria de su esposa favorita.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
  },
  {
    id: "gran-muralla",
    nombre: "La Gran Muralla",
    pais: "China",
    coordenadas: [116.5704, 40.4319],
    descripcion:
      "Histórica fortificación construida y reconstruida para proteger las fronteras del imperio chino contra los ataques de nómadas.",
    imagen:
      "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2710344.webp?w=760&h=509",
  },
  {
    id: "piramides-guiza",
    nombre: "Pirámides de Guiza",
    pais: "Egipto",
    coordenadas: [31.1342, 29.9792],
    descripcion:
      "La más antigua de las maravillas del mundo y la única que aún se mantiene en pie, sirviendo como tumbas reales desde hace 4500 años.",
    imagen: "https://www.worldhistory.org/uploads/images/5687.jpg",
  },
  {
    id: "torre-eiffel",
    nombre: "Torre Eiffel",
    pais: "Francia",
    coordenadas: [2.2945, 48.8584],
    descripcion:
      "Estructura de hierro pudelado diseñada por Gustave Eiffel para la Exposición Universal de 1889, símbolo global de París.",
    imagen:
      "https://www.toureiffel.paris/sites/default/files/styles/mobile_450_762/public/2020-04/Tour%20Eiffel%20illumin%C3%A9e%20depuis%20Champs%20de%20Mars%20%C2%A9%20E.Li%20%282%29.jpg?itok=R_-TVVdY",
  },
  {
    id: "estatua-libertad",
    nombre: "Estatua de la Libertad",
    pais: "Estados Unidos",
    coordenadas: [-74.0445, 40.6892],
    descripcion:
      "Monumento obsequiado por Francia en 1886 para conmemorar el centenario de la Declaración de Independencia estadounidense.",
    imagen:
      "https://www.revistalimpiezas.es/wp-content/uploads/sites/4/2025/07/estatuadelalibertad.jpg",
  },
  {
    id: "angkor-wat",
    nombre: "Angkor Wat",
    pais: "Camboya",
    coordenadas: [103.867, 13.4125],
    descripcion:
      "El asentamiento religioso más grande jamás construido, una obra maestra de la arquitectura jemer rodeada por un inmenso foso.",
    imagen:
      "https://www.expeditions.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fb4bpxrz16gb9%2Fcbff8d609d48420c94b9065204287d09%2F5320b8a808437aebbd0e52d755640a7c%2Fangkor-wat-main.jpg&w=3840&q=75",
  },
  {
    id: "moais-pascua",
    nombre: "Moáis de Rapa Nui",
    pais: "Chile",
    coordenadas: [-109.3497, -27.1127],
    descripcion:
      "Gigantescas estatuas de piedra volcánica esculpidas por los antiguos habitantes de la Isla de Pascua entre los siglos IX y XVI.",
    imagen:
      "https://content-historia.nationalgeographic.com.es/medio/2023/02/23/istock-529951097_15b453ea_230223171646_1280x853.jpg",
  },
  /* ==========================================
     NUEVAS RUTAS ADICIONALES
     ========================================== */
  {
    id: "acropolis-atenas",
    nombre: "La Acrópolis",
    pais: "Grecia",
    coordenadas: [23.7257, 37.9715],
    descripcion:
      "Antigua ciudadela fortificada ubicada en una roca elevada que contiene los restos del Partenón y otros templos griegos clásicos.",
    imagen:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEJzl3OZKeEKVikEItojv1F-XFXtPVaaDFtT794Bm63LJQ5U84qff0yB-_JZ4SiBtYx5vi1g-eK2GRNSqg4qAgYfYXIct3OatuBGF3z8C27Skm6jjj6GKshEvmpO0AgaTwJbt13GCqV8SWN=s1360-w1360-h1020-rw",
  },
  {
    id: "alhambra-granada",
    nombre: "La Alhambra",
    pais: "España",
    coordenadas: [-3.5899, 37.176],
    descripcion:
      "Majestuoso complejo palaciego y fortaleza andalusí que representa la cumbre del arte islámico en Europa.",
    imagen:
      "https://alandalustours.es/wp-content/uploads/2025/05/Alhambra-de-noche_1-1024x683.jpg",
  },
  {
    id: "opera-sydney",
    nombre: "Ópera de Sydney",
    pais: "Australia",
    coordenadas: [151.2153, -33.8568],
    descripcion:
      "Una de las obras arquitectónicas más famosas del siglo XX, célebre por su diseño vanguardista con techos en forma de conchas marinas.",
    imagen:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHhpYqmRa4fEqgoDoQufY-ENtx5yc96UKgRe62xSvkQbQIyhaV7D9Hpzs5WR_LhCt2HcPLO9UwW7TLNqyi7OsK1FElDrt7xn0Doh0IITibRtc1wqERXqpsVweEa5w2z9sJMk99a=s1360-w1360-h1020-rw",
  },
  {
    id: "tombuctu-mali",
    nombre: "Tombuctú",
    pais: "Malí",
    coordenadas: [-3.0026, 16.7758],
    descripcion:
      "Histórico centro de comercio e intercambio intelectual en el desierto del Sahara, famoso por sus mezquitas y bibliotecas de barro.",
    imagen:
      "https://media.istockphoto.com/id/140380481/es/foto/mezquita-loam.jpg?s=612x612&w=0&k=20&c=YIdw8MX1FPtQXO6u-spulB7h5whOYRvAQiDrGiEUwUY=",
  },
  {
    id: "kiyomizu-dera",
    nombre: "Kiyomizu-dera",
    pais: "Japón",
    coordenadas: [135.785, 34.9948],
    descripcion:
      "Antiguo templo budista en Kioto, famoso por su enorme terraza de madera construida sin un solo clavo que ofrece hermosas vistas.",
    imagen:
      "https://assets.japantravel.com/photo/poi-17-212191/1440x960!/kyoto-kiyomizu-dera-212191.webp",
  },
  {
    id: "santa-sofia",
    nombre: "Santa Sofía",
    pais: "Turquía",
    coordenadas: [28.9802, 41.0085],
    descripcion:
      "Obra maestra de la arquitectura bizantina en Estambul que sirvió como catedral, mezquita y hoy asombra por su colosal cúpula.",
    imagen:
      "https://content-historia.nationalgeographic.com.es/medio/2023/07/17/captura-de-pantalla-2023-07-17-a-las-13-23-14_655e52ce_230717153707_1280x844.jpg",
  },
  {
    id: "plaza-roja",
    nombre: "Kremlin y Plaza Roja",
    pais: "Rusia",
    coordenadas: [37.6177, 55.752],
    descripcion:
      "Complejo fortificado e histórico en el corazón de Moscú que incluye la icónica e hiper-colorida Catedral de San Basilio.",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqAPAQR4twSnksq3hYxHjCoHBPEfv8niTHVDkqvtqMcVrDJqztUcgqcT8&s=10",
  },
  {
    id: "stonehenge",
    nombre: "Stonehenge",
    pais: "Reino Unido",
    coordenadas: [-1.8262, 51.1789],
    descripcion:
      "Misterioso monumento megalítico de la Edad del Bronce formado por enormes bloques de piedra dispuestos en círculos concéntricos.",
    imagen:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHQn4m5BBQdujMYlLM_yvTZiDeouoylghkaupwSVJlFn6l-0KhgWP0aBZs0IwcnjgCpTnKZ8v7Sn9jlh-U3CVRYj_r5QW2GMEiMi52ED5GxoSdRzP5morzLVJKGizmLyKRi35iu=s1360-w1360-h1020-rw",
  },
  {
    id: "lalibela",
    nombre: "Iglesias de Lalibela",
    pais: "Etiopía",
    coordenadas: [39.0475, 12.0319],
    descripcion:
      "Conjunto de once iglesias medievales talladas monolíticamente de arriba hacia abajo directamente en la roca viva subterránea.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lalibela%2C_san_giorgio%2C_esterno_24.jpg/1280px-Lalibela%2C_san_giorgio%2C_esterno_24.jpg",
  },
  {
    id: "borobudur",
    nombre: "Borobudur",
    pais: "Indonesia",
    coordenadas: [110.2038, -7.6079],
    descripcion:
      "El templo budista más grande del mundo, construido como una enorme pirámide escalonada con cientos de estupas decoradas.",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Pradaksina.jpg",
  },
  {
    id: "sigiriya",
    nombre: "Sigiriya",
    pais: "Sri Lanka",
    coordenadas: [80.7598, 7.957],
    descripcion:
      "Espectacular fortaleza y palacio en ruinas construido por el rey Kasyapa sobre la cima de una colosal roca de granito de 200 metros.",
    imagen:
      "https://www.yogawinetravel.com/wp-content/uploads/2016/05/Sigiriya-Lion-Rock-drone-photo-in-Sri-Lanka.jpg",
  },
  {
    id: "palacio-potala",
    nombre: "Palacio de Potala",
    pais: "Tíbet",
    coordenadas: [91.1172, 29.6577],
    descripcion:
      "Imponente complejo fortificado en la montaña que sirvió como la residencia invernal de los Dalái Lama en el techo del mundo.",
    imagen:
      "https://www.thechinajourney.com/wp-content/uploads/2024/11/Potala-Palace-against-a-mountainous-backdrop-Lhasa.webp",
  },
];
