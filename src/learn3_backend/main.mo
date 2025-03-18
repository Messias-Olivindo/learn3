// Importar as bibliotecas
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";

actor {
  // Autentificação de usuário
  // Tipar o usuário
  type Usuario = {
    email : Text;
    senha : Text;
    github : Text;
  };

  //Buffer para guardar os usuários
  var usuarios : Buffer.Buffer<Usuario> = Buffer.Buffer<Usuario>(10);

  //Função para adicionar os usuários
  public func adicionarUsuario(usuEmail : Text, usuSenha : Text, usuGithub : Text) : async () {
    //Novo usuario adicionado
    let usu : Usuario = {
      email = usuEmail;
      senha = usuSenha;
      github = usuGithub;
    };
    //Adicionar usuários
    usuarios.add(usu);
  };

  //Função para verificar se o usuários está cadastrado
  public func verificarUsuario(usuEmail : Text, usuSenha : Text) : async (Bool) {
    //Usuário colocado
    let usu : Usuario = {
      email = usuEmail;
      senha = usuSenha;
      github = "";
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

  //Retornar o usuário em array para ser serializável
  public func arrayUsuarios() : async [Usuario] {
    return Buffer.toArray(usuarios);
  };

  //Tipar aulas
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
        texto = "assunto1";
        alternativas = null;
        respostaCerta = null;
        url = null;
      };
    },
    {
      id = 2;
      content : Content = {
        tipo = "vídeo";
        texto = "assunto2";
        alternativas = null;
        respostaCerta = null;
        url = ?"www";
      };
    },
    {
      id = 3;
      content : Content = {
        tipo = "pergunta";
        texto = "assunto3";
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
