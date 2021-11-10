const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "What is the name of this fruit?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

 // fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit"
});

pineapple.save();



const person = new Person ({
    name: "Luka",
    age: 28,
    favouriteFruit: pineapple
});

person.save();



const kiwi = new Fruit({
    name: "Kiwi",
    score: 5,
    review: "Ehhh"
});

const banana = new Fruit({
    name: "Banana",
    score: 10,
    review: "The Best Fruit"
});

//Fruit.insertMany([kiwi, banana], function(err){
//    if (err) {
//        console.log(err);
//   } else {
//        console.log("Succesfully saved all the fruits to fruitsDB");
//    }
//});

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(function(fruit){
            console.log(fruit.name);

        mongoose.connection.close()
        });
    }
});


//Fruit.updateOne({_id: "618b83c71812aaa26f5c660d"}, {name: "Banana++"}, function(err){
//    if (err) {
//        console.log(err);
//    } else {
//        console.log("succesfully updated the document.");
//    }
//});

// Fruit.deleteOne({ name: "Kiwi"}, function(err){
//    if(err){
//        console.log(err);
//    } else {
//        console.log("Succesfully deleted the document");
//    }
//});