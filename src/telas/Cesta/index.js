import React from 'react';
import { StyleSheet, View, FlatList}from 'react-native';

import Topo from '../Cesta/Componentes/Topo';
import Detalhes from './Componentes/Detalhes';
import Item from './Componentes/Item';
import Texto from '../Componentes/Texto';


export default function Cesta({ topo, detalhe, itens}) {
    return <>
        <FlatList style={estilos.lista}
            data = {itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />                    
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhe}/>
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    lista: {
        paddingHorizontal: 16
    }
});
