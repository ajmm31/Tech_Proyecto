categorias = {
    "SC-003": {
      codigo: "SC-003",
      nombre : "Soporte y Consultoría",
      descripcion: "Esta categoría agrupa servicios orientados a la asistencia, el asesoramiento y la mejora continua de los sistemas.",
      imagen: "images/Soporte.jpg"
    },
    "ID-005": {
      codigo: "ID-005",
      nombre : "Infraestructura y Desarrollo",
      descripcion: "Aquí encajarían servicios relacionados con la creación, gestión y evolución de la base tecnológica y las soluciones de software.",
      imagen: "images/Consultoria.jpg"
    }
};

localStorage.setItem("categorias", JSON.stringify(categorias));

// Inicialización de los servicios en localStorage
servicios = {
    "TI001": {
      codigo: "TI001",
      nombre: "Soporte Técnico Especializado",
      descripcion: "Asistencia remota y en sitio para la resolución de incidentes de hardware, software y red, garantizando la continuidad operativa de los usuarios y sistemas.",
      categoria: "SC-003",
      imagen: "images/Soporte.jpg",
      costo: "Por hora / Contrato mensual",
      precio: 50,
      estrellas: 5
    },
    "TI002": {
      codigo: "TI002",
      nombre: "Gestión de Infraestructura Cloud",
      descripcion: "Implementación, monitoreo y mantenimiento de soluciones en la nube (AWS, Azure, Google Cloud), optimizando costos y asegurando la escalabilidad y disponibilidad de los recursos.",
      categoria: "ID-005",
      imagen: "images/Cloud.jpg",
      costo: "Por proyecto / Contrato mensual",
      precio: 70,
      estrellas: 5
    },
    "TI003": {
      codigo: "TI003",
      nombre: "Desarrollo de Software a Medida",
      descripcion: "Diseño y creación de aplicaciones personalizadas (web, móvil, escritorio) que automatizan procesos y cumplen con los requerimientos específicos del negocio.",
      categoria: "ID-005",
      imagen: "images/Desarrollo.jpg",
      costo: "Por proyecto / Bolsa de horas",
      precio: 60,
      estrellas: 4
    },
    "TI004": {
      codigo: "TI004",
      nombre: "Ciberseguridad y Protección de Datos",
      descripcion: "Implementación de firewalls, antivirus avanzados, sistemas de detección de intrusiones y políticas de seguridad para proteger la información crítica de la empresa.",
      categoria: "SC-003",
      imagen: "images/Ciberseguridad.jpg",
      costo: "Auditoría inicial + Contrato anual",
      precio: 70,
      estrellas: 5
    },
    "TI005": {
      codigo: "TI005",
      nombre: "Consultoría y Auditoría Tecnológica",
      descripcion: "Análisis de la infraestructura y procesos tecnológicos actuales para identificar oportunidades de mejora, optimización y alineación con los objetivos estratégicos del negocio.",
      categoria: "SC-003",
      imagen: "images/Consultoria.jpg",
      costo: "Por consultoría / Por día",
      precio: 60,
      estrellas: 4
    },
    "TI006": {
      codigo: "TI006",
      nombre: "Gestión de Redes y Comunicaciones",
      descripcion: "Diseño, implementación y mantenimiento de redes LAN/WAN, Wi-Fi y sistemas de comunicación para asegurar una conectividad robusta y eficiente en toda la organización.",
      categoria: "ID-005",
      imagen: "images/Redes.jpg",
      costo: "Por proyecto / Contrato mensual",
      precio: 60,
      estrellas: 4
    }
};

localStorage.setItem("servicios", JSON.stringify(servicios));

banners = {
    "TI001": {
      codigo: "TI001",
      titulo : "Soporte Técnico Especializado",
      subtitulo: "",
      descripcion: "Este es un servicio fundamental y universalmente necesario. Destaca la confiabilidad y la asistencia directa, algo que todas las empresas valoran. Es un punto de entrada fácil para captar la atención de quien busca soluciones a problemas cotidianos.",
      imagen: "images/Soporte.jpg"
    },
    "TI002": {
      codigo: "TI002",
      titulo : "Gestión de Infraestructura Cloud",
      subtitulo: "",
      descripcion: "La nube es el presente y futuro de la tecnología empresarial. Este servicio muestra que tu área está a la vanguardia, ofreciendo escalabilidad, eficiencia y modernización. Es ideal para empresas que buscan optimizar sus recursos tecnológicos.",
      imagen: "images/Cloud.jpg"
    },
    "TI003": {
      codigo: "TI003",
      titulo : "Desarrollo de Software a Medida",
      subtitulo: "",
      descripcion: "Este servicio resalta la capacidad de su área para crear soluciones personalizadas que resuelvan problemas específicos de negocio. Muestra flexibilidad y un alto nivel de especialización, atrayendo a empresas con necesidades únicas que no encuentran en el software estándar.",
      imagen: "images/Desarrollo.jpg"
    }
};

localStorage.setItem("banners", JSON.stringify(banners));
