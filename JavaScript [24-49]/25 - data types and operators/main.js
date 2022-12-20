const age1 = 13;
const age2 = 64;
const age3 = '42';

// Sukurkite kintamajį, kuriame apskaičiuotumet amžiaus vidurkį.
// Suapvalintą į žemesniają skaičiau dalį. Rezultatą atspausdinkite Konsolėje:
//  16.5 -> 16
//  16.999 -> 16
//  16.001 -> 16

// var1 - aiškus skaitymas, nuoseklu.
{
  const count = 3;
  const sum = age1 + age2 + Number(age3);
  const avg = sum / count;
  const avgRounded = Math.floor(avg);
  
  console.log('avg:', avgRounded);
}
// var 2 - taumpomi minimalūs resursai.
{
  console.log('avg:', Math.floor((age1 + age2 + Number(age3)) / 3));
}

