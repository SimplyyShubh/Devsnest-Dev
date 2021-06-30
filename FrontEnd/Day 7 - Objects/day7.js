var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

//answer1 
console.log(Object.keys(student));

//answer2


console.log(Object.keys(student));
delete student.rollno
console.log(Object.keys(student));


// //answer3

console.log(Object.keys(student).length);

//answer4
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    }, {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (const item in library) {
    console.log(library[item]);
}

//answer5

var Volume = {
    pi: 22 / 7,

    vol_fun: function(radius, height) {

        volume = 2 * Volume.pi * radius * height;
        console.log("Volume is" + " " + volume);
    }
};
Volume.vol_fun(1, 1);

// answer6

var library2 = [{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }

];