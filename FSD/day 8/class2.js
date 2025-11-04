class Student{
    constructor(rollno, name, branch, section){
        this.rollno = rollno;
        this.name = name;
        this.branch = branch;
        this.section = section;
    }
    greet(){
        console.log(`Hello, I am ${this.name} from ${this.branch} branch.`);
    }
}

const student1 = new Student(1, "abc", "elce", "A");
student1.greet();
console.log(student1["name"]);
student1.name = "abcd";
console.log(student1.name);
