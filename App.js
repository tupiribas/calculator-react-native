import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default function App() {

  const Separador = () => (
    <View style={styles.separator} />
  );

  const [telaCalculo, setTelaCalculo] = useState("");
  const [telaResposta, setTelaResposta] = useState("");

  function verificaValorNulo(valor, operador) {
    if (valor == " ") {
      return valor = 0;
    }
    else {
      return valor = parseFloat(valor);
    }
  }

  function pressionarTeclaNumerica(botao) {
    setTelaCalculo(telaCalculo+botao);
  }

  function trocarSinalNumerico(telaCalculo) {
    setTelaCalculo(telaCalculo*(-1));
  }

  function calcular(calculo) {
    if (calculo.includes("+")) {
      var soma, valor0, valor1;
      var arrayCalculo = calculo.split("+", 2);

      valor0 = verificaValorNulo(arrayCalculo[0], "+");
      valor1 = verificaValorNulo(arrayCalculo[1], "+");

      soma = valor0 + valor1;
      setTelaResposta(valor0 + " + " + valor1 + " = " + soma);
    }
    else if (calculo.includes("  -  ")) {
      var subtracao, valor0, valor1;
      var arrayCalculo = calculo.split("  -  ", 3);

      valor0 = verificaValorNulo(arrayCalculo[0], "  -  ");
      valor1 = verificaValorNulo(arrayCalculo[1], "  -  ");
      subtracao = valor0 - valor1; 
      setTelaResposta(arrayCalculo[0] + " - " + valor1 + " = " + subtracao);
    }
    else if (calculo.includes("x")) {
      var multiplicacao, valor0, valor1;
      var arrayCalculo = calculo.split("x", 2);

      valor0 = verificaValorNulo(arrayCalculo[0], "-");
      valor1 = verificaValorNulo(arrayCalculo[1], "-");

      multiplicacao = valor0 * valor1; 
      setTelaResposta(valor0 + " x " + valor1 + " = " + multiplicacao);
    }
    else if (calculo.includes("/")) {
      var divisao, valor0, valor1;
      var arrayCalculo = calculo.split("/", 2);

      valor0 = verificaValorNulo(arrayCalculo[0], "/");
      valor1 = verificaValorNulo(arrayCalculo[1], "/");

      divisao = valor0 / valor1; 
      setTelaResposta(valor0 + " / " + valor1 + " = " + divisao);
    }
  }

  function resetarCaracter(tamanhoTelaDeCaculo) {
    if (tamanhoTelaDeCaculo) {
      tamanhoTelaDeCaculo = tamanhoTelaDeCaculo.substr(0, tamanhoTelaDeCaculo -1);
      tamanhoTelaDeCaculo.focus();
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.styleContainerTela}>
        <View style={styles.styleRow}>
          <View style={{flexDirection: 'column'}}>
            <TextInput value={telaCalculo} style={styles.tela}/>
            <TextInput value={telaResposta} style={styles.tela}/>
          </View>
          <View style={styles.botaoNumerico}>
            <Button title="=" onPress={() => {calcular(telaCalculo)}}/>
          </View>
        </View>

        <View style={styles.styleRow}>
          <View style={styles.botaoNumerico}>
            <Button title="C" onPress={/*Limpar*/() => {setTelaCalculo("")}}/>
          </View>
          <View style={styles.botaoNumerico}>
            <Button title="T" onPress={/*Transformador*/() => {pressionarTeclaNumerica("L")}}/>
          </View>
          
          <View style={styles.botaoNumerico}>
            <Button title="H" /*Histórico*//*<Icon name="H" size={26} color="white"/>*/ onPress={() => {pressionarTeclaNumerica("L")}}/>
          </View>
        </View>
        <Separador />
      </View>

      <View style={styles.styleRow}>
        <View style={styles.botaoNumerico}>
          <Button title="7" onPress={() => {pressionarTeclaNumerica("7")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="8" onPress={() => {pressionarTeclaNumerica("8")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="9" onPress={() => {pressionarTeclaNumerica("9")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="+" onPress={() => {pressionarTeclaNumerica(" + ")}}/></View>
      </View>

      <View style={styles.styleRow}>
        <View style={styles.botaoNumerico}>
          <Button title="4" onPress={() => {pressionarTeclaNumerica("4")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="5" onPress={() => {pressionarTeclaNumerica("5")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="6" onPress={() => {pressionarTeclaNumerica("6")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="-" onPress={() => {pressionarTeclaNumerica("  -  ")}}/></View>
      </View>

      <View style={styles.styleRow}>
        <View style={styles.botaoNumerico}>
          <Button title="1" onPress={() => {pressionarTeclaNumerica("1")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="2" onPress={() => {pressionarTeclaNumerica("2")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="3" onPress={() => {pressionarTeclaNumerica("3")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="X" onPress={() => {pressionarTeclaNumerica(" x ")}}/></View>
      </View>

      <View style={styles.styleRow}>
      <View style={styles.botaoNumerico}>
          <Button title="+/-" onPress={() => {trocarSinalNumerico(telaCalculo)}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="0" onPress={() => {pressionarTeclaNumerica("0")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="." onPress={() => {pressionarTeclaNumerica(".")}}/></View>
        <View style={styles.botaoNumerico}>
          <Button title="/" onPress={() => {pressionarTeclaNumerica(" / ")}}/></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  styleRow: {
    flexDirection: 'row',
  },
  styleContainerTela: {

  },
  tela: {
    height: 25,
    margin: 0,
    color: '#fff',
    backgroundColor: '#555',
  },
  botaoNumerico: {
    margin: 2,
    padding: 2, 
    width: 50,
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
