/*
  splice - tai metodas, kuris iškerpa tam tikrą masyvo dalį;
  Tam kad nurodyti kurią masyvo dalį iškerpate, naudojami 3 parametrai
  1 - nuo kurio indekso iškirpti [ĮSKAITANT]
  2 - KIEK elementų iškirpti
  3, 4, 5, ... N - kuom pakeisti/papildyti iškirptą dalį
*/

{ // Trynimas
  // const words = ["don't", "come", "easy", "to", "me"];

  // Pirmo elemento trynimas
  // words.splice(0, 1);

  // Paskutinio elemento trynimas
  // words.splice(-1, 1);

  // Pirmų trijų elementų ištrynimas
  // words.splice(0, 3);

  // console.log(words);
}

{ // Iškirpimui
  // const words = ["don't", "come", "easy", "to", "me"];

  // const lastTwo = words.splice(-2);

  // console.log(words);
  // console.log(lastTwo);
}

{ // Įterpimas
  // const words = ["don't", "come", "easy", "to", "me"];

  // Pridėjimas į galą
  // words.splice(words.length, 0, "darling", "word2",'word3');
  
  // Įterpti į priekį
  // words.splice(0, 0, "Baby", "please");

  // Įterpti į vidurį
  // words.splice(3, 0, "or", "hard");

  // console.log(words);
}

{ // Sukeitimas
  // const words = ["don't", "come", "easy", "to", "me"];

  // Pridėjimas į galą
  // words.splice(2, 1, 'very');

  // console.log(words);
}
