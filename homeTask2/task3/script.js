/* Создайте класс "Банк", который будет иметь следующие свойства: 
название банка, список клиентов и список счетов. 
Класс должен иметь методы для добавления нового клиента, 
открытия нового счета для клиента, пополнения счета, 
снятия денег со счета и проверки баланса.
 */

class Bank {
  constructor(name, clients, accNumber) {
    this.name = name;
    this.clients = [];
    this.accNumber = [];
  }
  addClient(client) {
    this.clients.push(client);
    console.log(`${client.name} добавлен(а) в список клиентов.`);
  }
  openAccount(client, amount) {
    let account = new Account(client, amount);
    account.balance = 0;

    account.name = client.name;
    account.balance += amount;
    account.accNamber = Math.floor(Math.random() * 900000000) + 100000000;
    const num = account.accNamber;
    client.accNum = num; //присваиваем клиенту номер банковского счета
    console.log(`Клиент ${account.name} открыл(а) новый счет №${account.accNamber}`);
    bank.accNumber.push(account);
  }
  deposit(accNamber, amount) {
    let account = bank.accNumber.find(
      (account) => account.accNamber == accNamber
    );
    account.balance += amount;
    console.log(
      `Счет №${account.accNamber} пополнен на ${amount}₽. 
      Новый баланс: ${account.balance}₽ `
    );
  }
  withdraw(accNamber, amount) {
    let account = bank.accNumber.find(
      (account) => account.accNamber == accNamber
    );
    if (amount > account.balance) {
      console.log(`На счете №${account.accNumber} недостаточно средств!`);
    } else {
      account.balance -= amount;
      console.log(
        `Cо счета: №${account.accNamber} cписано ${amount}₽ . 
        Новый баланс: ${account.balance}₽`
      );
    }
  }
  checkBalance(accNamber) {
    let account = bank.accNumber.find(
      (account) => account.accNamber == accNamber
    );
    console.log(`
        Номер счета: №${account.accNamber}
        Баланс на счете: ${account.balance}₽`);
  }
}

class Account {
  constructor(client) {
    let name = client.name;
    this.name = name;
    this.balance;
    this.accNumber;
  }
}

class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.accNum;
  }
}

const bank = new Bank("Мой Банк");
console.log(bank);

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

let num1 = client1.accNum; //номер присваевается рандомное девятизначное число. 
let num2 = client2.accNum; //создаю переменную, в которую кладу этот номер для дальнейших операций

bank.deposit(num1, 200);
bank.withdraw(num2, 100);

bank.checkBalance(num1);
bank.checkBalance(num2);
