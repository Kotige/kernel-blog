import {
    PiAtomThin,
    PiPlanetThin,
    PiCodeThin,
    PiBookOpenThin,
    PiFlaskThin,
} from "react-icons/pi";

export default [
    {
        id: "KRN-001",

        title: "Kernel",

        icon: PiAtomThin,

        description:
            "O núcleo de ideias que conecta ciência, programação e mundos imaginários.",

        status: "active",

        href: "/projetos/kernel",

        relatedPosts: [
            {
                title: "Manifesto",
                href: "/artigos/manifesto"
            },
            {
                title: "Como ideias se conectam",
                href: "/artigos/conexoes"
            }
        ]
    },

    {
        id: "PHY-002",

        title: "Gravity Lab",

        icon: PiPlanetThin,

        description:
            "Experimentos interativos para visualizar gravitação, órbitas e sistemas dinercâmicos.",

        status: "beta",

        href: "/projetos/gravity-lab",

        relatedPosts: [
            {
                title: "O problema dos três corpos",
                href: "/artigos/tres-corpos"
            },
            {
                title: "Como buracos negros evaporam",
                href: "/artigos/buracos-negros"
            }
        ]
    },

    {
        id: "DEV-003",

        title: "Compiler",

        icon: PiCodeThin,

        description:
            "Visualizador das etapas internas de um compilador.",

        status: "planned",

        href: "/projetos/compiler",

        relatedPosts: [
            {
                title: "Criando um compilador simples",
                href: "/artigos/compilador"
            }
        ]
    },

    {
        id: "LAB-004",

        title: "Experimentos",

        icon: PiFlaskThin,

        description:
            "Coleção de pequenos experimentos interativos de Física.",

        status: "published",

        href: "/projetos/experimentos",

        relatedPosts: []
    },

    {
        id: "EDU-005",

        title: "Materiais Didáticos",

        icon: PiBookOpenThin,

        description:
            "Conteúdos gratuitos para professores e estudantes.",

        status: "active",

        href: "/projetos/materiais",

        relatedPosts: []
    }
];