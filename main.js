function CriarCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.apertaEnter();
          
        },
        apertaEnter(){
            this.display.addEventListener('keypress', (e)=>{
                if (e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        realizaConta(){
            let conta = this.display.value
            const resultado = eval(conta)
            this.display.value = resultado
        },

        clearDisplay() {
            this.display.value = ' '
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }

            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        }
    };
}

const calculadora = CriarCalculadora();
calculadora.inicia();
