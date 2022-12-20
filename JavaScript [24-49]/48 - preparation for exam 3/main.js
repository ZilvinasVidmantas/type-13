// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
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
console.log();