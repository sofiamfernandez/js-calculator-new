class Display {
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.currentValue = "";
        this.previousValue = "";
        this.signs = {
            sumar: '+',
            dividir: '%',
            restar: '-',
            multiplicar:'x',
        }
    }
    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1); //esto del slice indica que se va a ir borrando de a un numero de atrás para adelante
        this.printValues();
    }

    deleteAll(){
        this.currentValue ="";
        this.previousValue ="";
        this.typeOperation = undefined;
        this.printValues();
    }

    compute(type){
        this.typeOperation !== 'equal' && this.calcular();
        this.typeOperation = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if(number === "." && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }
    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.typeOperation] ||''}`;
    }

    calcular(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue) || isNaN(previousValue)) return
        this.currentValue = this.calculator[this.typeOperation](previousValue,currentValue);
    }
}