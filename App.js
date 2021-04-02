import { Text, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen   //primeira tela
          name="Principal"
          component={TelaPrincipal}
          options={{ title: 'Bem vindo a Tela Principal' }}
        ></Stack.Screen>

        <Stack.Screen  //segunda tela
          name="Tela02"
          component={Tela02}
          options={{ title: 'Bem vindo a Tela 02' }}
        ></Stack.Screen>        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TelaPrincipal = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Ir para Tela 02"
        onPress = { () => navigation.navigate('Tela02', { name: 'Tela02' })}
      ></Button>
    </View>
  );
};

const Tela02 = ({ navigation }) => {
  return (
    <View>
      <Text>
        Estou na Tela 02
      </Text>
    </View>
  );
};

export default MyStack;