import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConversorMedida from './src/ConversorDeMedidas';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default function ConversorDeMedida() {

  const Separador = () => (
    <View style={styles.separator} />
  );

  const Stack = createStackNavigator()
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


  return (
    <View style={styles.container}>
      <Text>Ola</Text>

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
