import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';

import styles from './style';

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é: ${props.resultIMC} 😁`
    })
  }

  let classification = "";
  if (props.resultIMC < 18.5) {
    classification = "Baixo Peso 😞";
  } else if (props.resultIMC >= 18.5 && props.resultIMC <= 24.9) {
    classification = "Peso Normal 😍";
  } else if (props.resultIMC >= 25 && props.resultIMC <= 29.9) {
    classification = "Excesso de Peso  😕";
  } else if (props.resultIMC >= 30 && props.resultIMC <= 34.9) {
    classification = "Obesidade grau I 🥺";
  } else if (props.resultIMC >= 35 && props.resultIMC <= 39.9) {
    classification = "Obesidade grau II 😖";
  } else {
    classification = "Obesidade grau III 😦";
  }

  return (
    <View style={styles.containerIMC}>
      <View style={styles.boxShareBtn}>
        <Text style={styles.information}>{props.messageResultIMC}</Text>
        <Text style={styles.numberIMC}>{props.resultIMC}</Text>
        <View style={styles.boxClassIMC}>

          <Text style={styles.classificationIMC}>{classification}</Text>
        </View>
        <TouchableOpacity
          onPress={onShare}
          style={styles.shared}
        >
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
