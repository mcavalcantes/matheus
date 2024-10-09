import {
  Skill,
  Experience,
  Project,
  Achievement,
  Social,
} from "./interfaces";

export const SKILLS: Skill[] = [
  {
    GROUP: "Linguagens",
    LIST: [
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    GROUP: "Tecnologias",
    LIST: [
      "React",
      "Tailwind CSS",
    ],
  },
  {
    GROUP: "Outros",
    LIST: [
      "Inglês",
      "Word",
      "PowerPoint",
      "Excel",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    TITLE: "OCCAM Engenharia",
    SUBTITLE: "Assessor de Marketing",
    START_DATE: "ago. 2024",
    END_DATE: "o momento",
    BULLETS: [
      "Sou responsável por administrar as contas de redes sociais da OCCAM.",
      "Elaboro publicações pertinentes à nossa área de atuação e ao que fazemos.",
      "Procuro por eventos, cursos, e oportunidades relevantes para divulgar entre os membros da empresa.",
    ],
  },
  {
    TITLE: "OCCAM Engenharia",
    SUBTITLE: "Trainee",
    START_DATE: "mai. 2024",
    END_DATE: "ago. 2024",
    BULLETS: [
      "Atuei semanalmente em todos os setores da empresa, realizando atividades pertinentes a cada um deles.",
      "Desenvolvi, juntamente a outros trainees, um projeto front-end de website empresarial.",
      "Fui responsável por contatar o cliente, coletar e analisar os requisitos, e programar o website.",
    ],
  },
  {
    TITLE: "UTFPR",
    SUBTITLE: "Monitor de Cálculo I",
    START_DATE: "set. 2023",
    END_DATE: "jul. 2024",
    BULLETS: [
      "Atendi de forma presencial e remota os alunos da universidade para solução de dúvidas na disciplina.",
      "Preparei e corrigi materiais didáticos usados por professores (listas de exercícios, gabaritos, resoluções).",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    TITLE: "DerivaDash",
    HREF: "https://mcavalcantes.github.io/derivadash/",
    DESCRIPTION: "Aplicação web que serve como uma ferramenta de estudos " +
    "destinada a estudantes de engenharia, visando reforçar o aprendizado das " +
    "regras de derivação na disciplina de cálculo de uma maneira ágil, em um formato " +
    "de quiz. Feito com HTML, CSS, e JavaScript.",
    BULLETS: [
      "Página interativa que mostra uma questão de múltipla escolha a ser respondida pelo usuário.",
      "Personalização da página com três temas distintos, com feedback visual para erros e acertos.",
      "Opção para avanço manual ou automático dos exercícios mostrados na página.",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    TITLE: "5ª Olimpíada Regional de Derivadas",
    SUBTITLE: "Semifinalista",
    DATE: "set. 2024",
    DESCRIPTION: "Olimpíada universitária de derivadas (cálculo) ocorrida na " +
    "Unicamp, onde participaram 44 alunos das principais universidades do Brasil.",
  },
  {
    TITLE: "Pato'",
    SUBTITLE: "1º lugar",
    DATE: "mai. 2024",
    DESCRIPTION: "Torneio universitário de derivadas (cálculo) sediado anualmente na " +
    "UTFPR de Pato Branco.",
  },
];

export const SOCIALS: Social[] = [
  {
    NAME: "Email",
    HREF: "mailto:matheuscavalcantes.mc@gmail.com",
    ICON: {
      BLACK: "/src/assets/iconmonstr-email-4-black.svg",
      WHITE: "/src/assets/iconmonstr-email-4-white.svg",
    },
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/mcavalcante.s/",
    ICON: {
      BLACK: "/src/assets/iconmonstr-instagram-11-black.svg",
      WHITE: "/src/assets/iconmonstr-instagram-11-white.svg",
    },
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ms-cavalcante/",
    ICON: {
      BLACK: "/src/assets/iconmonstr-linkedin-1-black.svg",
      WHITE: "/src/assets/iconmonstr-linkedin-1-white.svg",
    },
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/mcavalcantes",
    ICON: {
      BLACK: "/src/assets/iconmonstr-github-1-black.svg",
      WHITE: "/src/assets/iconmonstr-github-1-white.svg",
    },
  },
  {
    NAME: "Spotify",
    HREF: "https://open.spotify.com/user/rbon5uxdcd2qfk7oc26ezujmm",
    ICON: {
      BLACK: "/src/assets/iconmonstr-spotify-1-black.svg",
      WHITE: "/src/assets/iconmonstr-spotify-1-white.svg",
    },
  },
];
