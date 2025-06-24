// Objects :
// SingleTon:
// Object literals :
// Object.create   one way to declare the object.

const mySym = Symbol("Key1");
const JsUser = {
  "full name ": "Neha Gandhi",
  name: "Hetvi",
  mySym: "myKey1",
  age: 20,
  location: "jaipur",
  email: "hetvi@gmail.coom",
  isLoggin: false,
  lastLoginDay: ["Monday", "saturday"],
};

const myArray = ["h", "i"];

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name "]);
console.log(JsUser);

// const tinderUser = new Object() singke tone Object
const tinderUser = {}; //not Singletone Object

// tinderUsr.id = "123abc";

// cosnole.log(tinderUser);

const regualrUser = {
  emial: "sub@gamil.com",
  fullname: {
    userFullname: {
        firstName:"neha",
        lastnmae:"sharma",
    },
  },
};


console.log(regualrUser.fullname);

const obj1 = {1: "a",
    2:"b",
    3:"c",
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f",
}

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const Obj4  = Object.assign({}, obj1, obj2,obj3);
console.log(Obj4);

const user = [
    {
        id:1,
        email:"1@gamil.com"
    }
]
console.log(user);
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));
console.log(user.id); //undefiend


// Object Destructuing :

const course = {
  cousername : "js in hind",
  price : "999",
  courseInstructoor : "Jahon"
}

// console.log(couser.courseInstructoor)

const {courseInstructoor: instuctor} = course 
console.log(courseInstructoor);

// json --> javascript Object Notation