import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import Texto from "../../Componentes/Texto";

export default function Item ({ item: { nome, imagem } }){

    return <View style={estilos.iten}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
};

const estilos = StyleSheet.create({
    iten: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }

})