import Images from './image.js'
const worksData =
    [
        {
            title: "Pong 2D",
            summary: "Un clásico en el que exploro conceptos principales como transformaciones, físicas, colisiones y textos UI.",
            text: "Primer proyecto para el curso del <a class='popLink' href='https://www.biosportal.com/'>Instituto Bios</a>. Pong es un juego ideal como iniciación a las traslaciones y físicas.<br> <br /> En este proyecto incluí un UI improvisado y para practicar más sobre transformaciones decidí incluir rotaciones en las paletas para agregar un poco de complejidad extra a lo exigido.",
            imagePaths: [Images.pong2Dmenujpg, Images.pong2Dproyectjpg, Images.pong2Dstartgif, Images.pong2Dendgif],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityClogo]
        },
        {
            title: "Arkanoid",
            summary: "Este proyecto es un nuevo reto para profundizar en los conocimientos de Unity. El objetivo de este proyecto es aprender a instanciar objetos.",
            text: "Este es mi segundo proyecto, muy similar a Pong pero con un giro de 90° en las mecánicas.<br/><br/> Arkanoid, también conocido como Breakout de Atari, propone el reto de instanciar objetos y el uso de prefabs como los ladrillos o los puntos que aparecen justo después de romper un ladrillo. <br><br/> El objetivo de este proyecto era generar un mapa de Arkanoid instanciándolo mediante código utilizando distintos tipos de prefabs de ladrillos y hacer que los mismos sean capaces de mostrar un puntaje al romperse.",
            imagePaths: [Images.arkanoid2Dgameplayjpg, Images.arkanoid2Dmenujpg, Images.arkanoid2Dcontrolsjpg, Images.arkanoid2Dwinjpg, Images.arkanoid2Dunityjpg, Images.arkanoid2Dplaygif, Images.arkanoid2Dcombogif],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityClogo]
        },
        {
            title: "Space Invaders",
            summary: 'Este es un proyecto ideal para practicar el uso de múltiples prefabs en un proyecto y cómo instanciarlos, además de ser el primer proyecto que cuenta con enemigos',
            text: "Como tercer proyecto Space Invaders, también conocido como Galaxian, es un juego ideal para profundizar en el uso de prefabs e instanciarlos. <br/><br/> Este proyecto tiene como objetivo crear un script muy simple haciendo de IA, dándole la capacidad al enemigo y al jefe final de moverse de un lado a otro en grupo, disparar y ganar velocidad con el tiempo",
            imagePaths: [
                Images.spaceInvaders2Dplay2jpg,
                Images.spaceInvaders2Dmenujpg,
                Images.spaceInvaders2Dunityjpg,
                Images.spaceInvaders2Dplay1jpg,
                Images.spaceInvaders2Dbossjpg,
                Images.spaceInvaders2Dbossfightgif,
                Images.spaceInvaders2Dstartgif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityClogo]
        },
        {
            title: "Juego de plataformas",
            summary: "Test independiente para aprender a crear físicas simples sin utilizar el motor de físicas, ayudado con raycasts y a su vez hacer una IA simple gracias a raycast",
            text: "Este proyecto personal tenía como objetivo desarrollar más habilidades, como raycast, animator, físicas con matemáticas.<br><br>Con raycast logré hacer una IA simple de enemigos capaz de detectar el vacío, cambiar de sentido en las plataformas y detectar al jugador.<br/><br/>Los enemigos y el jugador no utilizan el motor de físicas, en cambio hice mis propias físicas con gravedad, flotabilidad y detección de suelo",
            imagePaths: [
                Images.plataformas2Dstartjpg,
                Images.plataformas2Dunityjpg,
                Images.plataformas2Dplaygif,
                Images.plataformas2Dwhatergif,
                Images.plataformas2Dendgif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityClogo]
        },
        {
            title: "Pac-Man 2D",
            summary: "Mi último proyecto en Unity 2D es Pac-Man, todo un desafío tanto con el movimiento del personaje como con la inteligencia artificial de los fantasmas y su movimiento",
            text: 'Este fue mi proyecto final para el primer año de desarrollador de videojuegos en el <a class="popLink" href="https://www.biosportal.com/">Instituto Bios</a>.<br><br> El reto principal de este proyecto fue crear una inteligencia artificial capaz de llegar hasta el jugador en un laberinto. Para solucionarlo, creé un mapa lleno de triggers capaces de identificar en qué tipo de intersección se encontraba el jugador, ya sea pasillo, intersecciones en forma de "X", "L" o de "T". Con condiciones, fui capaz de hacer que el jugador solo pudiera cambiar su dirección en lugares donde el trigger se lo permitiera. Además, para mejorar la sensación del movimiento, se guarda el último input para doblar en el momento indicado, incluso si el input fue muy pronto.<br><br> Los fantasmas tienen distintos comportamientos, pero todos usan el mismo script que el jugador, modificado para que siempre traten de acercarse lo más posible a un punto de interés seleccionado por el código, ya sea el jugador, delante del jugador, puntos aleatorios o alejarse del jugador.',
            imagePaths: [
                Images.pacman2Dmenujpg,
                Images.pacman2Dplayjpg,
                Images.pacman2Dscenejpg,
                Images.pacman2Dunityjpg,
                Images.pacman2DEatAndLosegif,
                Images.pacman2Dgameplaygif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityClogo]

        }
        ,
        {
            title: "Pong 3D",
            summary: "Este primer proyecto 3D, nuevamente Pong es ideal por su simpleza para familiarizarse con el entorno 3D, además de que uso por primera vez mis conocimientos en modelado",
            text: "Pong en 3D es el juego elegido para este proyecto tanto por sus simples mecánicas y lo fácil de representar en 3D con modelos primitivos, aun así me tomé la libertad de aprovechar mis conocimientos utilizando Blender para crear unos modelos 3D que le den un buen aspecto.<br/><br/> En cuanto al código, este juego a diferencia de la versión 2D lo hice completamente sin motor de físicas. Todos los rebotes y movimientos están scripteados, llegando a un nivel extra de detalle agregando inercia para que el juego no sea tan fácil y dé una sensación nueva",
            imagePaths: [
                Images.pong3Dpong3djpg,
                Images.pong3Dmenujpg,
                Images.pong3Dinspectorjpg,
                Images.pong3Dgameplaygif,
            ],
            state: "false",
            gitPath: "null",
            workTypeLogo: [Images.UnityCB]
        }
        ,
        {
            title: "Test Personal juego Móvil",
            summary: "Proyecto independiente para probar el desarrollo móvil en Unity, es un juego estilo Flappy Bird cambiando el aleteo por movimiento vertical.",
            text: "Similar a Flappy Bird, este es un proyecto independiente para probar el desarrollo móvil en Unity y sus herramientas. Es un proyecto simple que copia la mecánica de Flappy Bird, reemplazando los saltos por un movimiento vertical muy limitado pensado para funcionar en una interfaz táctil, con el objetivo de poner a prueba el desarrollo en plataformas móviles.",
            imagePaths: [
                Images.testMovilplay,
                Images.testMovilinspector,
                Images.testMovilgameplayGif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityClogo]
        }
        ,
        {
            title: "Fruit Ninja",
            summary: "Siguiendo con la línea de desarrollo móvil, este juego es útil para profundizar más en el desarrollo, especialmente en shaders, partículas y line renderer.",
            text: "Fruit Ninja fue el proyecto elegido para aplicar conocimientos previos de desarrollo móvil. <br/><br/> Además de practicar el desarrollo móvil, se tuvo en cuenta la implementación de nuevos componentes para los GameObjects: shaders capaces de generar efectos y texturas mejoradas en las superficies de los objetos, partículas para dar una sensación más completa al juego, y por último el componente line renderer, que crea un efecto de corte que proporciona feedback al usuario y mejora la interacción visual.",
            imagePaths: [
                Images.fruitninjagame,
                Images.fruitninjamenu2,
                Images.fruitninjainspector,
                Images.fruitninjagameplayGIF,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityCB]

        }
        ,
        {
            title: "Juego de bombardero",
            summary: "En este proyecto se busca mejorar el entendimiento de las rotaciones en un entorno 3D.",
            text: "Un proyecto inspirado en un avión bombardero destruyendo torretas fue el próximo reto, inicialmente más sencillo pero decidí darle una dificultad extra.<br/><br/> La propuesta inicial trataba de un juego mucho más simple en el que tenía que avanzar por un espacio lineal esquivando horizontalmente disparos de torretas que apuntaban hacia el jugador, para aprender cómo un objeto puede apuntar hacia otro. Dado este ejercicio, decidí expandir el espacio y darle la capacidad al avión de volar en todas las direcciones horizontales y simular con rotaciones las inclinaciones más realistas de un avión al volar. Para este juego decidí hacer modelos 3D muy simples que cumplieran con una estética sencilla, enfocándome más en la parte del código del proyecto.",
            imagePaths: [
                Images.bombarderomenu,
                Images.bombarderoinspector,
                Images.bombarderoinspector2,
                Images.bombarderoplay,
                Images.bombarderolose,
                Images.bombarderogameplaywinGIF,
                Images.bombarderogameplayloseGIF,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityCB]
        }
        ,
        {
            title: "Survival & build",
            summary: "Proyecto completamente enfocado en el trabajo en equipo, y con una extensa fecha de entrega.",
            text: "Juego realizado entre 2 personas, decidimos dividirnos en 2 espacios de trabajo: uno se encargaría del UI de la escena de menú y otro del juego en sí. Yo tomé la parte del juego y los modelos 3D.<br/><br/> Como objetivo teníamos crear un pequeño juego de supervivencia que incluyera al menos un tipo de enemigo, lugares para obtener recursos y un sistema de construcción y crafteo. Siendo mi género de juegos favorito, decidí poner mucho empeño en el modelado 3D. Diseñé un mapa basado en tiles completamente interconectables para generar un mapa a mi gusto desde el editor de Unity y también para poder generar mapas de forma procedural en el futuro. Además, desarrollé un personaje simple con animaciones para dar vida a funciones como caminar, talar, picar, caer y atacar.<br/><br/> A pesar del tiempo reducido y la magnitud del proyecto, logramos una demo muy satisfactoria, cumpliendo con cada objetivo del juego y con un sistema de movimiento e interacción cómodo basado en el uso de Raycast desde la cámara.",
            imagePaths: [
                Images.buildgame,
                Images.buildinspector,
                Images.buildmenu,
                Images.buildoptins,
                Images.buildcarrywood,
                Images.buildstonemine,
                Images.buildslime,
                Images.buildbuilding,
                Images.buildmenugif,
                Images.buildminegif,
                Images.buildbuildgif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityCB]
        }
        ,
        {
            title: "Pool Table",
            summary: "El juego de pool fue un reto lógico con el objetivo de basarse en las reglas del pool.",
            text: "Concreto y simple, el pool es un juego que debe tener en cuenta muchos estados, como cuando un jugador comete una falta y beneficia al oponente, qué bola se asigna a cada jugador al meter la primera bola, en qué lugar colocó un jugador la última bola para asignar la bola 8 y cómo detectar quién gana. Además, algunos detalles visuales como que el palo sea capaz de apuntar a la bola desde cualquier ángulo y el uso del componente Line Renderer para proyectar una trayectoria y seleccionar la potencia de tiro con la misma.<br/><br/> Modelos creados con Blender.",
            imagePaths: [
                Images.poolpool,
                Images.poolinspector,
                Images.poolpoolgamegif,
                Images.poolpausegif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityCB]
        }
        ,
        {
            title: "Pacman 3D",
            summary: "Último proyecto en BIOS, Pacman 3D con 3 niveles, IA mejorada y estética hecha en Blender.",
            text: "Aprendido con los anteriores ejemplos, este es mi último proyecto.",
            imagePaths: [
                Images.pacmangame,
                Images.pacmaninspector,
                Images.pacmanmenu,
                Images.pacmanmenugif,
                Images.pacmanlevel1gif,
                Images.pacmanlevel2gif,
                Images.pacmanlevel3gif,
            ],
            state: false,
            gitPath: "null",
            workTypeLogo: [Images.UnityCB]
        }
    ];

export default worksData;