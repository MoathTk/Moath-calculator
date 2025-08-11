export  class Calculator {

    OperationYype = {
        Add: 1,
        Sub: 2,
        div: 3,
        mult: 4,
        none: 5

    }
    
    OpType = this.OperationYype.none
    
    constructor() {
        this.n1 = 0;
        this.n2 = 0;
        this.OpType = this.OperationYype.none;
        this.result = 0;
        this.lastResult = 0;
        this.resultNum = "";
        this.dot1 = false;
        this.dot2 = false
    }
    add() {
        this.result =  this.n1 + this.n2;
        

    }
    subtract() {
        this.result = this.n1 - this.n2;
    }
    divide() {
        this.result = this.n1 / this.n2;
    }
    multiplacation() {
        
        this.result =  (this.n1 * this.n2);
    }
    Clear() {
        this.n1 = 0;
        this.n2 = 0;
        this.OpType = this.OperationYype.none;
        this.resultNum = "";
        this.dot1 = false;
        this.dot2 = false;

    }
    checkAddedDot() {

        if(this.dot2 ){
            return;
        }
        if(this.OpType === this.OperationYype.none)
        {
            if(this.n1 != 0 && this.OpType === this.OperationYype.none)
        {
            this.dot1 = true;
            return;

        }
        }
    if(this.OpType != this.OperationYype.none)
    {
        if(this.dot2 === false ){
        this.dot2 = true;
        return;
    }

    }
    
        }
    isfloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    fillNums(n) {

        if(this.OpType === this.OperationYype.none)
            {
            if(this.n1 === 0 && this.dot1 === false)
            {
                this.n1 = parseFloat(n)
            }
            else if(this.n1 !=0 && this.dot1 === true && this.isfloat(this.n1)=== false)
            {
                this.n1  = parseFloat(this.n1.toString() + '.' + n);
            }
            else if((this.isfloat(this.n1)) === true)
            {
                this.n1 = parseFloat(this.n1.toString() + n);
            }
            else {
                this.n1  = parseFloat(this.n1.toString() + n);
            }
            
        }
        else{
            if(this.n2 === 0 && this.dot2 === false){
                this.n2 = parseFloat(n);
            }
            else if(this.n2 !=0 && this.dot2 === true && this.isfloat(this.n2)=== false)
            {
                this.n2  = parseFloat(this.n2.toString() + '.' + n);
            }
            else if((this.isfloat(this.n2)))
            {
                this.n2 = parseFloat(this.n2.toString() + n);
            }
            else{
                    this.n2 = parseFloat(this.n2.toString() + n);
            }
            
        }
    }

    sitOperationType (n){
        if(this.result != 0 && this.n1 === 0){
            this.n1 = this.result;
        }

        if(this.n2 === 0) {

            if(n === 'X'){
                this.OpType = this.OperationYype.mult
            }
            else if (n === '-'){
                this.OpType = this.OperationYype.Sub
            }
            else if (n === '+'){
                this.OpType = this.OperationYype.Add
            }
            else if (n === "\\" ){
                this.OpType = this.OperationYype.div
            }
        }
    }
    GetOpAsString() {
        if(this.OpType === this.OperationYype.mult)
        {
            return 'X'
        }
        else if(this.OpType === this.OperationYype.Add){
            return '+'
        }
        else if(this.OpType === this.OperationYype.Sub){
            return '-'
        }
        else if(this.OpType === this.OperationYype.div){
            return '\\'
        }
    }

    CreateTemOp() {
        if(this.OpType == this.OperationYype.none)
        {
            this.resultNum = (this.n1).toString();
        }
        else if(this.OpType != this.OperationYype.none && this.n2 === 0){
            this.resultNum = (this.n1).toString() +" " +  this.GetOpAsString() ;
        }
        else if(this.OpType != this.OperationYype.none && this.n2 != 0 ){
            this.resultNum = (this.n1).toString() +" " + this.GetOpAsString()  +" " + (this.n2).toString();
        }
    }
    GetResult() {
        if(this.OpType === this.OperationYype.Add)
        {
            this.add();
            this.Clear();
            return this.result;
        }
            
        else if(this.OpType === this.OperationYype.Sub)
        {
            this.subtract();
            this.Clear();
            return this.result;
        }
            
        else if(this.OpType === this.OperationYype.mult)
        {
            this.multiplacation();
            this.Clear();
            return this.result;
        }
        else if(this.OpType === this.OperationYype.div)
        {
            this.divide();
            this.Clear();
            return this.result;
        }
        else{
            this.Clear();
            return this.result
        }
    }
    hasOnlyOneNumberAfterDot(n)
    {
        return (n.toString()[n.toString().length -2]);
    }
    delete(){
            if(this.n1 != 0&& this.OpType === this.OperationYype.none)
            {
                if(this.isfloat(this.n1))
                {
                    if(this.hasOnlyOneNumberAfterDot(this.n1)){
                        this.n1 = ((this.n1.toString()).slice(0,this.n1.toString().length - 1))
                        this.dot1 = false;
                        return;
                    }

                }
                this.n1 = ((this.n1.toString()).slice(0,this.n1.toString().length - 1))
                return;
            }
            else if(this.n1 != 0 && this.OpType != this.OperationYype.none && this.n2 === 0 ){
                this.OpType = this.OperationYype.none;
                return;
            }
            else if( this.n2 != 0 ){

                if(this.isfloat(this.n2))
                {
                    if(this.hasOnlyOneNumberAfterDot(this.n2)){
                        this.n2 = ((this.n2.toString()).slice(0,this.n2.toString().length - 1))
                        this.dot2 = false;
                        return;
                    }

                }
                if(this.n2.toString().length === 1)
                {
                    this.n2 = 0;
                    return
                }
                this.n2 = ((this.n2.toString()).slice(0,this.n2.toString().length - 1))
                return
            }
            

        
    }

}
