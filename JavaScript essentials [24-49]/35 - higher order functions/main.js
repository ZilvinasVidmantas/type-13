console.group('1. Sukurkite funkciją, kuri priima spalvą ir grąžina funkciją, kuri spausdins tekstą išorinei funkcijai perduota spalva');
{
  const createColorfulPrintingFunction = (color) => {
    return (text) => console.log(`%c${text}`, `color: ${color}`);
  }

  const printRed = createColorfulPrintingFunction('red');
  const printBlue = createColorfulPrintingFunction('blue');

  printRed('tekstas'); // konsolėje matosi: 'tekstas'  raudona spalva
  printBlue('tekstas'); // konsolėje matosi: 'tekstas' mėlyna spalva
  createColorfulPrintingFunction('green')('tekstas');
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri priima simbolių masyvą ir grąžina funkciją, kuri tikrins ar tekste yra išorinės funkcijos kvietimo metu perduotų simbolių');
{
  const createStringChecker = (symbolsArr) => {
    const symbolRegex = new RegExp(`[${symbolsArr.join('')}]`, 'ig');

    return (text) => symbolRegex.test(text);
    // return (text) => {
    //   for (let i = 0; i < symbolsArr.length; i++) {
    //     const symbol = symbolsArr[i];
    //     if (text.includes(symbol)) return true;
    //   }

    //   return false;

    // }
  }

  const hasSentenceEnders = createStringChecker(['!', '.', '?']);
  const hasVowels = createStringChecker(['a', 'e', 'i', 'o', 'u', 'y']);

  console.table({
    "hasSentenceEnders('tekstas')": hasSentenceEnders('tekstas'),
    "hasSentenceEnders('tekstas.')": hasSentenceEnders('tekstas.'),
    "hasVowels('ssss')": hasVowels('ssss'),
    "hasVowels('tekstas')": hasVowels('tekstas'),
  })
}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri priima funkciją priimančią 2 parametrus ir grąžiną perduotą funkciją iškviečiamą su dviem invokacijom');
{
  // funkcija priimanti 2 parametrus
  const add = (a, b, c, d) => a + b + c + d;
  const multiply = (a, b) => a * b;

  // const convertToInvocationQueue = (binaryFunction) =>  (a) => (b) => binaryFunction(a, b);

  // const convertToInvocationQueue = (binaryFunction) => {
  //   return function (a) {
  //     return function (b) {
  //       return binaryFunction(a, b);
  //     }
  //   }
  // }

  const convertToInvocationQueue = (multiParamFn) => {
    const args = [];
    const saveArg = (arg) => {
      if (args.length + 1 < multiParamFn.length) {
        args.push(arg);
        return saveArg;
      }
      return multiParamFn(...args, arg);
    }

    return saveArg;
  }


  const addQueue = convertToInvocationQueue(add);
  const multiplyQueue = convertToInvocationQueue(multiply);


  console.table({
    'multiplyQueue(7)(6)': multiplyQueue(7)(6),
    'addQueue(7)(6)(3)(2)': addQueue(7)(6)(3)(2),
  });
}
console.groupEnd();

console.group('4. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus šauktukais');
/*
  const printWithBangs = createPrintWithBangs();
  printWithBangs('tekstas') -> !tekstas!
  printWithBangs('labas') -> !labas!
*/
{

}
console.groupEnd();

console.group('5. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus išorinės funkcijos parametru');
/*
  const printWithBangs = createPrintBetween('!');
  const printWithDashes = createPrintBetween('---');
  printWithBangs('tekstas') -> !tekstas!
  printWithDashes('tekstas') -> ---labas---
*/
{

}
console.groupEnd();

// A, B, C, D - salygoje naudojami pavadinimai
console.group('6. Sukurkite funkciją<A> kuri priima funkciją<B> ir parametrą<D>, ir grąžina funkciją<C>. \nFunkcija<B> tai vieną parametrą priimanti funkciją, kuri grąžina parametro transformaciją. \n Funkcija<C> turi grąžinti Funkcijos<B> rezultatą apgaubiant jį parametru<D>');
/*
  funkciją<B>:
  const double = (a) => typeof a === 'number' ? a * 2 : a + a;

  funkciją<A>:               ↙ funkciją<B>   
  const createWrapper = (functionB, parameterD) => {
                                        ↖ parametras<D>
    
    Čia turite grąžinti funkciją<C> 
  }

  const doubleWithBangs = createWrapper(double, '!')
  doubleWithBangs('labas') -> !labaslabas!
  doubleWithBangs(8) -> !16!
*/
{

}
console.groupEnd();
