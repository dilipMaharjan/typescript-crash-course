class User {
  name: string;
  email: string;
  public age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log("User created", this.name);
  }
  register() {
    console.log(this.name + " " + " is registered.");
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice(){
      console.log(this.name + ' '+ 'paid Invoice');
  }
}

let john = new User("Dilip", "dilip@email.com", 28);
console.log(john.age);
john.register();

let member=new Member(1,'Harry','harry@email.com',23);
member.payInvoice();
