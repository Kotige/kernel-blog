const journeyData = [
    {
        id: "web",
        year: "2022",
        title: "Primeiro contato com desenvolvimento",
        subtitle: "Onde tudo começou.",
        description:
            "Início dos estudos em HTML, CSS e JavaScript. A curiosidade por tecnologia começa a tomar forma.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        links: [],

        position: {
            x: 12,
            y: 60,
        },

        connections: ["physics"],

        cardPosition: "top",
    },

    {
        id: "physics",
        year: "2024",
        title: "Ciência e Programação",
        subtitle: "As áreas começam a convergir.",
        description:
            "Os primeiros projetos unem programação, experimentos e divulgação científica.",

        technologies: [
            "Python",
            "Arduino",
            "React",
        ],

        links: [],

        position: {
            x: 36,
            y: 35,
        },

        connections: [
            "simulation",
            "kernel",
        ],

        cardPosition: "bottom",
    },

    {
        id: "simulation",
        year: "2025",
        title: "Explorando Simulações",
        subtitle: "Ideias ganham movimento.",
        description:
            "Experimentos computacionais passam a fazer parte do processo de aprendizagem.",

        technologies: [
            "Canvas",
            "Motion",
            "React",
        ],

        links: [],

        position: {
            x: 62,
            y: 65,
        },

        connections: ["kernel"],

        cardPosition: "top",
    },

    {
        id: "kernel",
        year: "2026",
        title: "Kernel",
        subtitle: "Tudo converge aqui.",
        description:
            "Nasce o Kernel: um espaço para conectar ciência, programação, literatura e imaginação.",

        technologies: [
            "React",
            "Tailwind",
            "Motion",
        ],

        links: [],

        position: {
            x: 88,
            y: 40,
        },

        connections: [],

        cardPosition: "left",

        featured: true,
    },
];

export default journeyData;