let name = "Sam";
document.write("Name:" +name);

function sum(){
    let sum;
    sum=2+10;
    document.write("\n sum:" +sum);
    //sub();
}
sum();

function sub(){
    let sub;
    sub=21-10;
    document.write("\n sub:" +sub);
}
sub();

let inc=3;
//document.write("/n inc:" ,inc++);
document.write("\n inc:" ,++inc);

let str ="TEsT";
document.write("\n str:" +str.toLocaleLowerCase());

let num=2;
num+=2;
document.write("\n num: " +num);

let x=2;
let y=3;
(x===y)? document.write("\n true"):document.write("\n false");

/*var txt ="";
var numbers = [45,4,9,16,25];
numbers.forEach(myfunction)

function myfunction(value,index,array){
    txt=txt+value+"<br>";
    return value*2;
}*/

var cars=["Saab" , "Volvo"];
document.write("\n array\n" +cars); //array

var fruits = ["Banana" ,"Orange" ,"Apple", "Mango"];
document.write("\n" +fruits.toString()); 

var fruits2 = ["Banana", "Orange", "Apple", "Pear"];
document.write("\n" +fruits2.pop());
 // Removes the last element ("Mango") from fruits


let str2 ="Sam";
document.write("\n strlength \n" +str2.length);

var cities = ["Paris" , "Bali"]
document.write("\n array length "  +cities.length); //array length

//Accessing the First Array Element
var travel =["countries" , "cities"]
document.write("\n" +travel[0]);

//Accessing the last Array Element
var travel1 =["countries" , "cities"]
document.write("\n" +travel1[1]);

var fruits3 = ["Banana", "Orange", "Apple", "Pear"];
document.write("\n" +fruits3[fruits3.length-1]);
///Accessing the last Array Element

//Looping Array Elements


var fruits4 ,text,flen,i;
fruits4 = ["Banana", "Orange", "Apple", "Pear"];
flen = fruits4.length;

text ="<ul>";
for(i=0;i<flen;i++){
text += "<li>" +fruits4[i] +"</li>"
}

text +="</ul>";
document.write("\n" +text);