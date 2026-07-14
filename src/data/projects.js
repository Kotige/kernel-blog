import {
    PiDatabaseThin,
    PiRocketThin,
    PiCodeThin,
    PiFlaskThin,
    PiBookOpenThin,
} from "react-icons/pi";

const projects = [
    {
        id: 1,
        title: "Ciência de Dados",
        description:
            "O núcleo de ideias que conecta ciência, programação e mundos imaginários.",
        icon: PiDatabaseThin,
        href: "/projetos/kernel",
    },
    {
        id: 2,
        title: "Simulações de Física",
        description:
            "Explorando conceitos através de simulações interativas.",
        icon: PiRocketThin,
        href: "/projetos/simulacoes",
    },
    {
        id: 3,
        title: "Ferramentas",
        description:
            "Pequenas ferramentas para resolver grandes problemas.",
        icon: PiCodeThin,
        href: "/projetos/ferramentas",
    },
    {
        id: 4,
        title: "Experimentos",
        description:
            "Protótipos, testes e ideias em constante evolução.",
        icon: PiFlaskThin,
        href: "/projetos/experimentos",
    },
    {
        id: 5,
        title: "Materiais Didáticos",
        description:
            "Conteúdo para aprender e ensinar física e programação.",
        icon: PiBookOpenThin,
        href: "/projetos/materiais",
    },
];

export default projects;