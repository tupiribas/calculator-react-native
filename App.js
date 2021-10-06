import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
 
export default function App() {

  const [telaCalculo, setTelaCalculo] = useState("");
  const [telaResposta, setTelaResposta] = useState("");

  function pressionarTeclaNumerica(botao) {
    setTelaCalculo(telaCalculo+botao);
  }

  function calcular(calculo) {
    if (calculo.includes("+")) {
      var arrayCalculo = calculo.split("+", 2);
      let valor0 = parseFloat(arrayCalculo[0]);
      let valor1 = parseFloat(arrayCalculo[1]);
      var soma = valor0 + valor1; 
      setTelaResposta(telaCalculo + " = " + soma);
    }
    else if (calculo.includes("-")) {
      var arrayCalculo = calculo.split("-", 2);
      let valor0 = parseFloat(arrayCalculo[0]);
      let valor1 = parseFloat(arrayCalculo[1]);
      var subtracao = valor0 - valor1; 
      setTelaResposta(telaCalculo + " = " + subtracao);
    }
    else if (calculo.includes("x")) {
      var arrayCalculo = calculo.split("x", 2);
      let valor0 = parseFloat(arrayCalculo[0]);
      let valor1 = parseFloat(arrayCalculo[1]);
      var multiplicacao = valor0 * valor1; 
      setTelaResposta(telaCalculo + " = " + multiplicacao);
    }
    else if (calculo.includes("/")) {
      var arrayCalculo = calculo.split("/", 2);
      let valor0 = parseFloat(arrayCalculo[0]);
      let valor1 = parseFloat(arrayCalculo[1]);
      var divisao = valor0 / valor1; 
      setTelaResposta(telaCalculo + " = " + divisao);
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.styleRow}>
        <View style={{flexDirection: 'column'}}>
        <TextInput value={telaCalculo} style={styles.tela}/>
        <TextInput value={telaResposta} style={styles.tela}/>
      </View>

      <View style={styles.botaoNumerico}>
        <Button title="=" onPress={() => {calcular(telaCalculo)}}/></View>
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
          <Button title="-" onPress={() => {pressionarTeclaNumerica(" - ")}}/></View>
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
          <Button title="C" onPress={() => {setTelaCalculo("")}}/></View>
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
  tela: {
    height: 25,
    margin: 0,
    color: '#fff',
    backgroundColor: '#555',
  },
  botaoNumerico: {
    margin: 2,
    width: 50,
    alignSelf: 'center',
  },
});
