/* Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц). */

class Book {
    constructor(title, autor, pages){
        this.title = title;
        this.autor = autor;
        this.pages = pages
    }
    displayInfo(){
        console.log(`
        Название - ${this.title}
        Автор - ${this.autor}
        Количество страниц - ${this.pages}`);
    }
}

const newBook = new Book("1984","Оруэлл Д.",320);
newBook.displayInfo();