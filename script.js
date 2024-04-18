class First {
  hello() {
    console.log(`Привет, я метод родителя `);
  }
}

class Second extends First {
  test() {
    super.hello(); //запускает метод родителя через супер
    setTimeout(() => {
      console.log(`А Я наследуемый метод`);
    }, 1000);
  }
}
const second = new Second();

second.test();
