import { describe, expect, test } from '@jest/globals';
import { italianConverter } from '../src';

describe('first thirty numbers', () => {
  test('1 === primo', () => {
    expect(italianConverter('primo')).toBe(1);
  });
  test('2 === secondo', () => {
    expect(italianConverter('secondo')).toBe(2);
  });
  test('3 === terzo', () => {
    expect(italianConverter('terzo')).toBe(3);
  });
  test('4 === quarto', () => {
    expect(italianConverter('quarto')).toBe(4);
  });
  test('5 === quinto', () => {
    expect(italianConverter('quinto')).toBe(5);
  });
  test('6 === sesto', () => {
    expect(italianConverter('sesto')).toBe(6);
  });
  test('7 === settimo', () => {
    expect(italianConverter('settimo')).toBe(7);
  });
  test('8 === ottavo', () => {
    expect(italianConverter('ottavo')).toBe(8);
  });
  test('9 === nono', () => {
    expect(italianConverter('nono')).toBe(9);
  });
  test('10 === decimo', () => {
    expect(italianConverter('decimo')).toBe(10);
  });
  test('11 === undicesimo', () => {
    expect(italianConverter('undicesimo')).toBe(11);
  });
  test('12 === dodicesimo', () => {
    expect(italianConverter('dodicesimo')).toBe(12);
  });
  test('13 === tredicesimo', () => {
    expect(italianConverter('tredicesimo')).toBe(13);
  });
  test('14 === quattordicesimo', () => {
    expect(italianConverter('quattordicesimo')).toBe(14);
  });
  test('15 === quindicesimo', () => {
    expect(italianConverter('quindicesimo')).toBe(15);
  });
  test('16 === sedicesimo', () => {
    expect(italianConverter('sedicesimo')).toBe(16);
  });
  test('17 === diciassettesimo', () => {
    expect(italianConverter('diciassettesimo')).toBe(17);
  });
  test('18 === diciottesimo', () => {
    expect(italianConverter('diciottesimo')).toBe(18);
  });
  test('19 === diciannovesimo', () => {
    expect(italianConverter('diciannovesimo')).toBe(19);
  });
  test('20 === ventesimo', () => {
    expect(italianConverter('ventesimo')).toBe(20);
  });
  test('21 === ventunesimo', () => {
    expect(italianConverter('ventunesimo')).toBe(21);
  });
  test('22 === ventiduesimo', () => {
    expect(italianConverter('ventiduesimo')).toBe(22);
  });
  test('23 === ventitreesimo', () => {
    expect(italianConverter('ventitreesimo')).toBe(23);
  });
  test('24 === ventiquattresimo', () => {
    expect(italianConverter('ventiquattresimo')).toBe(24);
  });
  test('25 === venticinquesimo', () => {
    expect(italianConverter('venticinquesimo')).toBe(25);
  });
  test('26 === ventiseiesimo', () => {
    expect(italianConverter('ventiseiesimo')).toBe(26);
  });
  test('27 === ventisettesimo', () => {
    expect(italianConverter('ventisettesimo')).toBe(27);
  });
  test('28 === ventottesimo', () => {
    expect(italianConverter('ventottesimo')).toBe(28);
  });
  test('29 === ventinovesimo', () => {
    expect(italianConverter('ventinovesimo')).toBe(29);
  });
});

describe('first thirty female numbers', () => {
  test('1 === prima', () => {
    expect(italianConverter('prima')).toBe(1);
  });
  test('2 === seconda', () => {
    expect(italianConverter('seconda')).toBe(2);
  });
  test('3 === terza', () => {
    expect(italianConverter('terza')).toBe(3);
  });
  test('4 === quarta', () => {
    expect(italianConverter('quarta')).toBe(4);
  });
  test('5 === quinta', () => {
    expect(italianConverter('quinta')).toBe(5);
  });
  test('6 === sesta', () => {
    expect(italianConverter('sesta')).toBe(6);
  });
  test('7 === settima', () => {
    expect(italianConverter('settima')).toBe(7);
  });
  test('8 === ottava', () => {
    expect(italianConverter('ottava')).toBe(8);
  });
  test('9 === nona', () => {
    expect(italianConverter('nona')).toBe(9);
  });
  test('10 === decima', () => {
    expect(italianConverter('decima')).toBe(10);
  });
  test('11 === undicesima', () => {
    expect(italianConverter('undicesima')).toBe(11);
  });
  test('12 === dodicesima', () => {
    expect(italianConverter('dodicesima')).toBe(12);
  });
  test('13 === tredicesima', () => {
    expect(italianConverter('tredicesima')).toBe(13);
  });
  test('14 === quattordicesima', () => {
    expect(italianConverter('quattordicesima')).toBe(14);
  });
  test('15 === quindicesima', () => {
    expect(italianConverter('quindicesima')).toBe(15);
  });
  test('16 === sedicesima', () => {
    expect(italianConverter('sedicesima')).toBe(16);
  });
  test('17 === diciassettesima', () => {
    expect(italianConverter('diciassettesima')).toBe(17);
  });
  test('18 === diciottesima', () => {
    expect(italianConverter('diciottesima')).toBe(18);
  });
  test('19 === diciannovesima', () => {
    expect(italianConverter('diciannovesima')).toBe(19);
  });
  test('20 === ventesima', () => {
    expect(italianConverter('ventesima')).toBe(20);
  });
  test('21 === ventunesima', () => {
    expect(italianConverter('ventunesima')).toBe(21);
  });
  test('22 === ventiduesima', () => {
    expect(italianConverter('ventiduesima')).toBe(22);
  });
  test('23 === ventitreesima', () => {
    expect(italianConverter('ventitreesima')).toBe(23);
  });
  test('24 === ventiquattresima', () => {
    expect(italianConverter('ventiquattresima')).toBe(24);
  });
  test('25 === venticinquesima', () => {
    expect(italianConverter('venticinquesima')).toBe(25);
  });
  test('26 === ventiseiesima', () => {
    expect(italianConverter('ventiseiesima')).toBe(26);
  });
  test('27 === ventisettesima', () => {
    expect(italianConverter('ventisettesima')).toBe(27);
  });
  test('28 === ventottesima', () => {
    expect(italianConverter('ventottesima')).toBe(28);
  });
  test('29 === ventinovesima', () => {
    expect(italianConverter('ventinovesima')).toBe(29);
  });
});

describe('first thirty plural numbers', () => {
  test('1 === primi', () => {
    expect(italianConverter('primi')).toBe(1);
  });
  test('2 === secondi', () => {
    expect(italianConverter('secondi')).toBe(2);
  });
  test('3 === terzi', () => {
    expect(italianConverter('terzi')).toBe(3);
  });
  test('4 === quarti', () => {
    expect(italianConverter('quarti')).toBe(4);
  });
  test('5 === quinti', () => {
    expect(italianConverter('quinti')).toBe(5);
  });
  test('6 === sesti', () => {
    expect(italianConverter('sesti')).toBe(6);
  });
  test('7 === settimi', () => {
    expect(italianConverter('settimi')).toBe(7);
  });
  test('8 === ottavi', () => {
    expect(italianConverter('ottavi')).toBe(8);
  });
  test('9 === noni', () => {
    expect(italianConverter('noni')).toBe(9);
  });
  test('10 === decimi', () => {
    expect(italianConverter('decimi')).toBe(10);
  });
  test('11 === undicesimi', () => {
    expect(italianConverter('undicesimi')).toBe(11);
  });
  test('12 === dodicesimi', () => {
    expect(italianConverter('dodicesimi')).toBe(12);
  });
  test('13 === tredicesimi', () => {
    expect(italianConverter('tredicesimi')).toBe(13);
  });
  test('14 === quattordicesimi', () => {
    expect(italianConverter('quattordicesimi')).toBe(14);
  });
  test('15 === quindicesimi', () => {
    expect(italianConverter('quindicesimi')).toBe(15);
  });
  test('16 === sedicesimi', () => {
    expect(italianConverter('sedicesimi')).toBe(16);
  });
  test('17 === diciassettesimi', () => {
    expect(italianConverter('diciassettesimi')).toBe(17);
  });
  test('18 === diciottesimi', () => {
    expect(italianConverter('diciottesimi')).toBe(18);
  });
  test('19 === diciannovesimi', () => {
    expect(italianConverter('diciannovesimi')).toBe(19);
  });
  test('20 === ventesimi', () => {
    expect(italianConverter('ventesimi')).toBe(20);
  });
  test('21 === ventunesimi', () => {
    expect(italianConverter('ventunesimi')).toBe(21);
  });
  test('22 === ventiduesimi', () => {
    expect(italianConverter('ventiduesimi')).toBe(22);
  });
  test('23 === ventitreesimi', () => {
    expect(italianConverter('ventitreesimi')).toBe(23);
  });
  test('24 === ventiquattresimi', () => {
    expect(italianConverter('ventiquattresimi')).toBe(24);
  });
  test('25 === venticinquesimi', () => {
    expect(italianConverter('venticinquesimi')).toBe(25);
  });
  test('26 === ventiseiesimi', () => {
    expect(italianConverter('ventiseiesimi')).toBe(26);
  });
  test('27 === ventisettesimi', () => {
    expect(italianConverter('ventisettesimi')).toBe(27);
  });
  test('28 === ventottesimi', () => {
    expect(italianConverter('ventottesimi')).toBe(28);
  });
  test('29 === ventinovesimi', () => {
    expect(italianConverter('ventinovesimi')).toBe(29);
  });
});

describe('first thirty plural female numbers', () => {
  test('1 === prime', () => {
    expect(italianConverter('prime')).toBe(1);
  });
  test('2 === seconde', () => {
    expect(italianConverter('seconde')).toBe(2);
  });
  test('3 === terze', () => {
    expect(italianConverter('terze')).toBe(3);
  });
  test('4 === quarte', () => {
    expect(italianConverter('quarte')).toBe(4);
  });
  test('5 === quinte', () => {
    expect(italianConverter('quinte')).toBe(5);
  });
  test('6 === seste', () => {
    expect(italianConverter('seste')).toBe(6);
  });
  test('7 === settime', () => {
    expect(italianConverter('settime')).toBe(7);
  });
  test('8 === ottave', () => {
    expect(italianConverter('ottave')).toBe(8);
  });
  test('9 === none', () => {
    expect(italianConverter('none')).toBe(9);
  });
  test('10 === decime', () => {
    expect(italianConverter('decime')).toBe(10);
  });
  test('11 === undicesime', () => {
    expect(italianConverter('undicesime')).toBe(11);
  });
  test('12 === dodicesime', () => {
    expect(italianConverter('dodicesime')).toBe(12);
  });
  test('13 === tredicesime', () => {
    expect(italianConverter('tredicesime')).toBe(13);
  });
  test('14 === quattordicesime', () => {
    expect(italianConverter('quattordicesime')).toBe(14);
  });
  test('15 === quindicesime', () => {
    expect(italianConverter('quindicesime')).toBe(15);
  });
  test('16 === sedicesime', () => {
    expect(italianConverter('sedicesime')).toBe(16);
  });
  test('17 === diciassettesime', () => {
    expect(italianConverter('diciassettesime')).toBe(17);
  });
  test('18 === diciottesime', () => {
    expect(italianConverter('diciottesime')).toBe(18);
  });
  test('19 === diciannovesime', () => {
    expect(italianConverter('diciannovesime')).toBe(19);
  });
  test('20 === ventesime', () => {
    expect(italianConverter('ventesime')).toBe(20);
  });
  test('21 === ventunesime', () => {
    expect(italianConverter('ventunesime')).toBe(21);
  });
  test('22 === ventiduesime', () => {
    expect(italianConverter('ventiduesime')).toBe(22);
  });
  test('23 === ventitreesime', () => {
    expect(italianConverter('ventitreesime')).toBe(23);
  });
  test('24 === ventiquattresime', () => {
    expect(italianConverter('ventiquattresime')).toBe(24);
  });
  test('25 === venticinquesime', () => {
    expect(italianConverter('venticinquesime')).toBe(25);
  });
  test('26 === ventiseiesime', () => {
    expect(italianConverter('ventiseiesime')).toBe(26);
  });
  test('27 === ventisettesime', () => {
    expect(italianConverter('ventisettesime')).toBe(27);
  });
  test('28 === ventottesime', () => {
    expect(italianConverter('ventottesime')).toBe(28);
  });
  test('29 === ventinovesime', () => {
    expect(italianConverter('ventinovesime')).toBe(29);
  });
});

// describe('exceptions', () => {
//   test('greater than 999999999999', () => {
//     expect(() => {
//       italianConverter(9999999999991);
//     }).toThrow('greater than 999999999999');
//   });
//   test('not a number', () => {
//     expect(() => {
//       italianConverter(Number('string'));
//     }).toThrow('not a number');
//   });
// });

describe('min-max', () => {
  test('999999999999 === novecentonovantanovemiliardinovecentonovantanovemilioninovecentonovantanovemilanovecentonovantanovesimo', () => {
    expect(italianConverter('novecentonovantanovemiliardinovecentonovantanovemilioninovecentonovantanovemilanovecentonovantanovesimo')).toBe(999999999999);
  });
  test('0 === zeresimo', () => {
    expect(italianConverter('zeresimo')).toBe(0);
  });
  test('Infinity === infinitesimo', () => {
    expect(italianConverter('infinitesimo')).toBe(Infinity);
  });
});

describe('hundreds tests', () => {
  test('101 === centunesimo', () => {
    expect(italianConverter('centunesimo')).toBe(101);
  });
  test('108 === centottesimo', () => {
    expect(italianConverter('centottesimo')).toBe(108);
  });
  test('110 === centodecimo', () => {
    expect(italianConverter('centodecimo')).toBe(110);
  });
  test('116 === centosedicesimo', () => {
    expect(italianConverter('centosedicesimo')).toBe(116);
  });
});

describe('random tests', () => {
  test('801100 === ottocentounomilacentesimo', () => {
    expect(italianConverter('ottocentounomilacentesimo')).toBe(801100);
  });
  test('108416 === centoottomilaquattrocentosedicesimo', () => {
    expect(italianConverter('centoottomilaquattrocentosedicesimo')).toBe(108416);
  });
  test('1000 === millesimo', () => {
    expect(italianConverter('millesimo')).toBe(1000);
  });
  test('1110 === millecentodecimo', () => {
    expect(italianConverter('millecentodecimo')).toBe(1110);
  });
  test('1000000 === milionesimo', () => {
    expect(italianConverter('milionesimo')).toBe(1000000);
  });
  test('1000000000 === miliardesimo', () => {
    expect(italianConverter('miliardesimo')).toBe(1000000000);
  });
  test('1000001 === milioneunesimo', () => {
    expect(italianConverter('milioneunesimo')).toBe(1000001);
  });
  test('1000000001 === miliardunesimo', () => {
    expect(italianConverter('miliardunesimo')).toBe(1000000001);
  });
  test('1000000008 === miliardottesimo', () => {
    expect(italianConverter('miliardottesimo')).toBe(1000000008);
  });
  test('2000 === duemillesimo', () => {
    expect(italianConverter('duemillesimo')).toBe(2000);
  });
  test('2000000001 === duemiliardunesimo', () => {
    expect(italianConverter('duemiliardunesimo')).toBe(2000000001);
  });
  test('456799123 === quattrocentocinquantaseimilionisettecentonovantanovemilacentoventitreesimo', () => {
    expect(italianConverter('quattrocentocinquantaseimilionisettecentonovantanovemilacentoventitreesimo')).toBe(456799123);
  });
  test('103 === centotreesimo', () => {
    expect(italianConverter('centotreesimo')).toBe(103);
  });
});
