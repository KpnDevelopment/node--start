function person(name,age,palce){
    this.name=name,
    this.age=age,
    this.palce=palce
    this.display = function (){
        console.log("name :" + name + "\n" + "age :" +  age  + "\n" + "palce :" + palce + "\n")
    }
}
var vishnu=new person("Vishnu",  21 , "pkd")
var kpndev=new person("Kpn_Dev", 2 ,"mkd")

vishnu.display()
kpndev.display()