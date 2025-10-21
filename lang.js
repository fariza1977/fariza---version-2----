// lang.js - Multi-language support for CuidaMiHuella

// Translation data
const translations = {
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_join: "Únete al Club",
        nav_shelters: "Para Protectoras",
        nav_find: "Busca a tu Compañero",
        nav_club: "El Club",
        nav_about: "Sobre Nosotros",
        
        // Hero
        heroTitle: "La Adopción ha Cambiado. Para Siempre.",
        heroSubtitle: "Bienvenido a CuidamiHuella, el club que transforma el miedo a adoptar en la certeza de haber encontrado a tu compañero ideal. Descubre un proceso seguro, con seguro incluido, y una comunidad que te acompaña para toda la vida.",
        heroBtn1: "Descubre el Club",
        heroBtn2: "Busca a tu Compañero",
        
        // Value Proposition
        valueTitle: "Un Club para Todos los que Aman a los Animales",
        adoptTitle: "¿Pensando en Adoptar?",
        adoptText: "Elimina el miedo con nuestra \"Experiencia de Acogida\". Convive con tu futuro compañero durante 3 semanas de forma segura y toma la decisión más importante de tu vida con el corazón y la cabeza.",
        adoptLink: "Saber más sobre la Experiencia >",
        petOwnerTitle: "¿Ya Tienes Mascota?",
        petOwnerText: "Únete a la comunidad de dueños más comprometida de España. Accede a nuestra red de descuentos, foros con expertos, cadena de favores y mucho más. Dale a tu mascota los beneficios que se merece.",
        petOwnerLink: "Hazte Socio Amigo >",
        
        // Process
        processTitle: "Tu Viaje hacia el Compañero Perfecto, en 3 Pasos Seguros",
        step1Title: "1. Únete al Club y Activa tu Pack",
        step1Text: "Por una cuota única de 89€ activas tu \"Pack de Bienvenida y Tranquilidad Total\". Incluye tu seguro, la desparasitación del animal y un donativo a la protectora.",
        step2Title: "2. Vive la Experiencia de Acogida",
        step2Text: "Elige un animal y disfrútalo en casa durante 3 semanas. Descubre su verdadero carácter y si sois el match perfecto, con el apoyo de nuestra comunidad.",
        step3Title: "3. Celebra tu Éxito",
        step3Text: "Formaliza una adopción basada en la realidad, no en una corazonada. La firma final con la protectora es solo un trámite para celebrar lo que ya sabes.",
        
        // Testimonials
        testimonialsTitle: "Las Historias que nos Impulsan",
        testimonialText: "La \"Experiencia de Acogida\" fue clave. Descubrimos que necesitábamos un perro tranquilo como Bruno. Sin este proceso, nos habríamos equivocado.",
        testimonialAuthor: "— Laura y David, Socios Fundadores y familia de Bruno.",
        
        // Shelters
        sheltersTitle: "¿Eres una Protectora o Centro de Acogida?",
        sheltersText: "Descubre cómo nuestra plataforma puede ahorrarte horas de trabajo, reducir las devoluciones y generarte una nueva vía de financiación. A coste cero.",
        sheltersBtn: "Colabora con Nosotros",
        
        // Membership
        membershipSubtitle: "Tanto si buscas a tu nuevo compañero como si ya lo tienes, CuidamiHuella es el ecosistema de confianza, ahorro y apoyo que necesitas. Elige tu camino para entrar.",
        founderTitle: "SOCIO FUNDADOR",
        founderDesc: "Para los que inician su viaje adoptando con nosotros.",
        founderPrice: "89 €",
        founderRenewal: "29,90 €/año",
        friendTitle: "SOCIO AMIGO",
        friendDesc: "Para los que ya tienen mascota y quieren unirse al club.",
        friendPrice: "39,90 €",
        friendRenewal: "29,90 €/año (¡Tu lealtad tiene premio!)",
        benefit1: "Acceso a la \"Experiencia de Acogida\"",
        benefit2: "Seguro de RC y Accidentes incluido en el Pack",
        benefit3: "Acceso COMPLETO al Club (Descuentos, Expertos, Comunidad)",
        benefit4: "Acceso EXCLUSIVO a la \"Cadena de Favores\" con estatus verificado",
        benefit5: "Acceso COMPLETO a la Red de Descuentos",
        benefit6: "Acceso COMPLETO a los Foros de Expertos y Comunidad",
        benefit7: "Posibilidad de acceder a la \"Cadena de Favores\" tras un proceso de verificación",
        founderBtn: "Inicia tu Adopción",
        friendBtn: "Hazte Socio Amigo Ahora",
        
        // Footer
        footerSlogan: "Zure aztarna zaintzen dugu.",
        footerNavTitle: "Navegación",
        footerLegalTitle: "Legal",
        footerHelpTitle: "Ayuda",
        legal1: "Aviso Legal",
        legal2: "Política de Privacidad",
        legal3: "Política de Cookies",
        legal4: "Términos y Condiciones",
        help1: "Contacto",
        help2: "Preguntas Frecuentes (FAQ)",
        copyright: "© 2025 CuidamiHuella. Todos los derechos reservados.",
        
        // Account
        accountBtn: "Acceder / Mi Cuenta"
    },
    
    eu: {
        // Navigation
        nav_home: "Hasiera",
        nav_join: "Egin zaitez Bazkide",
        nav_shelters: "Babesleentzat",
        nav_find: "Bilatu zure Laguna",
        nav_club: "Kluba",
        nav_about: "Guri Buruz",
        
        // Hero
        heroTitle: "Adoptatzeak Aldatu Egin Da. Betiko.",
        heroSubtitle: "Ongi etorri CuidamiHuellara, adoptatzeko beldurra zure lagun ideala aurkitu izanaren ziurtasun bihurtzen duen klubera. Ezagutu prozesu seguru bat, asegurua barne, eta bizitza osorako lagunduko dizun komunitate bat.",
        heroBtn1: "Ezagutu Kluba",
        heroBtn2: "Bilatu zure Laguna",
        
        // Value Proposition
        valueTitle: "Animaliak Maite dituzten Guztientzako Klub Bat",
        adoptTitle: "Adoptatzea pentsatzen?",
        adoptText: "Kendu beldurra gure \"Harrera Esperientziarekin\". Bizi zure etorkizuneko lagunarekin 3 astez modu seguruan eta hartu zure bizitzako erabakirik garrantzitsuena bihotzarekin eta buruarekin.",
        adoptLink: "Esperientziari buruz gehiago jakin >",
        petOwnerTitle: "Badaukazu jada maskotarik?",
        petOwnerText: "Egin bat Espainiako jabe konprometituenen komunitatearekin. Sar zaitez gure deskontu-sarean, adituen foroetan, mesede-katean eta askoz gehiago. Eman zure maskotari merezi dituen onurak.",
        petOwnerLink: "Egin zaitez Bazkide Laguna >",
        
        // Process
        processTitle: "Zure Lagun Perfekturanzko Bidaia, 3 Pauso Segurutan",
        step1Title: "1. Egin bat Klubarekin eta Aktibatu zure Paketea",
        step1Text: "89€-ko kuota bakar baten truke zure \"Ongi Etorri eta Erabateko Lasaitasun Paketea\" aktibatzen duzu. Zure asegurua, animaliaren desparasitazioa eta babeslearentzako dohaintza bat barne hartzen ditu.",
        step2Title: "2. Bizi Harrera Esperientzia",
        step2Text: "Aukeratu animalia bat eta gozatu etxean 3 astez. Ezagutu bere benetako izaera eta ea bat etortze perfektua zareten, gure komunitatearen laguntzarekin.",
        step3Title: "3. Ospatu zure Arrakasta",
        step3Text: "Formalizatu errealitatean oinarritutako adopzio bat, ez susmo batean. Babeslearekin azken sinadura jada dakizuna ospatzeko tramite bat besterik ez da.",
        
        // Testimonials
        testimonialsTitle: "Bultzatzen Gaituzten Istorioak",
        testimonialText: "\"Harrera Esperientzia\" gakoa izan zen. Jakin genuen Bruno bezalako txakur lasai bat behar genuela. Prozesu hau gabe, akats egin genukeen.",
        testimonialAuthor: "— Laura eta David, sortzaile bazkideak eta Bruno familiakoa.",
        
        // Shelters
        sheltersTitle: "Babesle edo Harrera Zentro Bat Zarete?",
        sheltersText: "Ezagutu nola gure plataformak lan-orduak aurreztu, itzulketak murriztu eta finantzaketa bide berri bat sor diezazukeen. Zero kostutan.",
        sheltersBtn: "Gurekin Lankidetzan Aritu",
        
        // Membership
        membershipSubtitle: "Zure lagun berria bilatzen ari zarenean edo jada baduzuenean, CuidamiHuella zure behar dituzun konfiantza, aurrezpen eta laguntzaren ekosistema da. Hautatu zure bidea sartzeko.",
        founderTitle: "SORTZAILE BAZKIDEA",
        founderDesc: "Gurekin adoptatzen hasi direnentzat.",
        founderPrice: "89 €",
        founderRenewal: "29,90 €/urte",
        friendTitle: "BAZKIDE LAGUNA",
        friendDesc: "Jada maskotarik dituztenentzat eta kluba elkartu nahi dutenentzat.",
        friendPrice: "39,90 €",
        friendRenewal: "29,90 €/urte (Zure leialtasuna saria du!)",
        benefit1: "\"Harrera Esperientziara\" sarbidea",
        benefit2: "Paketean barne hartutako RC eta Alergia Segurua",
        benefit3: "Kluba OSOAN SARBITZA (Deskontuak, Adituak, Komunitatea)",
        benefit4: "BAIETSUN ESTATUA DUEN \"Mesede KATEA\"-ra SARBITZA EXKLUSIBOA",
        benefit5: "Deskontu Sarean OSO SARBITZA",
        benefit6: "Adituen eta Komunitatearen Foroetan OSO SARBITZA",
        benefit7: "\"Mesede KATEA\"-ra sarbidea balidazio-prozesu baten ondoren",
        founderBtn: "Hasi zure Adoptazioa",
        friendBtn: "Egin zaitez Bazkide Lagun Orain",
        
        // Footer
        footerSlogan: "Zure aztarna zaintzen dugu.",
        footerNavTitle: "Nabigazioa",
        footerLegalTitle: "Legezkoa",
        footerHelpTitle: "Laguntza",
        legal1: "Legezko Oharra",
        legal2: "Pribatutasun Politika",
        legal3: "Cookie Politika",
        legal4: "Baldintzak eta baldintzak",
        help1: "Harremana",
        help2: "Ohiko Galderak (FAQ)",
        copyright: "© 2025 CuidamiHuella. Eskubide guztiak gordeta.",
        
        // Account
        accountBtn: "Sartu / Nire Kontua"
    },
    
    ca: {
        // Navigation
        nav_home: "Inici",
        nav_join: "Uneix-te al Club",
        nav_shelters: "Per a Protectores",
        nav_find: "Cerca el teu Company",
        nav_club: "El Club",
        nav_about: "Sobre Nosaltres",
        
        // Hero
        heroTitle: "L'Adopció ha Canviat. Per Sempre.",
        heroSubtitle: "Benvingut a CuidamiHuella, el club que transforma la por d'adoptar en la certesa d'haver trobat el teu company ideal. Descobreix un procés segur, amb assegurança inclosa, i una comunitat que t'acompanya per a tota la vida.",
        heroBtn1: "Descobreix el Club",
        heroBtn2: "Cerca el teu Company",
        
        // Value Proposition
        valueTitle: "Un Club per a Tots els qui Estimen els Animals",
        adoptTitle: "Pensant a Adoptar?",
        adoptText: "Elimina la por amb la nostra \"Experiència d'Acollida\". Conviu amb el teu futur company durant 3 setmanes de forma segura i pren la decisió més important de la teva vida amb el cor i el cap.",
        adoptLink: "Saber-ne més sobre l'Experiència >",
        petOwnerTitle: "Ja Tens Mascota?",
        petOwnerText: "Uneix-te a la comunitat d'amos més compromesa d'Espanya. Accedeix a la nostra xarxa de descomptes, fòrums amb experts, cadena de favors i molt més. Dona-li a la teva mascota els beneficis que es mereix.",
        petOwnerLink: "Fes-te Soci Amic >",
        
        // Process
        processTitle: "El teu Viatge cap al Company Perfecte, en 3 Passos Segurs",
        step1Title: "1. Uneix-te al Club i Activa el teu Pack",
        step1Text: "Per una quota única de 89€ actives el teu \"Pack de Benvinguda i Tranquil·litat Total\". Inclou la teva assegurança, la desparasitació de l'animal i un donatiu a la protectora.",
        step2Title: "2. Viu l'Experiència d'Acollida",
        step2Text: "Tria un animal i gaudeix-lo a casa durant 3 setmanes. Descobreix el seu veritable caràcter i si sou la parella perfecta, amb el suport de la nostra comunitat.",
        step3Title: "3. Celebra el teu Èxit",
        step3Text: "Formalitza una adopció basada en la realitat, no en una intuïció. La signatura final amb la protectora és només un tràmit per celebrar el que ja saps.",
        
        // Testimonials
        testimonialsTitle: "Les Històries que ens Impulsen",
        testimonialText: "L'\"Experiència d'Acollida\" va ser clau. Vam descobrir que necessitàvem un gos tranquil com en Bruno. Sense aquest procés, ens hauríem equivocat.",
        testimonialAuthor: "— Laura i David, socis fundadors i família d'en Bruno.",
        
        // Shelters
        sheltersTitle: "Ets una Protectora o Centre d'Acollida?",
        sheltersText: "Descobreix com la nostra plataforma pot estalviar-te hores de feina, reduir les devolucions i generar-te una nova via de finançament. A cost zero.",
        sheltersBtn: "Col·labora amb Nosaltres",
        
        // Membership
        membershipSubtitle: "Tant si busques el teu nou company com si ja el tens, CuidamiHuella és l'ecosistema de confiança, estalvi i suport que necessites. Tria el teu camí per entrar.",
        founderTitle: "SOCI FUNDADOR",
        founderDesc: "Per als que inicien el seu viatge adoptant amb nosaltres.",
        founderPrice: "89 €",
        founderRenewal: "29,90 €/any",
        friendTitle: "SOCI AMIC",
        friendDesc: "Per als que ja tenen mascota i volen unir-se al club.",
        friendPrice: "39,90 €",
        friendRenewal: "29,90 €/any (La teva lleialtat té premi!)",
        benefit1: "Accés a la \"Experiència d'Acollida\"",
        benefit2: "Assegurança de RC i Accidents inclosa al Pack",
        benefit3: "Accés COMPLET al Club (Descomptes, Experts, Comunitat)",
        benefit4: "Accés EXCLUSIU a la \"Cadena de Favors\" amb estat verificat",
        benefit5: "Accés COMPLET a la Xarxa de Descomptes",
        benefit6: "Accés COMPLET als Fòrums d'Experts i Comunitat",
        benefit7: "Possibilitat d'accedir a la \"Cadena de Favors\" després d'un procés de verificació",
        founderBtn: "Inicia la teva Adopció",
        friendBtn: "Fes-te Soci Amic Ara",
        
        // Footer
        footerSlogan: "Protegim la teva empremta.",
        footerNavTitle: "Navegació",
        footerLegalTitle: "Legal",
        footerHelpTitle: "Ajuda",
        legal1: "Avís Legal",
        legal2: "Política de Privacitat",
        legal3: "Política de Cookies",
        legal4: "Termes i Condicions",
        help1: "Contacte",
        help2: "Preguntes Freqüents (FAQ)",
        copyright: "© 2025 CuidamiHuella. Tots els drets reservats.",
        
        // Account
        accountBtn: "Accedeix / El Meu Compte"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_join: "Join the Club",
        nav_shelters: "For Shelters",
        nav_find: "Find your Companion",
        nav_club: "The Club",
        nav_about: "About Us",
        
        // Hero
        heroTitle: "Adoption has Changed. Forever.",
        heroSubtitle: "Welcome to CuidamiHuella, the club that transforms the fear of adopting into the certainty of having found your ideal companion. Discover a safe process, with insurance included, and a community that supports you for life.",
        heroBtn1: "Discover the Club",
        heroBtn2: "Find your Companion",
        
        // Value Proposition
        valueTitle: "A Club for Everyone Who Loves Animals",
        adoptTitle: "Thinking of Adopting?",
        adoptText: "Eliminate fear with our \"Foster Experience\". Live with your future companion for 3 weeks safely and make the most important decision of your life with your heart and your head.",
        adoptLink: "Learn more about the Experience >",
        petOwnerTitle: "Already Have a Pet?",
        petOwnerText: "Join the most committed community of pet owners in Spain. Access our network of discounts, expert forums, a mutual support network, and much more. Give your pet the benefits it deserves.",
        petOwnerLink: "Become a Friend Member >",
        
        // Process
        processTitle: "Your Journey to the Perfect Companion, in 3 Safe Steps",
        step1Title: "1. Join the Club & Activate your Pack",
        step1Text: "For a single fee of €89, you activate your \"Welcome & Total Peace of Mind Pack\". It includes your insurance, the pet's deworming, and a donation to the shelter.",
        step2Title: "2. Live the Foster Experience",
        step2Text: "Choose a pet and enjoy it at home for 3 weeks. Discover its true character and see if you are the perfect match, with the support of our community.",
        step3Title: "3. Celebrate your Success",
        step3Text: "Finalize an adoption based on reality, not a hunch. The final signature with the shelter is just a formality to celebrate what you already know.",
        
        // Testimonials
        testimonialsTitle: "The Stories That Drive Us",
        testimonialText: "The \"Foster Experience\" was key. We discovered we needed a calm dog like Bruno. Without this process, we would have made a mistake.",
        testimonialAuthor: "— Laura and David, Founding Members and Bruno's family.",
        
        // Shelters
        sheltersTitle: "Are you a Shelter or Rescue Center?",
        sheltersText: "Discover how our platform can save you hours of work, reduce returns, and create a new funding stream for you. At zero cost.",
        sheltersBtn: "Partner with Us",
        
        // Membership
        membershipSubtitle: "Whether you are looking for your new companion or already have one, CuidamiHuella is the ecosystem of trust, savings, and support you need. Choose your path to join.",
        founderTitle: "FOUNDER MEMBER",
        founderDesc: "For those who start their journey by adopting with us.",
        founderPrice: "€89",
        founderRenewal: "€29.90/year",
        friendTitle: "FRIEND MEMBER",
        friendDesc: "For those who already have a pet and want to join the club.",
        friendPrice: "€39.90",
        friendRenewal: "€29.90/year (Your loyalty is rewarded!)",
        benefit1: "Access to the \"Foster Experience\"",
        benefit2: "Liability and Accident Insurance included in the Pack",
        benefit3: "FULL Access to the Club (Discounts, Experts, Community)",
        benefit4: "EXCLUSIVE Access to the \"Favor Chain\" with verified status",
        benefit5: "FULL Access to the Discount Network",
        benefit6: "FULL Access to Expert Forums and Community",
        benefit7: "Possibility to access the \"Favor Chain\" after a verification process",
        founderBtn: "Start your Adoption",
        friendBtn: "Become a Friend Member Now",
        
        // Footer
        footerSlogan: "We protect your paw print.",
        footerNavTitle: "Navigation",
        footerLegalTitle: "Legal",
        footerHelpTitle: "Help",
        legal1: "Legal Notice",
        legal2: "Privacy Policy",
        legal3: "Cookie Policy",
        legal4: "Terms and Conditions",
        help1: "Contact",
        help2: "Frequently Asked Questions (FAQ)",
        copyright: "© 2025 CuidamiHuella. All rights reserved.",
        
        // Account
        accountBtn: "Login / My Account"
    },
    
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_join: "Rejoignez le Club",
        nav_shelters: "Pour les Refuges",
        nav_find: "Trouvez votre Compagnon",
        nav_club: "Le Club",
        nav_about: "À Propos",
        
        // Hero
        heroTitle: "L'Adoption a Changé. Pour Toujours.",
        heroSubtitle: "Bienvenue chez CuidamiHuella, le club qui transforme la peur d'adopter en la certitude d'avoir trouvé votre compagnon idéal. Découvrez un processus sûr, assurance incluse, et une communauté qui vous accompagne pour la vie.",
        heroBtn1: "Découvrez le Club",
        heroBtn2: "Trouvez votre Compagnon",
        
        // Value Proposition
        valueTitle: "Un Club pour Tous Ceux qui Aiment les Animaux",
        adoptTitle: "Vous Pensez à Adopter ?",
        adoptText: "Éliminez la peur avec notre \"Expérience d'Accueil\". Vivez avec votre futur compagnon pendant 3 semaines en toute sécurité et prenez la décision la plus importante de votre vie avec votre cœur et votre tête.",
        adoptLink: "En savoir plus sur l'Expérience >",
        petOwnerTitle: "Vous Avez Déjà un Animal ?",
        petOwnerText: "Rejoignez la communauté de propriétaires d'animaux la plus engagée d'Espagne. Accédez à notre réseau de réductions, à nos forums d'experts, à notre chaîne de faveurs et bien plus encore. Donnez à votre animal les avantages qu'il mérite.",
        petOwnerLink: "Devenez Membre Ami >",
        
        // Process
        processTitle: "Votre Voyage vers le Compagnon Parfait, en 3 Étapes Sûres",
        step1Title: "1. Rejoignez le Club & Activez votre Pack",
        step1Text: "Pour un tarif unique de 89 €, vous activez votre \"Pack de Bienvenue & Tranquillité Totale\". Il inclut votre assurance, le vermifuge de l'animal et un don au refuge.",
        step2Title: "2. Vivez l'Expérience d'Accueil",
        step2Text: "Choisissez un animal et profitez-en à la maison pendant 3 semaines. Découvrez son vrai caractère et voyez si vous êtes le match parfait, avec le soutien de notre communauté.",
        step3Title: "3. Célébrez votre Succès",
        step3Text: "Finalisez une adoption basée sur la réalité, pas sur une intuition. La signature finale avec le refuge n'est qu'une formalité pour célébrer ce que vous savez déjà.",
        
        // Testimonials
        testimonialsTitle: "Les Histoires qui nous Animent",
        testimonialText: "L'\"Expérience d'Accueil\" a été déterminante. Nous avons découvert que nous avions besoin d'un chien calme comme Bruno. Sans ce processus, nous nous serions trompés.",
        testimonialAuthor: "— Laura et David, Membres Fondateurs et famille de Bruno.",
        
        // Shelters
        sheltersTitle: "Êtes-vous un Refuge ou un Centre d'Accueil ?",
        sheltersText: "Découvrez comment notre plateforme peut vous faire économiser des heures de travail, réduire les retours et vous créer une nouvelle source de financement. Sans aucun coût.",
        sheltersBtn: "Devenez Partenaire",
        
        // Membership
        membershipSubtitle: "Que vous cherchiez votre nouveau compagnon ou que vous en ayez déjà un, CuidamiHuella est l'écosystème de confiance, d'économies et de soutien dont vous avez besoin. Choisissez votre chemin pour rejoindre.",
        founderTitle: "MEMBRE FONDATEUR",
        founderDesc: "Pour ceux qui commencent leur parcours en adoptant avec nous.",
        founderPrice: "89 €",
        founderRenewal: "29,90 €/an",
        friendTitle: "MEMBRE AMI",
        friendDesc: "Pour ceux qui ont déjà un animal de compagnie et souhaitent rejoindre le club.",
        friendPrice: "39,90 €",
        friendRenewal: "29,90 €/an (Votre fidélité est récompensée !)",
        benefit1: "Accès à l'\"Expérience d'Accueil\"",
        benefit2: "Assurance responsabilité civile et accidents incluse dans le Pack",
        benefit3: "Accès COMPLET au Club (Remises, Experts, Communauté)",
        benefit4: "Accès EXCLUSIF à la \"Chaîne de Faveurs\" avec statut vérifié",
        benefit5: "Accès COMPLET au Réseau de Remises",
        benefit6: "Accès COMPLET aux Forums d'Experts et à la Communauté",
        benefit7: "Possibilité d'accéder à la \"Chaîne de Faveurs\" après un processus de vérification",
        founderBtn: "Commencez votre Adoption",
        friendBtn: "Devenez Membre Ami Maintenant",
        
        // Footer
        footerSlogan: "Nous protégeons votre empreinte.",
        footerNavTitle: "Navigation",
        footerLegalTitle: "Légal",
        footerHelpTitle: "Aide",
        legal1: "Avis Légal",
        legal2: "Politique de Confidentialité",
        legal3: "Politique des Cookies",
        legal4: "Conditions Générales",
        help1: "Contact",
        help2: "Questions Fréquentes (FAQ)",
        copyright: "© 2025 CuidamiHuella. Tous droits réservés.",
        
        // Account
        accountBtn: "Connexion / Mon Compte"
    },
    
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_join: "Werden Sie Mitglied",
        nav_shelters: "Für Tierheime",
        nav_find: "Finde deinen Begleiter",
        nav_club: "Der Club",
        nav_about: "Über uns",
        
        // Hero
        heroTitle: "Adoption hat sich verändert. Für immer.",
        heroSubtitle: "Willkommen bei CuidamiHuella, dem Club, der die Angst vor der Adoption in die Gewissheit verwandelt, Ihren idealen Begleiter gefunden zu haben. Entdecken Sie einen sicheren Prozess, inklusive Versicherung, und eine Gemeinschaft, die Sie ein Leben lang begleitet.",
        heroBtn1: "Entdecken Sie den Club",
        heroBtn2: "Finde deinen Begleiter",
        
        // Value Proposition
        valueTitle: "Ein Club für alle, die Tiere lieben",
        adoptTitle: "Denken Sie über eine Adoption nach?",
        adoptText: "Überwinden Sie die Angst mit unserer \"Kennenlern-Pflegeerfahrung\". Leben Sie 3 Wochen lang sicher mit Ihrem zukünftigen Begleiter und treffen Sie die wichtigste Entscheidung Ihres Lebens mit Herz und Verstand.",
        adoptLink: "Mehr über die Erfahrung erfahren >",
        petOwnerTitle: "Haben Sie bereits ein Haustier?",
        petOwnerText: "Treten Sie der engagiertesten Gemeinschaft von Haustierbesitzern in Spanien bei. Greifen Sie auf unser Netzwerk von Rabatten, Expertenforen, ein Unterstützungsnetzwerk und vieles mehr zu. Geben Sie Ihrem Haustier die Vorteile, die es verdient.",
        petOwnerLink: "Werden Sie Freundesmitglied >",
        
        // Process
        processTitle: "Ihr Weg zum perfekten Begleiter, in 3 sicheren Schritten",
        step1Title: "1. Treten Sie dem Club bei & Aktivieren Sie Ihr Paket",
        step1Text: "Für eine einmalige Gebühr von 89 € aktivieren Sie Ihr \"Willkommens- & Sorglos-Paket\". Es beinhaltet Ihre Versicherung, die Entwurmung des Tieres und eine Spende an das Tierheim.",
        step2Title: "2. Erleben Sie die Pflegeerfahrung",
        step2Text: "Wählen Sie ein Tier und genießen Sie es 3 Wochen lang zu Hause. Entdecken Sie seinen wahren Charakter und sehen Sie, ob Sie perfekt zusammenpassen, mit der Unterstützung unserer Gemeinschaft.",
        step3Title: "3. Feiern Sie Ihren Erfolg",
        step3Text: "Schließen Sie eine Adoption ab, die auf der Realität basiert, nicht auf einer Ahnung. Die endgültige Unterschrift beim Tierheim ist nur eine Formalität, um zu feiern, was Sie bereits wissen.",
        
        // Testimonials
        testimonialsTitle: "Die Geschichten, die uns antreiben",
        testimonialText: "Die \"Pflegeerfahrung\" war entscheidend. Wir entdeckten, dass wir einen ruhigen Hund wie Bruno brauchten. Ohne diesen Prozess hätten wir einen Fehler gemacht.",
        testimonialAuthor: "— Laura und David, Gründungsmitglieder und Brunos Familie.",
        
        // Shelters
        sheltersTitle: "Sind Sie ein Tierheim oder eine Rettungsstation?",
        sheltersText: "Entdecken Sie, wie unsere Plattform Ihnen Stunden an Arbeit sparen, Rückgaben reduzieren und eine neue Einnahmequelle schaffen kann. Kostenlos.",
        sheltersBtn: "Werden Sie Partner",
        
        // Membership
        membershipSubtitle: "Ob Sie nach Ihrem neuen Begleiter suchen oder bereits einen haben, CuidamiHuella ist das Ökosystem aus Vertrauen, Einsparungen und Unterstützung, das Sie benötigen. Wählen Sie Ihren Weg, um beizutreten.",
        founderTitle: "GRÜNDUNGSMITGLIED",
        founderDesc: "Für diejenigen, die ihre Reise durch die Adoption mit uns beginnen.",
        founderPrice: "89 €",
        founderRenewal: "29,90 €/Jahr",
        friendTitle: "FREUNDES-MITGLIED",
        friendDesc: "Für diejenigen, die bereits ein Haustier haben und dem Club beitreten möchten.",
        friendPrice: "39,90 €",
        friendRenewal: "29,90 €/Jahr (Ihre Loyalität wird belohnt!)",
        benefit1: "Zugang zur \"Pflegeerfahrung\"",
        benefit2: "Haftpflicht- und Unfallversicherung im Paket enthalten",
        benefit3: "VOLLER Zugang zum Club (Rabatte, Experten, Gemeinschaft)",
        benefit4: "EXKLUSIVER Zugang zur \"Gefälligkeiten-Kette\" mit verifiziertem Status",
        benefit5: "VOLLER Zugang zum Rabatt-Netzwerk",
        benefit6: "VOLLER Zugang zu Experten-Foren und Gemeinschaft",
        benefit7: "Möglichkeit, nach einem Verifizierungsprozess auf die \"Gefälligkeiten-Kette\" zuzugreifen",
        founderBtn: "Beginnen Sie Ihre Adoption",
        friendBtn: "Werden Sie jetzt Freundesmitglied",
        
        // Footer
        footerSlogan: "Wir schützen Ihre Pfote.",
        footerNavTitle: "Navigation",
        footerLegalTitle: "Rechtliches",
        footerHelpTitle: "Hilfe",
        legal1: "Rechtlicher Hinweis",
        legal2: "Datenschutzrichtlinie",
        legal3: "Cookie-Richtlinie",
        legal4: "Allgemeine Geschäftsbedingungen",
        help1: "Kontakt",
        help2: "Häufig gestellte Fragen (FAQ)",
        copyright: "© 2025 CuidamiHuella. Alle Rechte vorbehalten.",
        
        // Account
        accountBtn: "Anmelden / Mein Konto"
    }
};

// DOM elements that need translation
const translatableElements = {
    // Navigation
    nav_home: document.querySelectorAll('[data-key="nav_home"]'),
    nav_join: document.querySelectorAll('[data-key="nav_join"]'),
    nav_shelters: document.querySelectorAll('[data-key="nav_shelters"]'),
    nav_find: document.querySelectorAll('[data-key="nav_find"]'),
    nav_club: document.querySelectorAll('[data-key="nav_club"]'),
    nav_about: document.querySelectorAll('[data-key="nav_about"]'),
    
    // Hero
    heroTitle: document.getElementById('heroTitle'),
    heroSubtitle: document.getElementById('heroSubtitle'),
    heroBtn1: document.getElementById('heroBtn1'),
    heroBtn2: document.getElementById('heroBtn2'),
    
    // Value Proposition
    valueTitle: document.getElementById('valueTitle'),
    adoptTitle: document.getElementById('adoptTitle'),
    adoptText: document.getElementById('adoptText'),
    adoptLink: document.getElementById('adoptLink'),
    petOwnerTitle: document.getElementById('petOwnerTitle'),
    petOwnerText: document.getElementById('petOwnerText'),
    petOwnerLink: document.getElementById('petOwnerLink'),
    
    // Process
    processTitle: document.getElementById('processTitle'),
    step1Title: document.getElementById('step1Title'),
    step1Text: document.getElementById('step1Text'),
    step2Title: document.getElementById('step2Title'),
    step2Text: document.getElementById('step2Text'),
    step3Title: document.getElementById('step3Title'),
    step3Text: document.getElementById('step3Text'),
    
    // Testimonials
    testimonialsTitle: document.getElementById('testimonialsTitle'),
    testimonialText: document.getElementById('testimonialText'),
    testimonialAuthor: document.getElementById('testimonialAuthor'),
    
    // Shelters
    sheltersTitle: document.getElementById('sheltersTitle'),
    sheltersText: document.getElementById('sheltersText'),
    sheltersBtn: document.getElementById('sheltersBtn'),
    
    // Membership
    membershipSubtitle: document.getElementById('membershipSubtitle'),
    founderTitle: document.getElementById('founderTitle'),
    founderDesc: document.getElementById('founderDesc'),
    founderPrice: document.getElementById('founderPrice'),
    founderRenewal: document.getElementById('founderRenewal'),
    friendTitle: document.getElementById('friendTitle'),
    friendDesc: document.getElementById('friendDesc'),
    friendPrice: document.getElementById('friendPrice'),
    friendRenewal: document.getElementById('friendRenewal'),
    benefit1: document.getElementById('benefit1'),
    benefit2: document.getElementById('benefit2'),
    benefit3: document.getElementById('benefit3'),
    benefit4: document.getElementById('benefit4'),
    benefit5: document.getElementById('benefit5'),
    benefit6: document.getElementById('benefit6'),
    benefit7: document.getElementById('benefit7'),
    founderBtn: document.getElementById('founderBtn'),
    friendBtn: document.getElementById('friendBtn'),
    
    // Footer
    footerSlogan: document.getElementById('footerSlogan'),
    footerNavTitle: document.getElementById('footerNavTitle'),
    footerLegalTitle: document.getElementById('footerLegalTitle'),
    footerHelpTitle: document.getElementById('footerHelpTitle'),
    legal1: document.getElementById('legal1'),
    legal2: document.getElementById('legal2'),
    legal3: document.getElementById('legal3'),
    legal4: document.getElementById('legal4'),
    help1: document.getElementById('help1'),
    help2: document.getElementById('help2'),
    copyright: document.getElementById('copyright'),
    
    // Account
    accountBtn: document.getElementById('accountBtn')
};

// Current language
let currentLang = 'es';

// Initialize translations
function initTranslations() {
    // Set initial language from URL or browser
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    const browserLang = navigator.language.split('-')[0];
    
    if (langFromUrl && translations[langFromUrl]) {
        currentLang = langFromUrl;
    } else if (translations[browserLang]) {
        currentLang = browserLang;
    }
    
    // Update language selector
    document.getElementById('languageSelect').value = currentLang;
    
    // Apply translations
    applyTranslations();
}

// Apply translations to the page
function applyTranslations() {
    const langData = translations[currentLang];
    
    // Update all translatable elements
    for (const [key, elements] of Object.entries(translatableElements)) {
        if (langData[key]) {
            if (Array.isArray(elements)) {
                elements.forEach(el => {
                    if (el) el.textContent = langData[key];
                });
            } else if (elements) {
                elements.textContent = langData[key];
            }
        }
    }
}

// Language change handler
document.getElementById('languageSelect').addEventListener('change', function() {
    currentLang = this.value;
    applyTranslations();
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('lang', currentLang);
    window.history.replaceState({}, '', url);
});

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('active');
});

// Testimonial carousel
const testimonials = [
    {
        es: {
            text: "La \"Experiencia de Acogida\" fue clave. Descubrimos que necesitábamos un perro tranquilo como Bruno. Sin este proceso, nos habríamos equivocado.",
            author: "— Laura y David, Socios Fundadores y familia de Bruno."
        },
        eu: {
            text: "\"Harrera Esperientzia\" gakoa izan zen. Jakin genuen Bruno bezalako txakur lasai bat behar genuela. Prozesu hau gabe, akats egin genukeen.",
            author: "— Laura eta David, sortzaile bazkideak eta Bruno familiakoa."
        },
        ca: {
            text: "L'\"Experiència d'Acollida\" va ser clau. Vam descobrir que necessitàvem un gos tranquil com en Bruno. Sense aquest procés, ens hauríem equivocat.",
            author: "— Laura i David, socis fundadors i família d'en Bruno."
        },
        en: {
            text: "The \"Foster Experience\" was key. We discovered we needed a calm dog like Bruno. Without this process, we would have made a mistake.",
            author: "— Laura and David, Founding Members and Bruno's family."
        },
        fr: {
            text: "L'\"Expérience d'Accueil\" a été déterminante. Nous avons découvert que nous avions besoin d'un chien calme comme Bruno. Sans ce processus, nous nous serions trompés.",
            author: "— Laura et David, Membres Fondateurs et famille de Bruno."
        },
        de: {
            text: "Die \"Pflegeerfahrung\" war entscheidend. Wir entdeckten, dass wir einen ruhigen Hund wie Bruno brauchten. Ohne diesen Prozess hätten wir einen Fehler gemacht.",
            author: "— Laura und David, Gründungsmitglieder und Brunos Familie."
        }
    },
    {
        es: {
            text: "Tener acceso al foro de expertos nos quitó toda la ansiedad de los primeros días. ¡Es como tener un veterinario en el bolsillo!",
            author: "— Mikel, Socio Fundador y compañero de Luna."
        },
        eu: {
            text: "Adituen forora sarbidea izateak egun lehenetako arazoi guztiak kendu zigun. Veterinario bat poltsan edukitzea bezala da!",
            author: "— Mikel, sortzaile bazkidea eta Luna laguna."
        },
        ca: {
            text: "Tenir accés al fòrum d'experts ens va treure tota l'ansietat dels primers dies. És com tenir un veterinari a la butxaca!",
            author: "— Mikel, soci fundador i company de Luna."
        },
        en: {
            text: "Having access to the expert forum took away all the anxiety of the first days. It's like having a veterinarian in your pocket!",
            author: "— Mikel, Founding Member and Luna's companion."
        },
        fr: {
            text: "Avoir accès au forum d'experts a dissipé toute l'anxiété des premiers jours. C'est comme avoir un vétérinaire dans votre poche !",
            author: "— Mikel, Membre Fondateur et compagnon de Luna."
        },
        de: {
            text: "Der Zugang zum Expertenforum nahm uns alle Ängste der ersten Tage. Es ist, als hätte man einen Tierarzt in der Tasche!",
            author: "— Mikel, Gründungsmitglied und Lunas Begleiter."
        }
    },
    {
        es: {
            text: "Me uní como \"Socio Amigo\" por los descuentos en veterinarias. En un año me he ahorrado más de 100€. Y he encontrado un grupo de paseo para mi perro los domingos. ¡Increíble!",
            author: "— Sofía, Socia Amiga y compañera de Coco."
        },
        eu: {
            text: "Bazkide lagun gisa batu nintzen bezeroetarako deskontuengatik. Urte batean 100€ baino gehiago aurreztu dut. Eta igandetan nire txakurraren paseo taldea aurkitu dut. Irudikatzen ez da!",
            author: "— Sofía, bazkide laguna eta Coco laguna."
        },
        ca: {
            text: "M'hi vaig unir com a \"Soci Amic\" pels descomptes en veterinaris. En un any m'he estalit més de 100€. I he trobat un grup de passeig per al meu gos els diumenges. Increïble!",
            author: "— Sofía, soci amic i companya de Coco."
        },
        en: {
            text: "I joined as a \"Friend Member\" for the discounts on veterinary services. In one year, I saved over €100. And I found a walking group for my dog on Sundays. Incredible!",
            author: "— Sofía, Friend Member and Coco's companion."
        },
        fr: {
            text: "Je me suis inscrit en tant que \"Membre Ami\" pour les réductions sur les services vétérinaires. En un an, j'ai économisé plus de 100 €. Et j'ai trouvé un groupe de promenade pour mon chien le dimanche. Incroyable !",
            author: "— Sofía, Membre Amie et compagne de Coco."
        },
        de: {
            text: "Ich bin als \"Freundesmitglied\" wegen der Rabatte auf tierärztliche Leistungen beigetreten. In einem Jahr habe ich über 100 € gespart. Und ich habe eine Spaziergruppe für meinen Hund an Sonntagen gefunden. Unglaublich!",
            author: "— Sofía, Freundesmitglied und Cocos Begleiterin."
        }
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial][currentLang] || testimonials[currentTestimonial].es;
    document.getElementById('testimonialText').textContent = testimonial.text;
    document.getElementById('testimonialAuthor').textContent = testimonial.author;
}

document.getElementById('nextTestimonial').addEventListener('click', function() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prevTestimonial').addEventListener('click', function() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.getElementById('mainNav').classList.remove('active');
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTranslations();
    updateTestimonial();
});
