class Home {
    public static hello(): number {
        console.log('Hello home');
        return 0;
    }
    sayHello(name: string){
        console.log ("hello  " + name);
    }
}

Home.hello();
let hi = new Home();
hi.sayHello("k");