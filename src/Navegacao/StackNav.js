import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Views/Login"
import Cadastro from "../Views/Cadastro"
import Home from "../Views/Home";
import Menu from "../Views/Menu";
import DescritoresProcedimentoLeitura from '../Views/DescritoresProcedimentoLeitura'
import DescritorImplicacoesGeneroTextual from '../Views/DescritorImplicacoesGeneroTextual'
import DescritorVariacaoLinguistica from '../Views/DescritorVariacaoLinguistica'
import DescritorRelacoesEntreRecursosExpressivos from '../Views/DescritorRelacoesEntreRecursosExpressivos'
import DescritorCoerenciaCoesaoTextual from '../Views/DescritorCoerenciaCoesaoTextual'
import Questoes from '../ListaDeListas/index'


const Stack = createStackNavigator()

export default function StackNav(){
    
    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}} >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Cadastro' component={Cadastro} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Menu' component={Menu} />
          <Stack.Screen name='DescritoresProcedimentoLeitura' component={DescritoresProcedimentoLeitura} />
          <Stack.Screen name='DescritorImplicacoesGeneroTextual' component={DescritorImplicacoesGeneroTextual} />
          <Stack.Screen name='DescritorVariacaoLinguistica' component={DescritorVariacaoLinguistica} />
          <Stack.Screen name='DescritorRelacoesEntreRecursosExpressivos' component={DescritorRelacoesEntreRecursosExpressivos} />
          <Stack.Screen name='DescritorCoerenciaCoesaoTextual' component={DescritorCoerenciaCoesaoTextual} />
          <Stack.Screen 
          name='Questoes' component={Questoes} />
        </Stack.Navigator>
    )
}

