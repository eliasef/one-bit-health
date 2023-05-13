import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerIMC: {
        flex: 1,
        paddingTop: 15,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    numberIMC: {
        color: "#FF0043",
        fontSize: 48,
        fontWeight: "bold"
    },
    boxShareBtn: {
        width: "100%",
        alignItems: "center",
        marginBottom: 15,
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
        marginTop: 10,
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
    boxClassIMC: {
        flexDirection: "row",
    },
    txtClassIMC: {
        fontSize: 20
    },
    classificationIMC: {
        fontSize: 30,
        fontWeight: 300
    }
});

export default styles;