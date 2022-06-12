//create object with function declaration (w/o method)
function Experience(name, energy){
    let experience = {}; //to declare that this is(function) is an object
    experience.name = name;
    experience.energy = energy;

    experience.declare = function(train){
       this.energy -= train/2;
        console.log(`Hi ${this.name}, you have ${train/2} energy now, and you have gained ${this.energy += train} experience`)
    }

    return experience //return the object

}

let deri = Experience("Deri", 20);