class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    //private _negociacoes: Array<Negociacao> = []
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        console.log(this._negociacoes);
        return [].concat(this._negociacoes);
    }
}
