const packages = [

// Internet światłowodowy - Gorąca trzydziestka 2025 11/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Black Week - 300/15 Mb/s + HBO Max',
    cena: 47.31,
    cenaAktywacji: 34.98,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Black Week - 650/30 Mb/s + HBO Max',
    cena: 67.31,
    cenaAktywacji: 34.98,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },

// Internet światłowodowy - Studencki Raj 08/25 N
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Studencki Raj - 300/15 Mb/s',
    cena: 41.12,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 4.99, promocja: { cena: 1.60, czasTrwania: 3 } },
    ],
    promocja: { cena: 11.60, czasTrwania: 3 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Studencki Raj - 650/30 Mb/s',
    cena: 51.12,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 4.99, promocja: { cena: 1.60, czasTrwania: 3 } },
    ],
    promocja: { cena: 21.60, czasTrwania: 3 }
  },

// Internet światłowodowy - Strzał w 10–10 PEL 08/25 i Strzał w 10–20 PEL 08/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 300/15 Mb/s',
    cena: 46.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 10,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.09, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.18, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 650/30 Mb/s',
    cena: 67.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 10,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.09, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.18, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 300/15 Mb/s',
    cena: 46.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 20,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.09, czasTrwania: 3 } },
    ],
    promocja: { cena: 0.18, czasTrwania: 3 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Strzał w 10 - 650/30 Mb/s',
    cena: 67.99,
    cenaAktywacji: 29.99,
    dlugoscUmowy: 20,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.09, czasTrwania: 3 } },
    ],
    promocja: { cena: 0.18, czasTrwania: 3 }
  },

// Internet światłowodowy - Super Net PEL 08/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net S - 120/10 Mb/s',
    cena: 56.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 45.14, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net - 300/15 Mb/s',
    cena: 77.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.00, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net - 650/30 Mb/s',
    cena: 82.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.00, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net - 800/40 Mb/s',
    cena: 113.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.00, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net S - 120/10 Mb/s',
    cena: 51.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 40.14, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net - 300/15 Mb/s',
    cena: 67.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 10.36, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.00, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net - 650/30 Mb/s',
    cena: 72.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.00, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Pelmar Net - 800/40 Mb/s',
    cena: 103.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 0.00, czasTrwania: 1 }
  },

// Internet światłowodowy - Kontynuacja Net + HBO 2025 11/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Kontynuacja Net + HBO - 300/15 Mb/s + HBO Max',
    cena: 57.31,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Kontynuacja Net + HBO - 650/30 Mb/s + HBO Max',
    cena: 77.31,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 9.99, promocja: { cena: 0.00, czasTrwania: 1 } },
    ],
    promocja: { cena: 29.99, czasTrwania: 1 }
  },

// Internet światłowodowy - Trzymaj z nami NET PEL 08/25
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 120/10 Mb/s',
    cena: 51.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 300/15 Mb/s',
    cena: 75.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 650/30 Mb/s',
    cena: 80.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 800/40 Mb/s',
    cena: 116.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 120/10 Mb/s',
    cena: 46.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 300/15 Mb/s',
    cena: 65.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 650/30 Mb/s',
    cena: 70.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ]
  },
  {
    typ: 'Internet światłowodowy',
    nazwa: 'Trzymaj z nami - 800/40 Mb/s',
    cena: 106.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ]
  },

// Telewizja - Super TV + SMART TV PEL 09/25
  {
    typ: 'Telewizja',
    nazwa: 'START BOX - 135 kanałów TV',
    cena: 55.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'M BOX - 190 kanałów TV',
    cena: 98.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'L BOX - 239 kanałów TV',
    cena: 124.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'XXL BOX - 260 kanałów TV',
    cena: 215.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'START BOX - 135 kanałów TV',
    cena: 55.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'M BOX - 190 kanałów TV',
    cena: 88.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'L BOX - 239 kanałów TV',
    cena: 114.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'XXL BOX - 260 kanałów TV',
    cena: 205.99,
    cenaAktywacji: 79.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },

// Telewizja - Trzymaj z nami TV + SMART TV PEL 09/25
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - START BOX - 135 kanałów TV',
    cena: 55.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - M BOX - 190 kanałów TV',
    cena: 92.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - L BOX - 239 kanałów TV',
    cena: 118.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - XXL BOX - 260 kanałów TV',
    cena: 204.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - START BOX - 135 kanałów TV',
    cena: 55.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - M BOX - 190 kanałów TV',
    cena: 82.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - L BOX - 239 kanałów TV',
    cena: 108.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Trzymaj z nami - XXL BOX - 260 kanałów TV',
    cena: 194.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Telewizja - KIBIC+ PEL 08/25
  {
    typ: 'Telewizja',
    nazwa: 'KIBIC+',
    cena: 143.35,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
    promocja: { cena: 132.99, czasTrwania: 3 }
  },

// Telewizja - KINO+ PEL 08/25
  {
    typ: 'Telewizja',
    nazwa: 'KINO+',
    cena: 96.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Telewizja - Dla Dwojga Canal+, HBO Max i TV + SMART TV PEL 09/25
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - START BOX + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 104.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - M BOX + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 132.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - L BOX + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 158.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - START BOX + Canal+ Super Sport + HBO + HBO Max',
    cena: 144.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - M BOX + Canal+ Super Sport + HBO + HBO Max',
    cena: 172.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - L BOX + Canal+ Super Sport + HBO + HBO Max',
    cena: 198.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Telewizja',
    nazwa: 'Dla Dwojga - XXL BOX',
    cena: 179.99,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

  {
    typ: 'Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },

  {
    typ: 'Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },

// Premium TV - Premium PEL 08/25
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) Eleven',
    cena: 14.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) Cinemax',
    cena: 10.00,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) HBO HD + HBO Max',
    cena: 43.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) HBO Max',
    cena: 34.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) TV Republika',
    cena: 5.40,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) Pakiet PO PÓŁNOCY',
    cena: 15.54,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },

// Premium TV - CANAL+ PEL 08/25
  {
    typ: 'Premium TV',
    nazwa: '(do pakietów START BOX, M BOX i L BOX) Canal+ Seriale i Filmy',
    cena: 25.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do pakietów START BOX, M BOX i L BOX) Canal+ Super Sport',
    cena: 65.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 12,
  },
//

  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet SPORT',
    cena: 23.31,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet ROZRYWKA',
    cena: 15.54,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet ODKRYWCY',
    cena: 31.08,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet BAJKI',
    cena: 15.54,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet FAMILIJNY',
    cena: 23.31,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
  },

// Premium TV - Premium PEL 08/25
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) Eleven',
    cena: 14.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) Cinemax',
    cena: 10.00,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) HBO HD + HBO Max',
    cena: 39.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) HBO Max',
    cena: 29.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) TV Republika',
    cena: 5.40,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do wszystkich pakietów) Pakiet PO PÓŁNOCY',
    cena: 10.36,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },

// Premium TV - CANAL+ PEL 08/25
  {
    typ: 'Premium TV',
    nazwa: '(do pakietów START BOX, M BOX i L BOX) Canal+ Seriale i Filmy',
    cena: 25.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do pakietów START BOX, M BOX i L BOX) Canal+ Super Sport',
    cena: 65.00,
    cenaAktywacji: 4.99,
    dlugoscUmowy: 24,
  },
//

  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet SPORT',
    cena: 15.54,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet ROZRYWKA',
    cena: 10.36,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet ODKRYWCY',
    cena: 20.72,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet BAJKI',
    cena: 10.36,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },
  {
    typ: 'Premium TV',
    nazwa: '(do START BOX i M BOX) Pakiet FAMILIJNY',
    cena: 15.54,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
  },

// Internet i Telewizja - Super Box + SMART TV PEL 09/25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net S - 120/10 Mb/s',
    cena: 56.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net - 300/15 Mb/s',
    cena: 72.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net - 650/30 Mb/s',
    cena: 77.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 20.72 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net - 800/40 Mb/s',
    cena: 108.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 20.72 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'START BOX - 135 kanałów TV',
    cena: 54.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'M BOX - 190 kanałów TV',
    cena: 88.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'L BOX - 239 kanałów TV',
    cena: 113.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'XXL BOX - 260 kanałów TV',
    cena: 199.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net S - 120/10 Mb/s',
    cena: 51.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net - 300/15 Mb/s',
    cena: 67.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 15.54 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net - 650/30 Mb/s',
    cena: 72.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 20.72 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Pelmar Net - 800/40 Mb/s',
    cena: 103.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 20.72 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'START BOX - 135 kanałów TV',
    cena: 54.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'M BOX - 190 kanałów TV',
    cena: 83.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'L BOX - 239 kanałów TV',
    cena: 108.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'XXL BOX - 260 kanałów TV',
    cena: 194.99,
    cenaAktywacji: 24.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 1.27}
    ],
  },

// Internet i Telewizja - Trzymaj z Nami Net i TV + SMART TV PEL 09/25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 120/10 Mb/s',
    cena: 51.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 300/15 Mb/s',
    cena: 70.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 650/30 Mb/s',
    cena: 75.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 800/40 Mb/s',
    cena: 111.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - START BOX - 135 kanałów TV',
    cena: 55.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - M BOX - 190 kanałów TV',
    cena: 82.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - L BOX - 239 kanałów TV',
    cena: 108.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - XXL BOX - 260 kanałów TV',
    cena: 194.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 120/10 Mb/s',
    cena: 46.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 300/15 Mb/s',
    cena: 65.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 650/30 Mb/s',
    cena: 70.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - 800/40 Mb/s',
    cena: 106.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - START BOX - 135 kanałów TV',
    cena: 51.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - M BOX - 190 kanałów TV',
    cena: 77.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - L BOX - 239 kanałów TV',
    cena: 103.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Trzymaj z nami - XXL BOX - 260 kanałów TV',
    cena: 189.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

// Internet i Telewizja' - Dla Dwojga Canal+, HBO Max, TV i Net + SMART TV PEL 09-25
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 120/10 Mb/s',
    cena: 57.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 300/15 Mb/s',
    cena: 62.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 0.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 650/30 Mb/s',
    cena: 67.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - 800/40 Mb/s',
    cena: 103.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Modem', cena: 5.39 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - START BOX + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 103.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - M BOX + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 129.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - L BOX + Canal+ Seriale i Filmy + HBO + HBO Max',
    cena: 154.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - START BOX + Canal+ Super Sport + HBO + HBO Max',
    cena: 142.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - M BOX + Canal+ Super Sport + HBO + HBO Max',
    cena: 168.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - L BOX + Canal+ Super Sport + HBO + HBO Max',
    cena: 194.89,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'Dla Dwojga - XXL BOX',
    cena: 175.99,
    cenaAktywacji: 2.46,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder', cena: 0.00}
    ],
  },

  {
    typ: 'Internet i Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },
  {
    typ: 'Internet i Telewizja',
    nazwa: 'SMART TV',
    cena: 4.99,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 5.00 },
    ],
  },

// Telefon stacjonarny - FON DOMOWY PEL 08/25
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY Senior',
    cena: 5.05,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY Startowy - 50 minut',
    cena: 10.09,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY 150',
    cena: 17.22,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY 500',
    cena: 39.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },
  {
    typ: 'Telefon stacjonarny',
    nazwa: 'FON DOMOWY 2000',
    cena: 59.90,
    cenaAktywacji: 1.23,
    dlugoscUmowy: 24,
    promocja: { cena: 1.23, czasTrwania: 3 }
  },

// Open TV - OPEN TV 08/25
  {
    typ: 'Open TV',
    nazwa: 'SMART TV S',
    cena: 13.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV M',
    cena: 43.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV L',
    cena: 58.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 12,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV S',
    cena: 8.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV M',
    cena: 38.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV L',
    cena: 53.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 24,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV S',
    cena: 23.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 999,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV M',
    cena: 48.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 999,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
  {
    typ: 'Open TV',
    nazwa: 'SMART TV L',
    cena: 63.57,
    cenaAktywacji: 9.99,
    dlugoscUmowy: 999,
    urzadzenia: [
      { nazwa: 'Dekoder Smart TV', cena: 14.99},
      { nazwa: 'Dostęp do usług nieliniowych SMART TV', cena: 8.28 },
    ],
  },
];