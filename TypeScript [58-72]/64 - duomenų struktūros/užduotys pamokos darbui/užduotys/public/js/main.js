"use strict";
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
    class Stack {
        index = -1;
        get length() {
            return this.index + 1;
        }
        push(element) {
            this.index += 1;
            this[this.index] = element;
        }
        pop() {
            const element = this[this.index];
            if (element === undefined)
                return undefined;
            delete this[this.index];
            this.index -= 1;
            return element;
        }
    }
    let numberStack;
    let stringStack;
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        numberStack = new Stack();
        stringStack = new Stack();
        console.log(numberStack);
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
    {
        numberStack.push(7);
        numberStack.push(8);
        numberStack.push(9);
        console.log(numberStack);
        stringStack.push('vienas');
        stringStack.push('du');
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
    {
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        numberStack.push(7);
        numberStack.push(8);
        numberStack.push(9);
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack.pop());
        console.log(numberStack);
        console.log(stringStack.pop());
    }
    console.groupEnd();
    console.group('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        numberStack.push(5);
        console.log(numberStack.length);
        numberStack.push(5);
        console.log(numberStack.length);
        numberStack.push(5);
        console.log(numberStack.length);
        numberStack.push(5);
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
        numberStack.pop();
        console.log(numberStack.length);
        console.log('stringStack.length');
        console.log(stringStack.length);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    class Queue {
    }
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map