"use strict";
console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
    const printCapitalized = (text) => {
        const wordCapitalized = text.toUpperCase();
        console.log(wordCapitalized);
    };
    console.log('abcd:');
    printCapitalized('abcd');
    console.log('AAAA:');
    printCapitalized('AAAA');
    console.log('aBcD:');
    printCapitalized('aBcD');
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
    const caclStringCombinedLength = (a, b) => a.length + b.length;
    console.table({
        'labas, abc': caclStringCombinedLength('labas', 'abc'),
        'kranas, jonas': caclStringCombinedLength('kranas', 'jonas'),
        'kebabas, kefyras': caclStringCombinedLength('kebabas', 'kefyras'),
    });
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const containsLetter = (str, letter) => str.includes(letter);
    console.log({
        'labas, a': containsLetter('labas', 'a'),
        'kempė, a': containsLetter('kempė', 'a'),
        'Finakolė, u': containsLetter('Finakolė', 'u'),
    });
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const isEvenNumberOfLetters = (str) => str.length % 2 === 0;
    console.table({
        labas: isEvenNumberOfLetters('labas'),
        kempės: isEvenNumberOfLetters('kempės'),
        123123: isEvenNumberOfLetters('123123'),
    });
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map