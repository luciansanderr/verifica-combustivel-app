import { Component } from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

class App extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                inputAlcool: '',
                inputGasolina: '',
                resultado: '',
                msgGasolina: 'Compensa Abastecer Com Gasolina',
                msgAlcool: 'Compensa Abastecer Com Álcool',
                msg: '',
                modalVisible: false
            }
        }

        this.calcular = this.calcular.bind(this);
        this.fechar = this.fechar.bind(this);
    }

    calcular() {
        let alcool = parseFloat(this.state.inputAlcool);
        let gasolina = parseFloat(this.state.inputGasolina);

        let result = alcool / gasolina;
        if (result > 0.7) {
            this.setState({msg: this.state.msgGasolina});
        }
        if (result < 0.7) {
            this.setState({msg: this.state.msgAlcool});
        }
        this.setState({modalVisible: true});
    }

    fechar() {
        this.setState({modalVisible: false, msg: ''});
    }

    render () {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../src/img/logo.png')}
                    style={styles.logo}
                >
                </Image>
                <Text style={styles.textoPrincipal}>Pensando em Abastecer?</Text>
                <Text style={styles.textoSubPrincipal}>Qual Melhor Opção?</Text>
                <View style={styles.grupoInput}>
                    <Text style={styles.textInput}>Álcool (preço por litro):</Text>
                    <TextInput
                        onChangeText={(texto) => this.setState({inputAlcool: texto})}
                        style={styles.input}
                    >
                    </TextInput>
                    <Text style={styles.textInputGasolina}>Gasolina (preço por litro):</Text>
                    <TextInput
                        onChangeText={(texto) => this.setState({inputGasolina: texto})}
                        style={styles.input}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={this.calcular}
                        style={styles.btn}
                    >Calcular Melhor Opção!
                    </TouchableOpacity>
                </View>
                <Modal 
                    animationType="slide" visible={this.state.modalVisible}
                >
                    <View style={styles.modalInformativo}>
                        <Image
                            source={require('../../src/img/gas.png')}
                        >
                        </Image>
                        <Text style={{fontSize: 20, fontWeight: "800", color: '#15ff00', paddingTop: 20, textShadowColor: 'black', textShadowRadius: 10, textShadowOffset: { width: -2, height: -2 }}}>{this.state.msg}</Text>
                        <Text style={styles.textModal}>Álcool: {this.state.inputAlcool ? this.state.inputAlcool : 'Nada Preenchido'}</Text>
                        <Text style={styles.textModal}>Gasolina: {this.state.inputGasolina ? this.state.inputGasolina : 'Nada Preenchido'}</Text>
                        <TouchableOpacity
                            onPress={this.fechar}
                            style={styles.btn}
                        >Calcular Novamente
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: "center"
    },
    logo: {
        marginTop: 80
    },
    textoPrincipal: {
        padding: 5,
        fontSize: 26,
        fontWeight: "800"
    },
    textoSubPrincipal: {
        fontSize: 20
    },
    textInput: {
        fontSize: 17,
        color: '#000000',
        fontWeight: "900"
    },
    textInputGasolina: {
        paddingTop: 20,
        fontSize: 17,
        color: '#000000',
        fontWeight: "900"
    },
    grupoInput: {
        paddingTop: 30
    },
    input: {
        padding: 5,
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "#c24f1e",
        transitionDelay: 4
    },
    btn: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        padding: 6,
        textAlign: "center",
        color: '#c24f1e',
        fontSize: 20,
        fontWeight: "900",
        backgroundColor: '#000000dc'
    },
    modalInformativo: {
        flex: 1,
        alignItems: "center",
        paddingTop: 120,
        backgroundColor: '#c58a14'
    },
    textModal: {
        fontSize: 25,
        fontWeight: "800",
        paddingTop: 10
    }
});

export default App;