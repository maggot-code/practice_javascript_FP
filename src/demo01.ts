/*
 * @Author: maggot-code
 * @Date: 2021-04-06 21:08:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-08 21:53:24
 * @Description: file content
 */
interface Person {
    name: string;
    age: number;
}

function sayHi(person: Person): string {
    const { name, age } = person;
    return `Hi,${name},age ? ${age}`;
}

const hihi = sayHi({ name: 'aaa', age: 143 });

console.log(hihi);

