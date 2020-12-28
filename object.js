var person={name:"vishnu",age:"21",place:"palakkad"}
 // console.log("name :  "+ person.name+"\n" + " age : "+ person.age +"\n" + " place : " +person.place) 
for(x in person){
    console.log(person[x])
}
person.dob="10-10-10"
console.log(person)
