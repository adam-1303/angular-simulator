const sumNumbers = (a: number, b: number): number => {
  return a + b;
}
console.log(sumNumbers(5, 5));


type Status = "loading" | "success" | "error";

let myStatus: Status ;
myStatus = 'loading';
myStatus = 'success';
myStatus = 'error';

console.log(myStatus);


type TextFormat = 'uppercase'|'lowercase'|'capitalize';

let textFormat: TextFormat;
textFormat = 'capitalize';
textFormat = 'lowercase';
textFormat = 'uppercase';

console.log(textFormat);


interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
  telegram?: string;
}

interface IStudent extends IUser {
  phone: number;
  group: number;
  course: number;
}


function formatText(text: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();

    case 'lowercase':
      return text.toLowerCase();

    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    default:
      return text;
  }
}



const replaceCharacter = (text: string, character: string): string => {
  return text.replaceAll(character, '');
};


const users: IUser[] = [
  {
    id: 1,
    name: 'Adam',
    age: 20,
    email: 'adam@gmail.com',
  },
    {
    id: 2,
    name: 'Alice',
    age: 22,
    email: 'alice@gmail.com',
  },
    {
    id: 3,
    name: 'Amir',
    age: 25,
    email: 'amir@gmail.com',
  }
]

const students = users.filter(user => user.age >= 15);

