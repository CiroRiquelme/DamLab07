import React from 'react';
import {Text, View, TextInput, Picker, Switch,Button} from 'react-native';


const Rubros = () => {
    return (

        <View >
<Text >Rubro</Text>
<Text>Nombre</Text>
<TextInput />
<Text>Orden en el catalogo</Text>
<Picker>
    <Picker.Item label="#1" value="1" />
    <Picker.Item label="2" value="2" />
</Picker>
<Text>Destacar</Text>
<Switch/>
<Button title="Guardar" />
</View>

    );
  };






export default Rubros;