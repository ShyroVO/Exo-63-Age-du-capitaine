let age;
let jeune = " le capitaine est jeune";
let pasVieux = " le capitaine n'est pas tres vieux";
let vieux = " le capitaine est vieux";
let qui = "Le capitaine a ";

for ( age = 13 ; age <= 60 ; age++ ) {
    if (age < 18) {
        document.getElementById('monDiv').innerHTML+= qui + age + "ans," + jeune +"<br>";
    }

    if (age >= 18 && age <= 50 ){
        document.getElementById('monDiv').innerHTML+= qui + age++ + "ans," + pasVieux +"<br>";
    }

    if (age > 50 ){
        document.getElementById('monDiv').innerHTML+= qui + age + "ans," + vieux +"<br>";
    }

}