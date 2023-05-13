import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
} from 'react-native';
import ResultIMC from './ResultIMC';

import styles from './style';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState('Preencha o peso e a altura.');
    const [IMC, setIMC] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let heightFormat = height.replace(',', '.');
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [
            ...arr,
            {
                id: new Date().getTime().toString(),
                imc: totalImc,
            },
        ]);
        setIMC(totalImc);
    }

    function verificationImc() {
        if (IMC === null) {
            Vibration.vibrate();
            setErrorMessage('campo obrigatório*');
        }
    }

    function validationIMC() {
        console.log(imcList);
        if (weight !== null && height !== null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC('Seu IMC é igual a: ');
            setTextButton('Calcular Novamente');
            setErrorMessage(null);
        } else {
            verificationImc();
            setIMC(null);
            setTextButton('Calcular');
            setMessageIMC('Preencha o peso e a altura');
        }
    }

    return (
        <View style={styles.formContainer}>
            {IMC === null ? (
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 72"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.btnCalculator}
                        onPress={() => validationIMC()}
                    >
                        <Text style={styles.textBtnCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            ) : (
                <View style={styles.exhibitionResultIMC}>
                    <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
                    <TouchableOpacity
                        style={styles.btnCalculator}
                        onPress={() => validationIMC()}
                    >
                        <Text style={styles.textBtnCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            )}
            <FlatList
                style={styles.listImcs}
                data={imcList}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
