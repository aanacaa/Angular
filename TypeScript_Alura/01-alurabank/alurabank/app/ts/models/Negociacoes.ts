class Negociacoes{
    private _negociacoes: Negociacao[] =[];
    
    //private _negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
        
    }
    paraArray(): Negociacao[] {
        console.log(this._negociacoes); 

        return [].concat(this._negociacoes);
    }
}