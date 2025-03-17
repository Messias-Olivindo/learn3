//Importar as bibliotecas
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";
import Buffer "mo:base/Buffer";

actor {
  //Tipar o usuário
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
  public func verificarUsuario(usuEmail : Text, usuSenha : Text) : async(Bool) {
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
    switch(index){
      case(null){ 
        return false; //Não encontrado
      };
      case(?i){
        return true; //Usuário encontrado
      };
    };
  };

  //Retornar o usuário em array para ser serializável
  public func arrayUsuarios() : async[Usuario]{
    return Buffer.toArray(usuarios);
  };

};
