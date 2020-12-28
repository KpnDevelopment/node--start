class parent {
    purpose(){
        console.log("the purpose is add two number")
    }
}



class sum extends parent {     //class sum ennalthe chilld class ane parent ennthe parent classum
    constructor(n1,n2){
        super()    //super eppalum vilikkanam
        this.n1=n1
        this.n2=n2
    }
    addsum(){
        console.log("the sum of two number is : " + (this.n1 + this.n2))
    }
}
let s=new sum(10,10)  // declare class object
s.purpose() //parrent classile funtion ane call ayathe using inheritence
s.addsum()