const ek = {
  studerende: {
    Stina: {
      kursus: {
        tema7: { karakter: 10 },
        tema8: { karakter: 7 },
      },
    },
    Jonas: {
      kursus: {
        tema7: { karakter: 12 },
        tema8: { karakter: 4 },
      },
    },
  },
};

console.log(ek.studerende.Jonas.kursus.tema8.karakter);
console.log(ek.studerende.Stina.kursus.tema7.karakter);
