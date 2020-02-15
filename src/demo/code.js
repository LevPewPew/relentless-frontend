const codeCsharp = `
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}

int time = 20;
if (time < 18) {
  Console.WriteLine("Good day.");
} else {
  Console.WriteLine("Good evening.");
}

string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) {
  Console.WriteLine(i);
}
`

const codeJavascript = `
  const foobar = (num) => num + 1;

  let xAmple = {
    foo: 'test string',
    bar: 123
  };

  for (let i = 0; i < 10; i++) {
    if (isNaN(example + demonstration)) {
      let x = mightNotExist.param || defaultValue;
    }
  }
`;

export {
  codeCsharp,
  codeJavascript
}
