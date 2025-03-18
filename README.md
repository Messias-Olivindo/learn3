# `Learn3: Ensinando Web3 e Blockchain de forma gamificada!`

## 🚩Introdução:

&nbsp;&nbsp;&nbsp;&nbsp;O projeto Learn3 é uma plataforma web que transforma o aprendizado de tecnologias da Web3 e criptomoedas em uma experiência gamificada, semelhante ao Duolingo e Mimo. Nossa missão é tornar o processo de aprendizado mais envolvente e acessível, permitindo que qualquer pessoa possa explorar e dominar conceitos essenciais como blockchain, smart contracts e desenvolvimento descentralizado de forma prática e interativa.

## 📊Análise de negócios:

Acesse a análise de negócios detalhada pelo link:
https://docs.google.com/document/d/1no7wOgkUuh_Apat3fgYrbDwAXHK91m81nj9fQtNJzdI/edit?tab=t.0#heading=h.eptlryf7cdbx

## 📖User Story:

&nbsp;&nbsp;&nbsp;&nbsp; Na nossa plataforma, a jornada do usuário começa com um simples cadastro ou login. Assim que estiver logado, ele pode explorar os cursos disponíveis, escolher uma aula e embarcar em desafios interativos. A cada missão concluída, o usuário é recompensado com uma quantia em ICP, incentivando sua progressão. Com isso, ele pode seguir para novas lições e continuar aprimorando suas habilidades de forma envolvente e dinâmica. 

## 👨‍💻Tecnologias:
### 🖥️ Frontend – Interface Intuitiva e Gamificada
- React.js – Framework para construção da interface web interativa.
- Next.js – Utilizado para otimização de performance, SEO e renderização eficiente.
- Tailwind CSS – Biblioteca para estilização rápida e flexível, garantindo um design moderno e acessível.
- Framer Motion – Para animações suaves e responsivas que tornam a experiência mais dinâmica.
  
### ⚙️ Backend – Gerenciando Dados e Lógica do Sistema
- Motoko – Linguagem nativa do Internet Computer (ICP), responsável pela lógica dos smart contracts da plataforma.
- Canister Smart Contracts – Utilizados para armazenar progresso, recompensas e NFTs diretamente na blockchain do ICP.

## 🗺️RoadMap:

&nbsp;&nbsp;&nbsp;&nbsp;O roadmap serve como um planejamento estratégico do projeto, estabelecendo metas, prioridades e uma linha do tempo para implementação.

<div align="center">
<sub>Quadro 01 - Roadmap projeto Learn3.</sub>
</div>

<div align="center">

| Etapa | Objetivo |
|--------------|----------|
| **Hackathon Hack The Future 3:** | Ensinar tecnologias Web3 de forma gamificada, com o primeiro módulo focado em Motoko. |
|| Criar um ranking que premia os alunos mais engajados com ICPs. |
|| Criar uma seção de cases comuns em entrevistas de programação. |
|| Ao final de cada módulo, o aluno recebe um NFT como certificado para sua carteira. |
| **Possíveis aplicações futuras:** ||
| **Q2 2025** | Lançamento do primeiro módulo educativo focado em Motoko. |
|| Implementação da tokenização do aprendizado e sistema de recompensas. |
| **Q3 2025** | Desenvolvimento da seção de cases e emissão de NFTs certificados. |
|| Expansão com novos módulos sobre smart contracts, Ethereum e mineração. |
| **Q4 2025** | Adição de novas funcionalidades como sistema de ofensiva e dashboard para professores. |
|| Desenvolvimento e lançamento da versão mobile. |
| **Q1 2026** | Estabelecimento de parcerias. |


</div>
<div align="center">
<sub>Fonte: Material produzido pela equipe, 2025.</sub>
</div>

## 🛠️Casos de teste:

&nbsp;&nbsp;&nbsp;&nbsp;Os casos de teste são uma forma de garantir que a plataforma funcione de maneira confiável, proporcionando uma experiência fluida e sem erros para os usuários. A seguir estão algumas das principais categorias de testes implementadas:
<div align="center">
<sub>Quadro 02 - Casos de teste Learn3.</sub>
</div>

<div align="center">

| **Categoria**      | **Caso de Teste**              | **Critério de Sucesso**             |
|--------------------|--------------------------------|-------------------------------------|
| **Funcional**     | Criar conta e fazer login      | Usuário consegue acessar a plataforma |
|                  | Escolher um curso              | Curso selecionado corretamente     |
|                  | Completar uma missão           | Missão marcada como concluída      |
|                  | Receber recompensa (ICP fake)  | Recompensa exibida no perfil       |
| **UI/UX**        | Interface responsiva           | Site ajusta bem em mobile e desktop |
|                  | Navegação intuitiva            | Usuário encontra as funções facilmente |
| **Performance**  | Carregamento rápido            | Página abre em menos de 5 segundos |
| **Segurança**    | Login seguro                   | Não permite login com senha errada |
| **Integração**   | Conectar carteira Web3 (mock)  | Carteira é reconhecida no sistema  |
</div>
<div align="center">
<sub>Fonte: Material produzido pela equipe, 2025.</sub>
</div>


## Executando o projeto localmente:

Se você quiser executar o projeto localmente, você pode deve usar os seguintes comandos:

```bash
dfx start --background
dfx deploy
```

Com os comandos executados, o aplicativo estará disponível em `http://localhost:4943?canisterId={asset_canister_id}`.

Para aprender mais sobre a linguagem Motoko e o ambiente da ICP, veja os seguintes documentos disponíveis onlite:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)
