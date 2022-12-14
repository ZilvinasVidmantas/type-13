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
    const countVowelCount = (str) => str.match(/[aeiouyąęėįųū]/g)?.length ?? 0;
    console.log({
        aaaaa: countVowelCount('aaaaa'),
        sasasasa: countVowelCount('sasasasa'),
        aeyuioąčė: countVowelCount('aeyuioąčė'),
    });
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const countLetters = (str, searchLetter) => {
        const searchLetterRegex = new RegExp(searchLetter, 'g');
        return str.match(searchLetterRegex)?.length ?? 0;
    };
    console.table({
        'labas, a': countLetters('labas', 'a'),
        'kempės, k': countLetters('kempės', 'k'),
        '123123, z': countLetters('123123', 'z'),
    });
}
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
    const removeLetter = (str, letter) => str.replace(letter, '');
    console.log({
        labas: removeLetter('labas', 'b'),
        kempiniukas: removeLetter('kempiniukas', 's'),
        123123: removeLetter('123123', 'a'),
    });
}
console.groupEnd();
console.group('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
    const removeLetters = (word, letters) => word
        .split('')
        .filter((wordLetter) => !letters.includes(wordLetter))
        .join('');
    console.table({
        'labas, [a, b]': removeLetters('labas', ['a', 'b']),
        'kempiniukas, [e, m, p, k]': removeLetters('kempiniukas', ['e', 'm', 'p', 'k']),
        '123123, []': removeLetters('123123', []),
    });
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
    const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
    const fixParagraph = (paragraph) => paragraph
        .split(/([.?!])/)
        .slice(0, -1)
        .map((sentence) => sentence.trim())
        .map(capitalizeFirstLetter)
        .join('')
        .replaceAll(/\s+/g, ' ')
        .replaceAll(' ,', ',')
        .replaceAll(/([.?!,])([^\s])/g, '$1 $2');
    const paragraph = '    labas , as jonas     . Tave      vadina Kęstu         ,taip? Taip ir žinojau  !';
    const fixedParagraph = fixParagraph(paragraph);
    console.log(paragraph);
    console.log(fixedParagraph);
}
console.groupEnd();
//# sourceMappingURL=main.js.map