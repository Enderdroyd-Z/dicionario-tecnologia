const dados = [
    {
        termo: "API",
        definicao: "API (Application Programming Interface) é um conjunto de definições e protocolos para integração entre softwares.",
        link: "https://https://www.alura.com.br/artigos/api?srsltid=AfmBOooMEZyPIYDYaKoh0QIf8K-NcPpZY4qh0QdQXlZbW4TmMCFBZk9I",
        tipo: "Protocolo",
        escola: "Backend",
        tags: "api API"
    },
    {
        termo: "CSS",
        definicao: "CSS (Cascading Style Sheets) é uma linguagem usada para descrever a apresentação de documentos HTML.",
        link: "https://www.alura.com.br/artigos/css?srsltid=AfmBOoqSps39xWdpFTmr5p_vkTfqMMdiy1Iwffbz-Uc141B_n4N7yXpM",
        tipo: "Linguagem",
        escola: "Frontend",
        tags: "CSS css"
    },
    {
        termo: "JavaScript",
        definicao: "JavaScript é uma linguagem de programação usada para criar interatividade em páginas web.",
        link: "https://www.alura.com.br/artigos/javascript?srsltid=AfmBOoqoj2RebTq7tz8tp-297LEw_dAd9vPHkFfbWSEYVdAB4vyKeRrR",
        tipo: "Linguagem",
        escola: "Frontend",
        tags: "JS javascript JavaScript JAVASCRIPT"
    },
    {
        termo: "HTML",
        definicao: "HTML (HyperText Markup Language) é a linguagem padrão usada para criar páginas da web.",
        link: "https://www.alura.com.br/artigos/html?srsltid=AfmBOooXdQ9a72O3tBzOpIvHs_HxwgzzZhCNkYQgQsct3nGSXdu6WYvR",
        tipo: "Linguagem",
        escola: "Frontend",
        tags: "HTMl html hypertext HyperText"
    },
    {
        termo: "SEO",
        definicao: "SEO (Search Engine Optimization) são técnicas usadas para melhorar a visibilidade de um site nos motores de busca, como o Google.",
        link: "https://www.alura.com.br/artigos/seo-o-que-e-boas-praticas-ferramentas-estrategia?srsltid=AfmBOoraciIzoX9WnrfsHYs_8Ch_fwjKr2DIzRQj2E502cdLWbqq2ATK",
        tipo: "Técnica",
        escola: "UX/UI Design",
        tags: "SEO seo"
    },
    {
        termo: "UX",
        definicao: "UX (User Experience) se refere à experiência do usuário ao interagir com um produto ou serviço, focando na facilidade e eficiência do uso.",
        link: "https://www.alura.com.br/artigos/ux-design?srsltid=AfmBOopxHsWtBMujrraeC9WB8-racYzTWk0Wo7cvp-ZJKTswpkQuwAO-",
        tipo: "Técnica",
        escola: "UX/UI Design",
        tags: "ux UX UX userexperience UserExperience"
    },
    {
        termo: "UI",
        definicao: "UI (User Interface) é a interface visual com a qual o usuário interage em um site ou aplicativo, como botões, menus e layouts.",
        link: "https://www.alura.com.br/artigos/ui-design?srsltid=AfmBOoqKHkc5i6L1k5_G7bQjJ25JFzBkEr_6esoLS_p4_uXaiAuDt5ik",
        tipo: "Técnica",
        escola: "UX/UI Design",
        tags: "Ui ui UI UserInterface"
    },
    {
        termo: "Responsividade",
        definicao: "Responsividade é a capacidade de um site se ajustar e funcionar corretamente em diferentes dispositivos e tamanhos de tela, como smartphones e computadores.",
        link: "https://www.alura.com.br/artigos/por-que-um-design-responsivo-e-importante-para-potencializar-seu-marketing",
        tipo: "Técnica",
        escola: "Frontend",
        tags: "responsivo Responsivo Responsividade responsividade"
    },
    {
        termo: "Frontend",
        definicao: "Frontend é a parte do desenvolvimento web que lida com o que o usuário vê e interage diretamente, como botões, layouts e textos.",
        link: "https://www.alura.com.br/artigos/do-zero-para-programador-front-end?srsltid=AfmBOorG0uvHN5JuQ6SOOZr3OK-IEFIozIG3cw8xzn0QXNvhWC4ji8CR#o-que-e-front-end?",
        tipo: "Área",
        escola: "Frontend",
        tags: "Front-End Frontend FrontEnd frontend front-end"
    },
    {
        termo: "Backend",
        definicao: "Backend é a parte do desenvolvimento que ocorre nos bastidores, como servidores e bancos de dados, garantindo que os sistemas funcionem corretamente.",
        link: "https://www.alura.com.br/artigos/backend?srsltid=AfmBOopOMF7O7gforI4p0FcEdIfAWwWJ9VjZcVz8tM5Lc_d8XqnsNBCr",
        tipo: "Área",
        escola: "Backend",
        tags: "Back-End BackEnd Backend backend back-end"
    },
    {
        termo: "Fullstack",
        definicao: "Fullstack se refere a um desenvolvedor que trabalha tanto no frontend quanto no backend de uma aplicação web.",
        link: "https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano?srsltid=AfmBOor6rDovnwuAQtPjH7mmLCQ8CbaJD4X4h-CbfTKXeVbzbuNYyVR7",
        tipo: "Área",
        escola: "Backend",
        tags: "FullStack full stack Fullstack FullStack"
    },
    {
        termo: "HTTP",
        definicao: "HTTP (HyperText Transfer Protocol) é o protocolo utilizado para transferir dados na web, permitindo a comunicação entre clientes e servidores.",
        link: "https://www.alura.com.br/artigos/http?srsltid=AfmBOooUdw4yI9XivZMx4qY_X1LRBnQLIXLzm_Fr2KtrCL7GsDNTjyM6",
        tipo: "Protocolo",
        escola: "Backend",
        tags: "http HTTP https HTTPS"
    },
    {
        termo: "URL",
        definicao: "URL (Uniform Resource Locator) é o endereço de um recurso na web, como uma página, arquivo ou imagem.",
        link: "https://www.alura.com.br/artigos/estrutura-url?srsltid=AfmBOoo9rkHAJJNYdKfI1hl9poOwmEKxPuEWDqZoyt5OSk0jKf7lJ-X9",
        tipo: "Conceito",
        escola: "Frontend",
        tags: "url URl"
    },
    {
        termo: "DOM",
        definicao: "DOM (Document Object Model) é a estrutura de um documento HTML ou XML, que pode ser manipulada dinamicamente com JavaScript para alterar o conteúdo da página.",
        link: "https://www.alura.com.br/artigos/o-que-e-o-dom?srsltid=AfmBOoo4QTdHg2-ajMUODlgrM_276WdnGORCWMzdiQ3nm_vFpgOAhCwx",
        tipo: "Conceito",
        escola: "Frontend",
        tags: "DOM dom"
    },
    {
        termo: "Git",
        definicao: "Git é um sistema de controle de versões que permite que desenvolvedores colaborem no código, acompanhando mudanças e revertendo versões se necessário.",
        link: "https://www.alura.com.br/artigos/o-que-e-git-github?srsltid=AfmBOor0VdlCIWa0QIJm2vi8Fwr1_H79rEWUWrI8hhVkaAjUF7kirgMs",
        tipo: "Ferramenta",
        escola: "DevOps",
        tags: "Git git"
    },
    {
        termo: "GitHub",
        definicao: "GitHub é uma plataforma que hospeda repositórios Git, permitindo colaboração em projetos de software de forma remota.",
        link: "https://www.alura.com.br/artigos/o-que-e-git-github?srsltid=AfmBOor0VdlCIWa0QIJm2vi8Fwr1_H79rEWUWrI8hhVkaAjUF7kirgMs",
        tipo: "Ferramenta",
        escola: "DevOps",
        tags: "GitHub github git hub"
    },
    {
        termo: "Framework",
        definicao: "Framework é um conjunto de ferramentas e bibliotecas que facilitam o desenvolvimento de aplicativos, fornecendo uma base para criar funcionalidades comuns.",
        link: "https://www.alura.com.br/artigos/framework-o-que-e-pra-que-serve-essa-ferramenta?srsltid=AfmBOopaicrYZWWrzalAKMM_7M59ctB9q3KtsofrChObFHXBSJOL3mYJ",
        tipo: "Conceito",
        escola: "Backend",
        tags: "framework Framework FrameWork"
    },
    {
        termo: "Python",
        definicao: "Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe clara e legibilidade, amplamente utilizada em desenvolvimento web, ciência de dados, automação e muito mais.",
        link: "https://www.alura.com.br/artigos/python?srsltid=AfmBOopCp8OgYXIeXHifrn0ALe1NNzJy_TYQisACNs_wju8jjFCJHd2b",
        tipo: "Linguagem",
        escola: "IA",
        tags: "python Python"
    },
    {
        termo: "C",
        definicao: "C é uma linguagem de programação de baixo nível que oferece grande controle sobre o hardware, sendo amplamente utilizada para desenvolver sistemas operacionais, drivers e aplicações de desempenho crítico.",
        link: "https://www.alura.com.br/artigos/comecando-a-programar-com-c?srsltid=AfmBOopx7I1h--IhIpM9AaJFtCT0_-Ax_FpZgX_hZbQpLzzwlq7Bj_-S",
        tipo: "Linguagem",
        escola: "Backend",
        tags: "c C"
    },
    {
        termo: "Lua",
        definicao: "Lua é uma linguagem de programação leve e rápida, frequentemente usada como linguagem de script embutida em aplicações, jogos e sistemas embarcados devido à sua flexibilidade e facilidade de integração.",
        link: "https://www.alura.com.br/artigos/desenvolvimento-de-jogos-em-lua",
        tipo: "Linguagem",
        escola: "IA",
        tags: "lua Lua LUA"
    },
    {
        termo: "React",
        definicao: "React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário, mantida pelo Facebook. Ela facilita a criação de componentes reutilizáveis e a gestão eficiente do estado da aplicação.",
        link: "https://www.alura.com.br/artigos/react-js?srsltid=AfmBOooqgep7uL1DWX5n0NApF8DNjuxUQOR2bZevxreDfn8EYNoX__g0",
        tipo: "Biblioteca",
        escola: "Frontend",
        tags: "react React reactjs"
    },
    {
        termo: "Angular",
        definicao: "Angular é um framework de desenvolvimento web de código aberto mantido pelo Google. Ele permite criar aplicações de página única (SPAs) de maneira estruturada e eficiente, com recursos avançados como injeção de dependências e data binding.",
        link: "https://www.alura.com.br/artigos/como-comecar-com-angular?srsltid=AfmBOop9g45qZHjPd4NHbilei927RxOyjVzv8uS_28Cw4-FCa3_pVfIo",
        tipo: "Framework",
        escola: "Frontend",
        tags: "angular Angular"
    },
    {
        termo: "Django",
        definicao: "Django é um framework web de alto nível para Python que promove o desenvolvimento rápido e limpo de aplicações web. Ele segue o princípio DRY (Don't Repeat Yourself) e inclui muitas funcionalidades prontas, como autenticação e administração.",
        link: "https://www.alura.com.br/artigos/django-framework?srsltid=AfmBOoo6D4DkoUNZnxTV2tgPd9wo_2A0ZPQHMsqitW7Bc5hIBJw_SyS4",
        tipo: "Framework",
        escola: "Backend",
        tags: "django Django"
    },
    {
        termo: "Flask",
        definicao: "Flask é um microframework web para Python que permite desenvolver aplicações web de forma simples e flexível. É ideal para projetos menores ou quando se deseja mais controle sobre os componentes utilizados.",
        link: "https://www.alura.com.br/artigos/django-ou-flask",
        tipo: "Framework",
        escola: "Backend",
        tags: "flask Flask"
    },
    {
        termo: "Swift",
        definicao: "Swift é uma linguagem de programação desenvolvida pela Apple para criar aplicativos para iOS, macOS, watchOS e tvOS. Ela é conhecida por sua performance e segurança, além de ser fácil de aprender.",
        link: "https://www.alura.com.br/conteudo/swift-entendendo-linguagem?srsltid=AfmBOopSOUK65GVoJfkDOVWzJEtopkOQKzyIoB39YUIcGbvqiDAXme9l",
        tipo: "Linguagem",
        escola: "Mobile",
        tags: "swift Swift"
    },
    {
        termo: "Kotlin",
        definicao: "Kotlin é uma linguagem de programação estática que roda na JVM (Java Virtual Machine) e é totalmente interoperável com Java. É amplamente utilizada para desenvolvimento Android e é conhecida por sua concisão e segurança.",
        link: "https://www.alura.com.br/artigos/kotlin?srsltid=AfmBOorH9xbSZacDKqMdwhwxPBXyJYKvPtP9yzUxNqF5gZTNB7ngKXip",
        tipo: "Linguagem",
        escola: "Mobile",
        tags: "Kotlin kotlin"
    },
    {
        termo: "Go",
        definicao: "Go, também conhecida como Golang, é uma linguagem de programação desenvolvida pela Google. Ela é famosa por sua eficiência, simplicidade e suporte a concorrência, sendo amplamente utilizada para desenvolvimento de sistemas distribuídos e escaláveis.",
        link: "https://www.alura.com.br/conteudo/golang?srsltid=AfmBOoqe-R8cc014xL3qIKqdOgplDSHUWgivp5BgD2WBtUJb6QEQjazb",
        tipo: "Linguagem",
        escola: "Backend",
        tags: "go Go GO"
    },
    {
        termo: "SQL",
        definicao: "SQL (Structured Query Language) é a linguagem padrão para gerenciar e manipular bancos de dados relacionais. Ela é utilizada para consultar, inserir, atualizar e deletar dados armazenados.",
        link: "https://www.alura.com.br/artigos/o-que-e-sql?srsltid=AfmBOopUd5NQEhw81G3o4Qw4ke01My2-V8XjVAnGHv4VU1w9UizvI2MB",
        tipo: "Linguagem",
        escola: "Backend",
        tags: "sql SQL Sql"
    },
    {
        termo: "TypeScript",
        definicao: "TypeScript é uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática ao JavaScript, facilitando a manutenção e escalabilidade de grandes projetos.",
        link: "https://www.alura.com.br/artigos/o-que-e-typescript?srsltid=AfmBOopf2qeGO54fGAFkdBfjCfpkJfFH-lMhAaRH4_MQvv9Y49dDzmru",
        tipo: "Linguagem",
        escola: "Frontend",
        tags: "typescript Typescript TypeScript"   
    },
    {
        termo: "SaaS",
        definicao: "SaaS (Software as a Service) é um modelo de distribuição de software onde as aplicações são hospedadas por um provedor e acessadas pela internet, geralmente por meio de um navegador.",
        link: "https://www.alura.com.br/artigos/css-menos-sofrido-com-sass?srsltid=AfmBOopb9E3mMyWChe2WCwm1y3EnwT78-1dfEl2XcS5-hNYEoZ-iKbNd",
        tipo: "Conceito",
        escola: "Frontend",
        tags: "SaaS saas Saas"
    },
    {
        termo: "DevOps",
        definicao: "DevOps é uma prática que combina desenvolvimento de software (Dev) e operações de TI (Ops) para melhorar a colaboração e a produtividade por meio da automação e integração contínuas.",
        link: "https://www.alura.com.br/artigos/devops-o-que-e?srsltid=AfmBOoqpGSN_w9alAzVGN0wQcReP_bkM4YuwRx6C47NF5NQW-3v15v2P",
        tipo: "Prática",
        escola: "DevOps",
        tags: "devops Devops DevOps devOps"
    },
    {
        termo: "CI/CD",
        definicao: "CI/CD (Continuous Integration/Continuous Deployment) são práticas de desenvolvimento que visam automatizar o processo de integração e entrega contínua de código, facilitando o lançamento frequente e confiável de atualizações.",
        link: "https://www.alura.com.br/artigos/flutter-ci-cd?srsltid=AfmBOoqwSLfwQcmu7ZW0cmMS-Cs5lPcDRzVN-FqQhItCFdidmwNqElLP",
        tipo: "Prática",
        escola: "Mobile",
        tags: "ci/cd Ci Cd ci cd CI/CD"
    },
    {
        termo: "Docker",
        definicao: "Docker é uma plataforma de containerização que permite criar, implantar e executar aplicações em containers, garantindo que elas funcionem de forma consistente em diferentes ambientes.",
        link: "https://www.alura.com.br/artigos/comecando-com-docker#:~:text=O%20Docker%20%C3%A9%20um%20sistema%20de%20virtualiza%C3%A7%C3%A3o%20n%C3%A3o%20convencional.&text=Em%20virtualiza%C3%A7%C3%B5es%20convencionais%20temos%20um,uma%20instala%C3%A7%C3%A3o%20completa%20do%20S.O.",
        tipo: "Ferramenta",
        escola: "DevOps",
        tags: "docker Docker"
    },
    {
        termo: "Kubernetes",
        definicao: "Kubernetes é uma plataforma de código aberto para automação de implantação, escalonamento e gerenciamento de aplicações em containers, como Docker.",
        link: "https://www.alura.com.br/artigos/o-que-e-kubernetes?srsltid=AfmBOorSB5O3nCNZfWmlikvMVc5hx-fjujuZJs3KYnGFdi6nBsVVpF4E",
        tipo: "Ferramenta",
        escola: "DevOps",
        tags: "kubernetes Kubernetes kubernets Kubernets"
    },
    {
        termo: "REST",
        definicao: "REST (Representational State Transfer) é um estilo arquitetônico para criar APIs que utilizam métodos HTTP para comunicação entre clientes e servidores, permitindo a interação com recursos de forma eficiente e escalável.",
        link: "https://www.alura.com.br/artigos/rest-conceito-e-fundamentos?srsltid=AfmBOoqXLezwX3J7P5WgU-81sg9l1ItHZPtbZenmBpkbjBanwz7Icu8P",
        tipo: "Protocolo",
        escola: "Backend",
        tags:  "Rest rest REST"
    },
    {
        termo: "GraphQL",
        definicao: "GraphQL é uma linguagem de consulta para APIs que permite que o cliente solicite exatamente os dados de que precisa e nada mais, oferecendo mais flexibilidade e eficiência na comunicação com o servidor.",
        link: "https://www.alura.com.br/artigos/guia-graphql-pessoas-que-desenvolvem-frontend?srsltid=AfmBOoqexOa3UToVIXHkPftDbuLY50VHh5wrqn8EfHhMq19f7QBeIylS",
        tipo: "Protocolo",
        escola: "Backend",
        tags: "GraphQl graphql Graphql graphQL"
    },
    {
        termo: "NoSQL",
        definicao: "NoSQL refere-se a um tipo de banco de dados que não usa a estrutura relacional tradicional, frequentemente usado para grandes volumes de dados não estruturados ou semi-estruturados.",
        link: "https://www.alura.com.br/artigos/sql-nosql-bancos-relacionais-nao-relacionais?srsltid=AfmBOoo01lIsltaiFjRMnqVTZsGQYcizT5XxneR420tDCB35HCAdXklv",
        tipo: "Banco de dados",
        escola: "Backend",
        tags: "nosql NoSQL noSQL"
    },
    {
        termo: "MongoDB",
        definicao: "MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em formato BSON (Binary JSON), permitindo consultas flexíveis e escalabilidade horizontal.",
        link: "https://www.alura.com.br/artigos/mongodb-o-banco-baseado-em-documentos?srsltid=AfmBOoojdWJjHsWXTVYTR8mtd6bCC8LxRPdK5gGIwybQrGpWkv1Hq2Hm",
        tipo: "Banco de dados",
        escola: "Backend",
        tags: "mongodb Mongodb MongoDB MongoDb mongoDb"
    },
    {
        termo: "Redis",
        definicao: "Redis é um banco de dados em memória, estruturado como um dicionário de chave-valor, amplamente utilizado como cache para melhorar o desempenho de aplicações e como armazenamento de dados temporários.",
        link: "https://www.alura.com.br/artigos/redis-instalacao-primeiros-comandos?srsltid=AfmBOorxlfvH-FhxM2jg3FE1VjYuYlhtjKWDna3fhXg_FxKABhUU0nUg",
        tipo: "Banco de dados",
        escola: "Backend",
        tags: "redis Redis"
    },
    {
        termo: "Elasticsearch",
        definicao: "Elasticsearch é um mecanismo de busca e análise distribuído baseado em Lucene, usado para indexação e pesquisa de grandes volumes de dados de forma rápida e escalável.",
        link: "https://www.alura.com.br/artigos/buscas-eficientes-com-elasticsearch?srsltid=AfmBOoqQu6mBHdEOges7hZAW26VTjrTHdTB1tNnLCccV7xTY0lGKLO1l",
        tipo: "Ferramenta",
        escola: "Backend",
        tags: "elasticsearch ElasticSearch Elasticsearch"
    },
    {
        termo: "Jenkins",
        definicao: "Jenkins é uma ferramenta de automação de código aberto usada para integrar e entregar continuamente código, facilitando o processo de construção, teste e implantação de software.",
        link: "https://www.alura.com.br/conteudo/pipeline-ci-jenkins-docker?srsltid=AfmBOoouC_JF_JyjubRKQuuolJhPLgE5_7VViHQR6LTv4SBP8pAQLGpg",
        tipo: "Ferramenta",
        escola: "DevOps",
        tags: "Jenkins jenkins"
    },
    {
        termo: "Selenium",
        definicao: "Selenium é uma ferramenta de teste automatizado para aplicações web, que permite criar scripts de teste em várias linguagens de programação e simular interações com a interface do usuário.",
        link: "https://www.alura.com.br/conteudo/selenium-csharp-webdriver?srsltid=AfmBOopK1GG6agzwF9-bhiQctuz4MyY5MbMlhxvQkV7D5zi1LKqlU0ko",
        tipo: "Ferramenta",
        escola: "Programação",
        tags: "selenium Selenium"
    },
    {
        termo: "TDD",
        definicao: "TDD (Test-Driven Development) é uma prática de desenvolvimento onde os testes são escritos antes do código, guiando a implementação e garantindo que o código atenda aos requisitos especificados.",
        link: "https://www.alura.com.br/videos/o-que-e-test-driven-development-tdd--c1137?srsltid=AfmBOop389ZXxTillAwCQdiMQL3LRykMrMYnY55f1D93F1Y4bqZsA3Ci",
        tipo: "Prática",
        escola: "DevOps",
        tags: "tdd TDD Tdd"
    },
    {
        termo: "BDD",
        definicao: "BDD (Behavior-Driven Development) é uma abordagem de desenvolvimento que incentiva a colaboração entre desenvolvedores, QA e stakeholders, utilizando especificações de comportamento para guiar o desenvolvimento.",
        link: "https://www.alura.com.br/videos/o-que-e-behavior-driven-development-bdd--c284?srsltid=AfmBOor0yKUmIV26Y2tgIfPgCPwWwp5igmuPNPD05dTk2n8grsUt4OlH",
        tipo: "Prática",
        escola: "DevOps",
        tags: "bdd BDD Bdd"
    },
    {
        termo: "ORM",
        definicao: "ORM (Object-Relational Mapping) é uma técnica que permite a conversão entre objetos em linguagens de programação orientadas a objetos e registros em bancos de dados relacionais.",
        link: "https://www.alura.com.br/artigos/gorm-orm-mapeamento-objeto-relacional-go?srsltid=AfmBOoqm4O8gexY6RnrKkA3zdartyVu2FR3fnMUVb2Av6twhDon6gqzo",
        tipo: "Técnica",
        escola: "Backend",
        tags: "orm ORM Orm"
    }
];