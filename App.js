//Importar o React e o useState
//Use state serve para criar valores que podem mudar na tela
import React, {useState} from "react";
//Importa componentes nativos do react native
import { 
  View , //area da tela
  Text, //texto
  Button, //botão
  StyleSheet, //estilos
  TouchableOpacity //botao customizavel
}from "react-native-web";

//componente principal app
export default function App(){
  //cria um estado (variavel) chamado "pontos"
  //pontos = valor atual
  //setPontos = funcao para alterar p valor
  //0 = valor inicial
  const [pontos,setPontos] = useState(0);
  //funcao para aumentar um ponto

  function aumentar(){
    //pega o valor auto e soma +1
    setPontos(pontos+1);
    
  }
  //funcao para diminuir um ponto
  function diminuir(){
    //pega o valor auto e subtrai -1
    setPontos(pontos-1);
  }
  //funcao para resetar o contador
  function resetar(){
    //voltar o valor para 0
    setPontos(0);
  }

  //tudo que esta no return aparece na tela 

  return(
    // view principal do app
    <View style={styles.container}>
      {/* titulo do app */}

      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      {/* mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>

      {/* area dos botoes +1 e -1 */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //tela
  container: {
    //ocupa a tela todo
    flex: 1,
    //cor
    backgroundColor: '#121212',
    //centralizar na horizontal
    alignItems: 'center',
    //centralizar na vertical
    justifyContent: 'center',
    //espaço interno
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    color: '#00ff88',
    // negrito
    fontWeight: 'bold',
    //espaço abaixo
    marginBottom: 30,
  },

  pontos: {
    fontSize: 80,
    color: '#ffffff',
    marginBottom: 40,
    fontWeight: 'bold',
  },

  areaBotoes: {
    //diexa um botão do lado do outro
    flexDirection: 'row',
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#00ff88',
    //espaçamneto vertical
    paddingVertical: 15,
    //espaçamento horizontal
    paddingHorizontal: 30,
    borderRadius: 12,
    marginHorizontal: 10,
  },

  botaoReset: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  textoBotao: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
});