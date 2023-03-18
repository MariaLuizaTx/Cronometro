import React, {Component} from "react";
import * as S from "./styleGlobal.js";


class Home extends Component{
state = {
    contador: 0,
}


adicionar = () =>{
    if(this.state.contador < 10){
        this.setState({
            contador:this.state.contador + 1
        })
    }
}


diminuir = () =>{
    if(this.state.contador > 0){
        this.setState({
            contador:this.state.contador - 1
        })
    }
}


play = () =>{
    const Parar = setInterval(() =>{
        this.setState({
            contador: this.state.contador + 1
        })
    },1000)


    this.Parar = () => {
        clearInterval(Parar)
    }
}


reset = () => {
    this.setState({
        contador: 0,
    })
}






render(){
    return(
        <S.Containerum>
            <S.Cronometro>
                <h1>{this.state.contador}</h1>
                <S.Botoes>
                    <div className="BtnMaisMenos">
                        <button className="Adicionar" onClick={this.adicionar}>+</button>
                        <button className="Diminuir" onClick={this.diminuir}>-</button>
                    </div>
                    <div className="BtnCronometro">
                        <button className="Play" onClick={this.play}>Play</button>
                        <button className="Parar" onClick={this.Parar}>Parar</button>
                        <button className="Reset" onClick={this.reset}>Reset</button>
                    </div>
                </S.Botoes>
            </S.Cronometro>
        </S.Containerum>
    )
}
}
export default Home;
