import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
    },
    form: {
        width: "100%",
        paddingTop: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
        marginTop: 30
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    btnCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 55,
        marginLeft: 20
    },
    textBtnCalculator: {
        fontSize: 20,
        color: "#ffffff"
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultIMC: {
        width: "100%",
        height: "44%",
    },
    listImcs: {
        marginTop: 30,
    },
    resultImcItem: {
        fontSize: 24,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
        fontWeight: "bold"
    },
    textResultItemList: {
        fontSize: 16,
        fontWeight: 400
    }
})

export default styles;