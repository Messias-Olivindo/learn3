// Importar as bibliotecas
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";
import Float "mo:base/Float";

actor {
  // Autentificação de usuário
  // Tipar o usuário
  type Usuario = {
    id : Nat;
    email : Text;
    senha : Text;
    github : Text;
    qtdIcp : Float;
  };

  //Buffer para guardar os usuários
  var usuarios : Buffer.Buffer<Usuario> = Buffer.Buffer<Usuario>(10);
  var nextId : Nat = 1; // Add this to track the next available ID

  //Função para adicionar os usuários
  public func adicionarUsuario(usuEmail : Text, usuSenha : Text, usuGithub : Text) : async () {
    //Novo usuario adicionado
    let usu : Usuario = {
      id = nextId;
      email = usuEmail;
      senha = usuSenha;
      github = usuGithub;
      qtdIcp = 0;
    };
    
    nextId += 1;

    //Adicionar usuários
    usuarios.add(usu);
  };

  //Função para verificar se o usuários está cadastrado
  public func verificarUsuario(usuEmail : Text, usuSenha : Text) : async (Bool) {
    //Usuário colocado
    let usu : Usuario = {
      id = 0;
      email = usuEmail;
      senha = usuSenha;
      github = "";
      qtdIcp = 0;
    };
    //Comparar email e senha colocados com os usuários já cadastrados
    func localizaUsuario(x : Usuario, y : Usuario) : Bool {
      return (x.email == y.email) and (x.senha == y.senha);
    };
    //Pesquisar Index do usuário cadastrado
    let index : ?Nat = Buffer.indexOf(usu, usuarios, localizaUsuario);
    //Resultados da procura
    switch (index) {
      case (null) {
        return false; //Não encontrado
      };
      case (?i) {
        return true; //Usuário encontrado
      };
    };
  };

  // Função para localizar o usuário pelo id
  public func localizaUsuarioId(id : Nat) : async (?Usuario) {
    let usuariosArray = Buffer.toArray(usuarios);

    for (usu in usuariosArray.vals()) {
      if (usu.id == id) {
        return ?usu;
      };
    };

    return null;
  };

  // Função para localizar o usuário pelo email
  public func localizaUsuario(email : Text) : async (?Usuario) {
    let usuariosArray = Buffer.toArray(usuarios);

    for (usu in usuariosArray.vals()) {
      if (usu.email == email) {
        return ?usu;
      };
    };

    return null;
  };

  // Função para aumentar a quantidade de ICP
  public func aumentarIcp(email : Text, maisIcp : Float) : async (Float) {
    let usuarioOpt = await localizaUsuario(email);
    switch (usuarioOpt) {
      case (null) { return -1 };
      case (?usuario) {
        if (usuarios.size() == 0) {
          return -1;
        };
        
        var i = 0;
        while (i < usuarios.size()) {
          let usu = usuarios.get(i);
          if (usu.email == email) {
            let updatedUsuario : Usuario = {
              id = usu.id;
              email = usu.email;
              senha = usu.senha;
              github = usu.github;
              qtdIcp = usu.qtdIcp + maisIcp;
            };
            
            usuarios.put(i, updatedUsuario);
            return updatedUsuario.qtdIcp;
          };
          i += 1;
        };
        return -1;
      };
    };
  };

  // Retornar o usuário em array para ser serializável
  public func arrayUsuarios() : async [Usuario] {
    return Buffer.toArray(usuarios);
  };

  // Tipar aulas
  type Aula = {
    id : Nat;
    content : Content;
  };
  //Tipar o conteudo
  type Content = {
    tipo : Text;
    texto : Text;
    alternativas : ?[Text];
    respostaCerta : ?Text;
    url : ?Text;
  };

  let aulas : [Aula] = [
    {
      id = 1;
      content : Content = {
        tipo = "conteúdo";
        texto = "A Internet Computer (ICP) é uma blockchain Layer 1 de propósito geral, projetada para o desenvolvimento de DAPPs (Aplicações Descentralizadas) escaláveis, com alto desempenho e diversos diferenciais inovadores. Entre eles, destaca-se pela sua arquitetura com a possibilidade de hospedar DApps 100% on-chain, sem necessidade de servidores tradicionais, permitindo a hospedagem de frontend, backend e armazenamento de dados. Além disso, a ICP permite a integração direta com APIs Web2 e outras blockchains, como o Bitcoin, por meio do projeto Chain Fusion. Com essa abordagem, a ICP pode ser vista como uma solução completa para a Web3, proporcionando maior descentralização, interoperabilidade e eficiência no desenvolvimento de aplicações blockchain.";
        alternativas = null;
        respostaCerta = null;
        url = null;
      };
    },
    {
      id = 2;
      content : Content = {
        tipo = "vídeo";
        texto = "Assista um vídeo explicando com mais detalhes sobre a ICP";
        alternativas = null;
        respostaCerta = null;
        url = ?"www";
      };
    },
    {
      id = 3;
      content : Content = {
        tipo = "pergunta";
        texto = "A ICP é utilizada par";
        alternativas = ?[
          "A",
          "B",
          "C",
          "D",
        ];
        respostaCerta = ?"A";
        url = null;
      };
    },
  ];

  //Acessar todas as aulas
  public func listaAulas() : async [Aula] {
    return aulas;
  };

  //Acessar o assunto relacionado
  public func acessarAulas(idAula : Nat) : async (?Aula) {
    //Função para procurar o id
    let resultado = Array.find<Aula>(
      aulas,
      //Verificar se o id de algum dos elementos do array é igual ao inserido
      func(aula) {
        aula.id == idAula;
      },
    );

    //Depois de encontrar
    return resultado;
  };

};
