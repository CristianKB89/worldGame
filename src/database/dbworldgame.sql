-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: dbworldgame
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `genre_id` int(11) NOT NULL,
  `img_card` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rating_age` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `xbox` int(11) NOT NULL,
  `pc` int(11) NOT NULL,
  `playstation` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `games_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Fifa 22',249.999,60,'Con la tecnología de Football™, EA SPORTS™ FIFA 22 acerca el juego aún más a la realidad con avances fundamentales en el juego y una nueva temporada de innovaciones en todos los modos.',5,'fifa22.jpg',0,'2022-06-24 16:14:45','2022-05-19 16:39:45',NULL,1,1,1),(2,'Grand Theft Auto V',159.99,50,'Cuando un joven estafador, un ladrón de bancos jubilado y un terrorífico psicópata se entremeten con los elementos más temerosos y dementes del submundo criminal, el gobierno de EE. UU. y la industria de entretenimiento, deben llevar a cabo una serie de atracos peligrosos para sobrevivir en una ciudad despiadada en la que no pueden confiar en nadie, y mucho menos unos en los otros.',1,'gtaV.jpg',17,'2022-06-24 16:15:00','2022-05-19 16:46:02',NULL,1,1,1),(3,'Batman: Arkham Collection',214.9,75,'Batman: Arkham Collection te trae las versiones definitivas de la trilogía de juegos Arkham de Rocksteady, incluyendo todo el contenido poslanzamiento, en una colección completa.',1,'batman.jpg',17,'2022-06-24 16:15:07','2022-05-19 16:46:58',NULL,1,1,1),(4,'Little Nightmares',59.4,0,'¡Sumérgete en Little Nightmares, una historia oscura y extravagante que te obligará a enfrentarte a tus miedos infantiles! Ayuda a Six a escapar de Las Fauces, un enorme y misterioso navío habitado por almas corruptas en busca de su siguiente comida. A medida que avanzas en tu aventura, explorarás una casita de muñecas espeluznante que actúa como prisión de la que tendrás que escapar y un patio de juegos repleto de secretos por descubrir. ¡Reconecta con tu niño interior para dar rienda suelta a la imaginación y encontrar la salida!',1,'littleNightmares.jpg',10,'2022-06-24 16:15:17','2022-05-19 16:47:08',NULL,1,1,1),(5,'Grand Theft Auto Online',71.149,40,'Incluye Grand Theft Auto Online. Consigue una rebaja del 50% en GTA Online para Xbox Series X|S hasta el 14 de junio de 2022. El modo Historia de Grand Theft Auto V se puede comprar por separado.\nContinúa tu aventura en Xbox Series X|S y transfiere tus progresos del modo Historia de GTA V y tus personajes y progresos de GTA Online mediante una migración única.',1,'gtaOnline.jpg',17,'2022-06-24 16:15:27','2022-05-19 16:47:17',NULL,1,1,1),(6,'Metro Exodus Gold Edition',92.621,70,'Metro Exodus es un juego de disparos en primera persona centrado en la narrativa y desarrollado por 4A Games que combina el combate letal y el sigilo con la exploración, el terror y la supervivencia en uno de los mundos más inmersivos de la historia de los juegos.\nHuye de las ruinas devastadas del metro de Moscú y embárcate en un viaje épico por todo el continente en la Rusia postapocalíptica. Es la mayor aventura de Metro hasta ahora.\nExplora las estepas rusas en niveles no lineales enormes y sigue una narrativa apasionante inspirada en las novelas de Dmitry Glukhovsky que abarca un año entero desde primavera, verano y otoño hasta el pleno invierno nuclear.',4,'metroExodus.jpg',17,'2022-06-24 16:15:34','2022-05-19 16:47:33',NULL,1,1,1),(7,'ELDEN RING',207,0,'EL NUEVO RPG DE ACCIÓN DE FANTASÍA.\nLevántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.',2,'eldenRing.jpg',17,'2022-06-24 16:15:40','2022-05-19 16:47:40',NULL,1,1,1),(8,'Cuphead',72.47,0,'Cuphead es un juego clásico de acción de disparos muy enfocado en batallas de jefes. Inspirado en las caricaturas de 1930, las imágenes y el audio se crearon de forma minuciosa con las mismas técnicas de la era, esto es, animación tradicional a mano, fondos de marca de agua y grabaciones originales de jazz.',7,'cupHead.jpg',10,'2022-06-24 16:15:48','2022-05-19 16:47:49',NULL,1,1,1),(9,'Cyberpunk 2077',219.9,50,'Cyberpunk 2077 es un RPG de 1 de mundo abierto ambientado en la megalópolis de Night City, donde juegas como un mercenario ciberpunk envuelto en una 3 por la supervivencia. ¡Explora un futuro oscuro, ahora actualizado con la próxima generación en mente y con contenido adicional gratuito!',2,'ciberPunk2077.jpg',17,'2022-06-24 16:15:55','2022-05-19 16:47:57',NULL,1,1,1),(10,'RESIDENT EVIL 2',156.9,0,'Publicado originalmente en 1998, Resident Evil 2, uno de los juegos más icónicos de todos los tiempos, regresa completamente reinventado para las consolas de nueva generación.',1,'residentEvil2.jpg',17,'2022-06-24 16:16:05','2022-05-19 16:48:14',NULL,1,1,1),(11,'Mortal Kombat XL',84.9,20,'¡Uno de los títulos más vendidos de 2015 se hace XL! Kompleta la experiencia Mortal Kombat X con contenidos nuevos y material ya existente. Incluye el juego principal y nuevos personajes para llevar, como Alien, Leatherface, Triborg y Bo Rai Cho. Entre los personajes que ya se habían lanzado con anterioridad tenemos a Predator, Jason Voorhees, Tremor, Tanya y Goro. Incluye también el nuevo pack de aspectos, llamado Apocalipsis.',3,'mortalKombat11.jpg',17,'2022-06-24 16:16:12','2022-05-19 16:48:21',NULL,1,1,1),(12,'Resident Evil Village',259.3,0,'etomando donde acabó Resident Evil 7 biohazard, Resident Evil Village es la octava entrega clave de la serie insignia Resident Evil. El juego muestra a Ethan y Mia Winters viviendo felices y juntos después de haber dejado atrás sus pesadillas compartidas en la plantación de Baker... hasta que su vida da un vuelco y Ethan se convierte en el centro de una nueva pesadilla.',6,'village.jpg',17,'2022-06-24 16:16:19','2022-05-19 16:48:28',NULL,1,1,1),(13,'Halo Infinite (Campaña)',259.9,0,'Cuando se pierde toda esperanza y el destino de la humanidad pende de un hilo, el Jefe Maestro está listo para enfrentarse al enemigo más despiadado que jamás haya enfrentado. Ponte la armadura del mayor héroe de la humanidad para disfrutar de una aventura épica y explorar la escala masiva del anillo Halo.',4,'haloInfiniteC.jpg',10,'2022-06-24 16:16:25','2022-05-19 16:48:37',NULL,1,1,0),(14,'Halo Infinite Multijugador',0,0,'Halo Infinite ofrece una experiencia increíble en Xbox One y la nueva familia de consolas, además de en PC, con impresionantes gráficos 4K y juego multiplataforma de primera calidad. Además, en Xbox Series X y PC compatibles, disfrutarás de características mejoradas, como una resolución de hasta 120 FPS y tiempos de carga muy reducidos para una jugabilidad fluida que marcará el comienzo de la próxima generación de juegos.',4,'haloInfiniteMulti.jpg',10,'2022-06-24 16:16:32','2022-05-19 16:48:49',NULL,1,1,0),(15,'TEKKEN 7 - edición originales',299.9,0,'La edición originales incluye:\n• TEKKEN 7 (juego completo)\n• DLC13: datos de marco (nueva función)\n• 12 paquetes de personajes adicionales\n- DLC adicional: Eliza\n- DLC4: Anna Williams\n- DLC5: Lei Wulong\n- DLC6: Craig Marduk\n- DLC7: Armor King\n- DLC8: Julia Chang\n- DLC10: Zafina\n- DLC11: Ganryu\n- DLC12: Leroy Smith\n- DLC14: Fahkumram\n- DLC16: Kunimitsu\n- DLC18: Lidia Sobieska\nLAS MEJORES PELEAS SON PERSONALES',3,'tekken7.jpg',10,'2022-06-24 16:16:39','2022-05-19 16:48:59',NULL,1,1,1),(16,'Riders Republic™',120.9,0,'¡Adéntrate en el masivo campo de juegos multijugador de Riders Republic™! Toma tu moto, tus esquíes, tu tabla de snowboard o tu wingsuit y explora un paraíso deportivo de mundo abierto donde tú haces -o rompes- las reglas.',5,'riderRepublic.jpg',10,'2022-06-24 16:16:44','2022-05-19 16:49:07',NULL,1,1,1),(17,'LEGO® Star Wars™',269.999,0,'¡Juega en los escenarios de las nueve películas de la saga de Star Wars™ en este nuevo videojuego de LEGO® único en su especie! Atraviesa la galaxia para descubrir los lugares más legendarios de la saga con todos tus personajes favoritos. ¡Una galaxia muy, muy lejana nunca había sido así de entretenida!',1,'starWarsLego.jpg',10,'2022-06-24 16:16:49','2022-05-19 16:49:16',NULL,1,1,1),(18,'Far Cry 6',199.9,100,'Te damos la bienvenida a Yara, un paraíso tropical congelado en el tiempo. Far Cry® 6 arroja a los jugadores al mundo rebosante de adrenalina de una revolución guerrillera actual. Como dictador de Yara, Antón Castillo está decidido a recuperar la antigua gloria de su nación por todos los medios junto a su hijo, Diego, quien siempre está obedientemente a su lado. Únete a la guerrilla y quema su régimen hasta los cimientos.',4,'farCry6.jpg',17,'2022-06-24 16:16:54','2022-05-19 16:49:24',NULL,1,1,1),(19,'Microsoft Flight Simulator',249.9,0,'La edición Game of the Year (GOTY) Estándar de Microsoft Flight Simulator hace honor a todos los comentarios positivos, las críticas y los premios obtenidos, pero también es un Gracias a nuestros seguidores (tanto a los más recientes como a los más veteranos) que han hecho que este título se convierta en un fenómeno. La edición Game of the Year Estándar de Microsoft Flight Simulator incluye 25 aeronaves de gran detalle con modelos de vuelo exclusivos y 38 aeropuertos creados a mano.',5,'flightSimulator.jpg',0,'2022-06-28 03:11:10','2022-05-19 16:49:31',NULL,0,1,0),(20,'Battlefield™ 2042',234.9,0,'Battlefield™ 2042 es un juego de disparos en primera persona que marca el regreso de la icónica guerra total de la franquicia. Adáptate en un mundo del futuro cercano transformado por el desorden y vence en campos de batalla cambiantes con la ayuda de tu escuadrón y un arsenal innovador.',4,'bf2042.jpg',17,'2022-06-28 03:11:18','2022-05-19 16:49:40',NULL,1,1,1),(21,'Skyrim Anniversary Edition',188.9,0,'Tras ganar más de 200 premios Game of the Year, The Elder Scrolls V: Skyrim celebra 10 años de aventuras con detalles impresionantes. La Anniversary Edition incluye una década de contenido: el aclamado juego principal y los complementos de la Skyrim Special Edition, además de contenido preexistente y nuevo de Creation Club que incluye misiones, mazmorras, jefes, armas, hechizos y mucho más.',2,'skyrim.jpg',17,'2022-06-28 03:11:35','2022-05-19 16:49:49',NULL,1,1,1),(22,'Kimetsu No Yaiba',117.9,0,'En el modo historia, recorre el camino de Tanjirō Kamado, cuya familia fue asesinada y su hermana transformada en un demonio. ¡Vive la historia representada en el anime Guardianes de la Noche: Kimetsu no Yaiba mientras Tanjirō 3 para restaurar la humanidad de Nezuko y se enfrenta a la amenaza demoníaca!',1,'kimetsu.jpg',10,'2022-06-28 03:11:54','2022-05-19 16:49:56',NULL,1,1,1),(23,'Forza Horizon 5',249.9,100,'¡La aventura definitiva de Horizon te está esperando! Explora los paisajes vivos y dinámicos del mundo abierto de México divirtiéndote sin límites y conduciendo cientos de los mejores autos del mundo. La edición Premium incluye dos expansiones, la membresía VIP, el pase de autos y el paquete de bienvenida.',5,'forza5.jpg',0,'2022-06-28 03:41:26','2022-05-19 16:50:04',NULL,1,1,0),(24,'Assassin\'s Creed® Valhalla Complete Edition',484.9,0,'¡Incluye el juego base, el pase de temporada, el paquete Ultimate Cosmetics y la expansión El inicio del Ragnarök!\nEn Assassin\'s Creed® Valhalla encarnas a Eivor, un feroz guerrero vikingo criado con las anécdotas de batalla y gloria. Explora un misterioso y hermoso mundo abierto establecido en la brutalidad de la edad oscura en Inglaterra.',1,'ACvalhalla.jpg',17,'2022-06-28 03:42:02','2022-05-19 16:50:12',NULL,1,1,1),(25,'Fortnite',0,0,'La Isla del Capítulo 2 se ha puesto del revés... literalmente. ¡Adéntrate en la nueva isla y explora todos los rincones de un mundo desconocido en el Capítulo 3 - Temporada 1 de Fortnite: De vuelta!',4,'fornite.jpg',10,'2022-06-28 03:42:10','2022-05-19 16:50:20',NULL,1,1,1),(26,'Apex Legends',0,0,'Apex Legends es un juego de disparos de héroes gratuito en el que competidores legendarios 3n por la gloria, la fama y la fortuna en los límites de la Frontera. ¡Juega en partidas clásicas de Battle Royale de 60 personas, batallas de Arenas 3v3 y modos de tiempo limitado y adquisiciones!',4,'apex.jpg',10,'2022-06-28 03:42:20','2022-05-19 16:50:29',NULL,1,1,1),(27,'Gears 5',259.9,0,'La famosa campaña de Gears 5 y el modo multijugador renovado de una de las sagas más aclamadas de los videojuegos, llegan completamente Optimizados para Xbox Series X y Series S.',4,'gears5.jpg',17,'2022-06-28 03:43:49','2022-05-19 16:50:40',NULL,1,1,0),(28,'Destiny 2: La Reina Bruja',243.9,0,'Hermana de las Formas, Rompedora de Espadas, Savathûn. La Reina Bruja aguarda a quienes buscan comprender su inexplicable control de la Luz. Sus soldados marchan con un nuevo propósito, envalentonados por un poder que nunca antes tuvieron. Ven, Guardián. Entra en su Mundo trono, experimenta la mejor campaña hasta la fecha y sobrevive a la verdad.',4,'destiny2.jpg',17,'2022-06-28 03:43:57','2022-05-19 16:50:47',NULL,1,1,1),(29,'Minecraft',60.9,0,'Minecraft es un juego en el que se colocan bloques y se ofrecen aventuras continuas. Construye lo que se te ocurra con recursos ilimitados en modo Creativo o disfruta de grandes expediciones en modo Supervivencia, viajando por tierras misteriosas y en las profundidades de tus propios mundos infinitos. ¿Te esconderás de los monstruos o crearás herramientas, armadura y armas para 3r contra ellos? ¡No hace falta que lo hagas solo! Comparte la aventura con amigos en modo multijugador de pantalla dividida en línea.',1,'minecraft.jpg',0,'2022-06-28 03:44:09','2022-05-19 16:50:55',NULL,1,1,1),(30,'DRAGON BALL FighterZ',174.9,5,'DRAGON BALL FighterZ trae un sinfín de espectaculares peleas con sus 3dores todopoderosos. Al asociarse con Arc System Works, DRAGON BALL FighterZ maximiza los gráficos de anime de alta gama y brinda un juego de 3 fácil de aprender pero difícil de dominar.',3,'dbzfighterZ.jpg',10,'2022-06-28 03:44:17','2022-05-19 16:51:04',NULL,1,1,1),(31,'Star Wars Jedi: Fallen Order™',179.9,0,'Una aventura que abarca toda la galaxia te espera en Star Wars Jedi: Fallen Order™, un nuevo título de acción-aventura en tercera persona de Respawn Entertainment. Este juego narrativo para un solo jugador te pone en el papel de un Jedi Padawan que se escapó de la purga de la Orden 66 tras los sucesos de Star Wars™: Episodio III - Revenge of the Sith™. En una búsqueda para reconstruir la Orden de Jedi, debes recoger las piezas de tu pasado destrozado para completar tu entrenamiento, desarrollar nuevas y poderosas habilidades de la Fuerza y dominar el arte del icónico sable láser, todo ello mientras te mantienes un paso por delante del Imperio y de sus mortíferos Inquisidores.',1,'starWarsJedi.jpg',10,'2022-06-28 03:44:25','2022-05-19 16:51:11',NULL,1,1,1),(32,'Red Dead Redemption 2',239.9,0,'Estados Unidos, 1899. Después de que un atraco en el pueblo de Blackwater sale muy mal, Arthur Morgan y la banda Van der Linde se ven obligados a huirse. Con los agentes federales y los cazarrecompensas pisándoles los talones, la banda debe atracar, robar y 3r para sobrevivir.',1,'redDead2.jpg',17,'2022-06-28 03:44:33','2022-05-19 16:51:20',NULL,1,1,1),(33,'Crash Bandicoot™ N. Sane Trilogy',146.9,0,'¡Vuelve Crash Bandicoot™, tu marsupial favorito! Mejorado, más alocado y listo para bailar con la colección de juegos La trilogía. Ahora puedes disfrutar de Crash Bandicoot como nunca antes. Gira, salta, rompe, enfréntate a los épicos desafíos y vive las aventuras de los tres juegos con los que empezó todo: Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back y Crash Bandicoot™ 3: Warped. ¡Vuelve a vivir tus momentos favoritos de Crash con gráficos remasterizados y prepárate para jugar con mucha más energía!',7,'crash.jpg',10,'2022-06-28 03:44:41','2022-05-19 16:51:29',NULL,1,1,1),(34,'BioShock: The Collection',200,75,'Disfruta de los increíbles mundos e historias de la saga de BioShock con BioShock: The Collection. Recorre las ciudades de Rapture y Columbia con BioShock Remastered, BioShock 2 Remastered y BioShock Infinite: The Complete Edition, que incluyen todo el contenido adicional para un jugador. 3 por tu vida y derrota a tus enemigos, ya sea en el fondo del mar o más allá de las nubes.',4,'bioshock.jpg',17,'2022-06-28 03:44:48','2022-05-19 16:51:39',NULL,1,1,1),(35,'Dying Light 2 Stay Human',182.9,0,'Hace más de veinte años, nos enfrentamos al virus en Harran... Y perdimos. Y ahora se avecina una nueva derrota. La Ciudad, uno de los últimos grandes asentamientos de la humanidad, está siendo destruida por las 3s internas. La civilización ha vuelto a la Edad Oscura. Pero queda esperanza.',2,'dyingLight2.jpg',17,'2022-06-28 03:45:02','2022-05-19 16:51:47',NULL,1,1,1),(36,'NieR Replicant ver.1.22474487139...',214.9,0,'NieR Replicant ver.1.22474487139... es una versión actualizada de NieR Replicant, lanzado originalmente en Japón en abril de 2010.\nDescubre una precuela única para el aplaudido NieR:Automata. ¡Con esta modernización disfrutarás de unos gráficos renovados, una historia fascinante y muchas cosas más!',2,'nier.jpg',17,'2022-06-28 03:45:10','2022-05-19 16:51:57',NULL,1,1,1),(37,'Halo: The Master Chief Collection',129.899,0,'El icónico viaje del Jefe Maestro incluye seis juegos recopilados en una única experiencia integrada que está optimizada tanto para PC como para Xbox Series X|S. No importa que seas un fan desde los inicios de la saga o que conozcas al Spartan 117 por primera vez: The Master Chief Collection es la experiencia de juego de Halo definitiva.',4,'haloTMC.jpg',17,'2022-06-28 03:45:24','2022-05-19 16:52:05',NULL,1,1,0),(38,'Mafia Trilogy',239.9,50,'Mafia: Definitive Edition. Lost Haven, Illinois. Años 30.\nProspera como gánster durante la Ley Seca en esta reinvención del clásico. Tras un inesperado encontronazo con la mafia, el taxista Tommy Angelo entra a regañadientes en el mundo del crimen organizado. A pesar de su reticencia inicial, las ventajas de unirse a la familia Salieri son demasiadas como para dejarlas pasar.',1,'mafia.jpg',17,'2022-06-28 03:45:33','2022-05-19 16:52:13',NULL,1,1,1),(39,'Little Nightmares II',95,0,'Regresa a un cautivante mundo de terror en Little Nightmares II, un juego de aventura y suspenso en donde te pondrás en los zapatos de Mono, un niño atrapado en un mundo distorsionado por la ruidosa señal de una lejana torre de transmisión.',1,'littleNightmares2.jpg',10,'2022-06-28 03:45:46','2022-05-19 16:52:21',NULL,1,1,1),(40,'Control Ultimate Edition',129.9,20,'Una presencia corrupta ha invadido la Agencia Federal de Control... Solo tú puedes detenerla. El mundo es tu arma en esta 3 épica para aniquilar a un enemigo amenazante en entornos profundos e impredecibles. La contención ha fallado, la humanidad está en juego. ¿Retomarás el control?',1,'control.jpg',17,'2022-06-28 03:45:54','2022-05-19 16:52:31',NULL,1,1,1),(41,'Devil May Cry 5 Special Edition',171.2,50,'¡¡DEVIL MAY CRY HA VUELTO, COLEGA!! Este legendario juego de acción espectacular regresa mejor que nunca en la versión definitiva de este galardonado superéxito.',1,'dmc5.jpg',17,'2022-06-28 03:46:03','2022-05-19 16:52:39',NULL,1,1,1),(42,'ELDEN RING Edición Deluxe',274,0,'EL NUEVO RPG DE ACCIÓN DE FANTASÍA.\nLevántate, Tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.',2,'eldenRingDelux.jpg',17,'2022-06-28 03:46:13','2022-05-19 16:52:47',NULL,1,1,1),(43,'Sekiro™: Shadows Die Twice',249.9,0,'En Sekiro™: Shadows Die Twice encarnas al \'lobo manco\', un guerrero desfigurado y caído en desgracia que ha sido rescatado al borde de la muerte. Tras jurar proteger a un joven señor descendiente de un antiguo linaje, te conviertes en el objetivo de despiadados enemigos, entre ellos el peligroso clan Ashina. Cuando el joven señor sea capturado, nada te detendrá en tu peligrosa aventura por restituir tu honor, ni siquiera la muerte.',1,'sekiro.jpg',17,'2022-06-28 03:46:25','2022-05-19 16:52:55',NULL,1,1,1),(44,'Mortal Kombat 11',249.9,75,'Toma el control de los protectores de Earthrealm en dos campañas de historias aclamadas y que marcan el paso del tiempo mientras se apresuran para evitar que Kronika vuelva atrás el tiempo y reinicie la historia. Presenta la lista completa de 37 3dores, incluidos Rain, Mileena y Rambo.',3,'mk11.jpg',17,'2022-06-28 03:46:35','2022-05-19 16:53:03',NULL,1,1,1),(45,'Sniper Elite 4',229.9,0,'Ponte en la piel de un francotirador en el 4 de la Segunda Guerra Mundial más realista que jamás se haya creado. Experimenta una gran libertad, combates tácticos en tercera persona y realiza épicos disparos a larga distancia en niveles gigantescos, en los que tendrás que librar del yugo del fascismo a una Italia en guerra.',4,'sniperElite4.jpg',17,'2022-06-28 03:46:47','2022-05-19 16:53:10',NULL,1,1,1),(46,'Pack triple Assassin\'s Creed: Black Flag, Unity, Syndicate',249.9,0,'Assassin\'s Creed 4 Black Flag:\nEl Caribe, 1715. Legendarios piratas son amos del mar y la tierra, saqueando fortunas y poniendo de rodillas a los imperios. Entre estos forajidos se encuentra Edward Kenway, un temerario y joven capitán que se gana el respeto de los piratas, pero cuyo apetito de oro y gloria pueden destruir todo cuanto han construido.\n\nAssassin\'s Creed Unity:\nParís, 1789. Durante siglos, Francia ha sido gobernada por una élite privilegiada. Ya no más. Este día, el pueblo de París se ha levantado en armas contra la tiranía. Ahora, en medio de una de las revoluciones más caóticas y brutales, el destino de una nación pende del borde de la espada de un asesino.\n\n Assassin\'s Creed Syndicate:\nLondres, 1868. La Revolución Industrial llena los bolsillos de la élite mientras las clases obreras 3n por sobrevivir, hasta que un par de asesinos emergen del bajo mundo en su ayuda.',1,'acTriplePack.jpg',17,'2022-06-28 03:46:57','2022-05-19 16:53:18',NULL,1,1,1),(47,'The Elder Scrolls Online',49.9,0,'Bienvenido a High Isle, una parte de Tamriel nunca antes vista en los juegos de Elder Scrolls. Explora el idílico enclave oceánico de los bretones y la sede de una cultura caballeresca mientras te enfrentas a las fuerzas ruinosas del Señor Ascendente, que conspiran para sumir a Tamriel en un conflicto interminable.',2,'tesOnline.jpg',17,'2022-06-28 03:47:06','2022-05-19 16:53:36',NULL,1,1,1),(48,'Just Cause 4',179.9,0,'El agente rebelde Rico Rodriguez viaja a Solís, un enorme mundo sudamericano de conflictos, opresión y condiciones climáticas extremas. Ponte tu traje, equipa tu rezón personalizable y prepárate para estruendos.',1,'justCause4.jpg',17,'2022-06-28 03:47:18','2022-05-19 16:53:43',NULL,1,1,1),(49,'Farming Simulator 22',182.9,0,'¡Ponte en la piel de un granjero de hoy en día! La agricultura, la silvicultura y la ganadería te ofrecerán una gran variedad de actividades mientras te enfrentas al desafío de las cuatro estaciones, especialmente el invierno. Construye una granja a tu gusto y amplía las operaciones agrícolas con cadenas de producción. ¡Levanta tu propio imperio agrícola! Dirige tu granja incluso con tus amigos y disfrutad juntos del modo multijugador multiplataforma.',5,'farmingSimulator.jpg',0,'2022-06-28 03:47:27','2022-05-19 16:53:52',NULL,0,1,0),(50,'Hades',90,0,'Como el príncipe inmortal del Inframundo, tendrás a tu disposición los poderes y las armas míticas del Olimpo para liberarte de las garras del mismísimo dios de los muertos, al tiempo que te vas haciendo más fuerte y descubres más piezas de la historia con cada intento de fuga.',1,'hades.jpg',10,'2022-06-28 03:47:34','2022-05-19 16:54:01',NULL,1,1,1);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Acción y aventura'),(2,'Juegos de rol'),(3,'Lucha'),(4,'Shooter'),(5,'Deportes'),(6,'Survival Horror'),(7,'Plataformas');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `library`
--

DROP TABLE IF EXISTS `library`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `library` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `game_id` (`game_id`),
  CONSTRAINT `library_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `library_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `library`
--

LOCK TABLES `library` WRITE;
/*!40000 ALTER TABLE `library` DISABLE KEYS */;
INSERT INTO `library` VALUES (1,11,4),(6,11,3),(7,11,8),(8,11,16),(9,11,11),(11,11,41),(12,11,9),(13,16,1),(14,16,29),(15,16,25),(16,16,49),(17,17,12),(18,17,22),(19,17,37),(20,17,30),(21,17,32);
/*!40000 ALTER TABLE `library` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `publications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publications`
--

LOCK TABLES `publications` WRITE;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
INSERT INTO `publications` VALUES (12,'25','Todo un crack!!!!!! :D','1656454832437.jpg',16,'2022-06-28 22:20:48','2022-06-19 22:20:32',NULL),(13,'1','Aguante esta playList con noche de fifita!','1656455023696.JPG',17,'2022-06-28 22:23:43','2022-06-24 22:23:43',NULL),(14,'26','Tarde de apex en vez de proyecto ;)','1656455110500.jpg',11,'2022-06-28 22:25:10','2022-06-27 22:25:10',NULL),(15,'14','@!#!#@!@#!#@!#!#@!#@!!!!!','1656455303990.jpg',11,'2022-06-28 22:28:23','2022-06-28 22:28:23',NULL);
/*!40000 ALTER TABLE `publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shoppingcart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `game_id` (`game_id`),
  CONSTRAINT `shoppingcart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shoppingcart_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES (16,16,1,'2022-06-28 22:30:56','2022-06-28 22:30:56','2022-06-28 22:31:20'),(17,16,25,'2022-06-28 22:31:04','2022-06-28 22:31:04','2022-06-28 22:31:20'),(18,16,29,'2022-06-28 22:31:12','2022-06-28 22:31:12','2022-06-28 22:31:20'),(19,16,49,'2022-06-28 22:31:18','2022-06-28 22:31:18','2022-06-28 22:31:20'),(20,17,12,'2022-06-28 22:31:45','2022-06-28 22:31:45','2022-06-28 22:33:29'),(21,17,22,'2022-06-28 22:31:52','2022-06-28 22:31:52','2022-06-28 22:33:29'),(22,17,37,'2022-06-28 22:32:01','2022-06-28 22:32:01','2022-06-28 22:33:29'),(23,17,30,'2022-06-28 22:32:07','2022-06-28 22:32:07','2022-06-28 22:33:29'),(24,17,32,'2022-06-28 22:32:13','2022-06-28 22:32:13','2022-06-28 22:33:29'),(25,17,17,'2022-06-28 22:32:17','2022-06-28 22:32:17','2022-06-28 22:33:27'),(26,17,46,'2022-06-28 22:32:22','2022-06-28 22:32:22','2022-06-28 22:33:25'),(27,17,5,'2022-06-28 22:32:27','2022-06-28 22:32:27','2022-06-28 22:33:23');
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nickName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `img_user` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'blaser89@gmail.com','cris','cristian','123456','default.jpg','2022-06-28 21:58:45',NULL,NULL),(3,'cualquiera@gmail.com','Kalexito','Kevin Camacho','123456','default.jpg','2022-06-24 14:51:07','2022-05-13 02:54:09',NULL),(4,'cualquiera2@gmail.com','Kalex','Kevin Camacho 2','123456','default.jpg','2022-06-21 23:57:03','2022-05-13 02:56:20',NULL),(5,'jimmy@dfs.com','JimmyxD','jimmy alejandro','sadsadsdads','default.jpg','2022-06-10 21:34:40','2022-05-13 03:27:53',NULL),(10,'deer@gmail.com','DeerBoy','jimmy','$2a$10$LiH1dtGVtUf5mggE0QuL3.bP2k5gOcI/MonvB.I6qvtWkFXA/kyhm','1653079538130.jpg','2022-06-28 02:20:40','2022-05-20 20:45:38',NULL),(11,'deerboy.art@gmail.com','noble-six','maxito','$2a$10$4jvgi9nsjKBQHC.rtaAdquWpllwrJl9BFg8f/XAIYcEXPviHjLIsK','1653403428106.jpg','2022-06-28 02:16:20','2022-05-24 14:43:48',NULL),(14,'invitado@invitado.com','invitado','invitado','$2a$10$z16fCqfrapw7LweDiMcpR.Y3pokHa5Uyn1QQ0xCMHo2hdS6scaHPC','1656454350170.jpg','2022-06-28 22:12:30','2022-06-28 22:12:30',NULL),(15,'invitado2@invitado2.com','invitadoXD','invitado  2','$2a$10$IGVvXVllvlBRuWqxYwIH6O.tCUHjlWRhhFL0OkaZ9GaM8ioyafsrC','1656454450035.png','2022-06-28 22:14:10','2022-06-28 22:14:10',NULL),(16,'leandro@dh.com','xX_mussoCrack_Xx','leandro musso','$2a$10$Spn3Q9xQTmhVm2C70V37QuBkqWBhyZ2pA8Pd5Hcx0slFSoiV0ntXW','1656454583578.jpg','2022-06-28 22:16:23','2022-06-28 22:16:23',NULL),(17,'jose@dh.com','mirandaMaster','jose miranda','$2a$10$P6tJ0u.bPx09/MWo9cNjy.KbD4n3qB.51fK96oxWJXz/5CkZkCGQO','1656454671672.jpg','2022-06-28 22:17:51','2022-06-28 22:17:51',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'dbworldgame'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-28 17:51:45
