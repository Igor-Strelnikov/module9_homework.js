// 9.2. JSON vs XML
// Задание 1

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const nameNode = listNode.querySelector("name");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");
const studentNode = listNode.querySelector("student");
const nameNode = listNode.querySelector("name");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");
// console.log('bookNode', bookNode);
// console.log('titleNode', titleNode);
// console.log('authorNode', authorNode);
// console.log('yearNode', yearNode);
// console.log('priceNode', priceNode);

// Получение данных из атрибутов
const namettr = listNode.getAttribute('lang');

// console.log('categoryAttr', categoryAttr);
// console.log('langAttr', langAttr);

/* Этап 3. Запись данных в результирующий объект */
const result = {
  list: listNode,
  name: nameAttr,
  prof: profNode.textContent,
  lang: langAttr,
  age: Number(ageNode.textContent),
};
console.log('result', result);




// Задание 2

{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }


let data = JSON.parse(jsonString);
console.log(data);


