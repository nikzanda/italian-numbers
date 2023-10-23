import { describe, expect, test } from '@jest/globals';
import { ordinalConverter } from '../src';

describe('first thirty numbers', () => {
  test('1 === primo', () => {
    expect(ordinalConverter(1)).toBe('primo');
  });
  test('2 === secondo', () => {
    expect(ordinalConverter(2)).toBe('secondo');
  });
  test('3 === terzo', () => {
    expect(ordinalConverter(3)).toBe('terzo');
  });
  test('4 === quarto', () => {
    expect(ordinalConverter(4)).toBe('quarto');
  });
  test('5 === quinto', () => {
    expect(ordinalConverter(5)).toBe('quinto');
  });
  test('6 === sesto', () => {
    expect(ordinalConverter(6)).toBe('sesto');
  });
  test('7 === settimo', () => {
    expect(ordinalConverter(7)).toBe('settimo');
  });
  test('8 === ottavo', () => {
    expect(ordinalConverter(8)).toBe('ottavo');
  });
  test('9 === nono', () => {
    expect(ordinalConverter(9)).toBe('nono');
  });
  test('10 === decimo', () => {
    expect(ordinalConverter(10)).toBe('decimo');
  });
  test('11 === undicesimo', () => {
    expect(ordinalConverter(11)).toBe('undicesimo');
  });
  test('12 === dodicesimo', () => {
    expect(ordinalConverter(12)).toBe('dodicesimo');
  });
  test('13 === tredicesimo', () => {
    expect(ordinalConverter(13)).toBe('tredicesimo');
  });
  test('14 === quattordicesimo', () => {
    expect(ordinalConverter(14)).toBe('quattordicesimo');
  });
  test('15 === quindicesimo', () => {
    expect(ordinalConverter(15)).toBe('quindicesimo');
  });
  test('16 === sedicesimo', () => {
    expect(ordinalConverter(16)).toBe('sedicesimo');
  });
  test('17 === diciassettesimo', () => {
    expect(ordinalConverter(17)).toBe('diciassettesimo');
  });
  test('18 === diciottesimo', () => {
    expect(ordinalConverter(18)).toBe('diciottesimo');
  });
  test('19 === diciannovesimo', () => {
    expect(ordinalConverter(19)).toBe('diciannovesimo');
  });
  test('20 === ventesimo', () => {
    expect(ordinalConverter(20)).toBe('ventesimo');
  });
  test('21 === ventunesimo', () => {
    expect(ordinalConverter(21)).toBe('ventunesimo');
  });
  test('22 === ventiduesimo', () => {
    expect(ordinalConverter(22)).toBe('ventiduesimo');
  });
  test('23 === ventitreesimo', () => {
    expect(ordinalConverter(23)).toBe('ventitreesimo');
  });
  test('24 === ventiquattresimo', () => {
    expect(ordinalConverter(24)).toBe('ventiquattresimo');
  });
  test('25 === venticinquesimo', () => {
    expect(ordinalConverter(25)).toBe('venticinquesimo');
  });
  test('26 === ventiseiesimo', () => {
    expect(ordinalConverter(26)).toBe('ventiseiesimo');
  });
  test('27 === ventisettesimo', () => {
    expect(ordinalConverter(27)).toBe('ventisettesimo');
  });
  test('28 === ventottesimo', () => {
    expect(ordinalConverter(28)).toBe('ventottesimo');
  });
  test('29 === ventinovesimo', () => {
    expect(ordinalConverter(29)).toBe('ventinovesimo');
  });
});

describe('first thirty female numbers', () => {
  test('1 === prima', () => {
    expect(ordinalConverter(1, { female: true })).toBe('prima');
  });
  test('2 === seconda', () => {
    expect(ordinalConverter(2, { female: true })).toBe('seconda');
  });
  test('3 === terza', () => {
    expect(ordinalConverter(3, { female: true })).toBe('terza');
  });
  test('4 === quarta', () => {
    expect(ordinalConverter(4, { female: true })).toBe('quarta');
  });
  test('5 === quinta', () => {
    expect(ordinalConverter(5, { female: true })).toBe('quinta');
  });
  test('6 === sesta', () => {
    expect(ordinalConverter(6, { female: true })).toBe('sesta');
  });
  test('7 === settima', () => {
    expect(ordinalConverter(7, { female: true })).toBe('settima');
  });
  test('8 === ottava', () => {
    expect(ordinalConverter(8, { female: true })).toBe('ottava');
  });
  test('9 === nona', () => {
    expect(ordinalConverter(9, { female: true })).toBe('nona');
  });
  test('10 === decima', () => {
    expect(ordinalConverter(10, { female: true })).toBe('decima');
  });
  test('11 === undicesima', () => {
    expect(ordinalConverter(11, { female: true })).toBe('undicesima');
  });
  test('12 === dodicesima', () => {
    expect(ordinalConverter(12, { female: true })).toBe('dodicesima');
  });
  test('13 === tredicesima', () => {
    expect(ordinalConverter(13, { female: true })).toBe('tredicesima');
  });
  test('14 === quattordicesima', () => {
    expect(ordinalConverter(14, { female: true })).toBe('quattordicesima');
  });
  test('15 === quindicesima', () => {
    expect(ordinalConverter(15, { female: true })).toBe('quindicesima');
  });
  test('16 === sedicesima', () => {
    expect(ordinalConverter(16, { female: true })).toBe('sedicesima');
  });
  test('17 === diciassettesima', () => {
    expect(ordinalConverter(17, { female: true })).toBe('diciassettesima');
  });
  test('18 === diciottesima', () => {
    expect(ordinalConverter(18, { female: true })).toBe('diciottesima');
  });
  test('19 === diciannovesima', () => {
    expect(ordinalConverter(19, { female: true })).toBe('diciannovesima');
  });
  test('20 === ventesima', () => {
    expect(ordinalConverter(20, { female: true })).toBe('ventesima');
  });
  test('21 === ventunesima', () => {
    expect(ordinalConverter(21, { female: true })).toBe('ventunesima');
  });
  test('22 === ventiduesima', () => {
    expect(ordinalConverter(22, { female: true })).toBe('ventiduesima');
  });
  test('23 === ventitreesima', () => {
    expect(ordinalConverter(23, { female: true })).toBe('ventitreesima');
  });
  test('24 === ventiquattresima', () => {
    expect(ordinalConverter(24, { female: true })).toBe('ventiquattresima');
  });
  test('25 === venticinquesima', () => {
    expect(ordinalConverter(25, { female: true })).toBe('venticinquesima');
  });
  test('26 === ventiseiesima', () => {
    expect(ordinalConverter(26, { female: true })).toBe('ventiseiesima');
  });
  test('27 === ventisettesima', () => {
    expect(ordinalConverter(27, { female: true })).toBe('ventisettesima');
  });
  test('28 === ventottesima', () => {
    expect(ordinalConverter(28, { female: true })).toBe('ventottesima');
  });
  test('29 === ventinovesima', () => {
    expect(ordinalConverter(29, { female: true })).toBe('ventinovesima');
  });
});

describe('first thirty plural numbers', () => {
  test('1 === primi', () => {
    expect(ordinalConverter(1, { plural: true })).toBe('primi');
  });
  test('2 === secondi', () => {
    expect(ordinalConverter(2, { plural: true })).toBe('secondi');
  });
  test('3 === terzi', () => {
    expect(ordinalConverter(3, { plural: true })).toBe('terzi');
  });
  test('4 === quarti', () => {
    expect(ordinalConverter(4, { plural: true })).toBe('quarti');
  });
  test('5 === quinti', () => {
    expect(ordinalConverter(5, { plural: true })).toBe('quinti');
  });
  test('6 === sesti', () => {
    expect(ordinalConverter(6, { plural: true })).toBe('sesti');
  });
  test('7 === settimi', () => {
    expect(ordinalConverter(7, { plural: true })).toBe('settimi');
  });
  test('8 === ottavi', () => {
    expect(ordinalConverter(8, { plural: true })).toBe('ottavi');
  });
  test('9 === noni', () => {
    expect(ordinalConverter(9, { plural: true })).toBe('noni');
  });
  test('10 === decimi', () => {
    expect(ordinalConverter(10, { plural: true })).toBe('decimi');
  });
  test('11 === undicesimi', () => {
    expect(ordinalConverter(11, { plural: true })).toBe('undicesimi');
  });
  test('12 === dodicesimi', () => {
    expect(ordinalConverter(12, { plural: true })).toBe('dodicesimi');
  });
  test('13 === tredicesimi', () => {
    expect(ordinalConverter(13, { plural: true })).toBe('tredicesimi');
  });
  test('14 === quattordicesimi', () => {
    expect(ordinalConverter(14, { plural: true })).toBe('quattordicesimi');
  });
  test('15 === quindicesimi', () => {
    expect(ordinalConverter(15, { plural: true })).toBe('quindicesimi');
  });
  test('16 === sedicesimi', () => {
    expect(ordinalConverter(16, { plural: true })).toBe('sedicesimi');
  });
  test('17 === diciassettesimi', () => {
    expect(ordinalConverter(17, { plural: true })).toBe('diciassettesimi');
  });
  test('18 === diciottesimi', () => {
    expect(ordinalConverter(18, { plural: true })).toBe('diciottesimi');
  });
  test('19 === diciannovesimi', () => {
    expect(ordinalConverter(19, { plural: true })).toBe('diciannovesimi');
  });
  test('20 === ventesimi', () => {
    expect(ordinalConverter(20, { plural: true })).toBe('ventesimi');
  });
  test('21 === ventunesimi', () => {
    expect(ordinalConverter(21, { plural: true })).toBe('ventunesimi');
  });
  test('22 === ventiduesimi', () => {
    expect(ordinalConverter(22, { plural: true })).toBe('ventiduesimi');
  });
  test('23 === ventitreesimi', () => {
    expect(ordinalConverter(23, { plural: true })).toBe('ventitreesimi');
  });
  test('24 === ventiquattresimi', () => {
    expect(ordinalConverter(24, { plural: true })).toBe('ventiquattresimi');
  });
  test('25 === venticinquesimi', () => {
    expect(ordinalConverter(25, { plural: true })).toBe('venticinquesimi');
  });
  test('26 === ventiseiesimi', () => {
    expect(ordinalConverter(26, { plural: true })).toBe('ventiseiesimi');
  });
  test('27 === ventisettesimi', () => {
    expect(ordinalConverter(27, { plural: true })).toBe('ventisettesimi');
  });
  test('28 === ventottesimi', () => {
    expect(ordinalConverter(28, { plural: true })).toBe('ventottesimi');
  });
  test('29 === ventinovesimi', () => {
    expect(ordinalConverter(29, { plural: true })).toBe('ventinovesimi');
  });
});

describe('first thirty plural female numbers', () => {
  test('1 === prime', () => {
    expect(ordinalConverter(1, { plural: true, female: true })).toBe('prime');
  });
  test('2 === seconde', () => {
    expect(ordinalConverter(2, { plural: true, female: true })).toBe('seconde');
  });
  test('3 === terze', () => {
    expect(ordinalConverter(3, { plural: true, female: true })).toBe('terze');
  });
  test('4 === quarte', () => {
    expect(ordinalConverter(4, { plural: true, female: true })).toBe('quarte');
  });
  test('5 === quinte', () => {
    expect(ordinalConverter(5, { plural: true, female: true })).toBe('quinte');
  });
  test('6 === seste', () => {
    expect(ordinalConverter(6, { plural: true, female: true })).toBe('seste');
  });
  test('7 === settime', () => {
    expect(ordinalConverter(7, { plural: true, female: true })).toBe('settime');
  });
  test('8 === ottave', () => {
    expect(ordinalConverter(8, { plural: true, female: true })).toBe('ottave');
  });
  test('9 === none', () => {
    expect(ordinalConverter(9, { plural: true, female: true })).toBe('none');
  });
  test('10 === decime', () => {
    expect(ordinalConverter(10, { plural: true, female: true })).toBe('decime');
  });
  test('11 === undicesime', () => {
    expect(ordinalConverter(11, { plural: true, female: true })).toBe('undicesime');
  });
  test('12 === dodicesime', () => {
    expect(ordinalConverter(12, { plural: true, female: true })).toBe('dodicesime');
  });
  test('13 === tredicesime', () => {
    expect(ordinalConverter(13, { plural: true, female: true })).toBe('tredicesime');
  });
  test('14 === quattordicesime', () => {
    expect(ordinalConverter(14, { plural: true, female: true })).toBe('quattordicesime');
  });
  test('15 === quindicesime', () => {
    expect(ordinalConverter(15, { plural: true, female: true })).toBe('quindicesime');
  });
  test('16 === sedicesime', () => {
    expect(ordinalConverter(16, { plural: true, female: true })).toBe('sedicesime');
  });
  test('17 === diciassettesime', () => {
    expect(ordinalConverter(17, { plural: true, female: true })).toBe('diciassettesime');
  });
  test('18 === diciottesime', () => {
    expect(ordinalConverter(18, { plural: true, female: true })).toBe('diciottesime');
  });
  test('19 === diciannovesime', () => {
    expect(ordinalConverter(19, { plural: true, female: true })).toBe('diciannovesime');
  });
  test('20 === ventesime', () => {
    expect(ordinalConverter(20, { plural: true, female: true })).toBe('ventesime');
  });
  test('21 === ventunesime', () => {
    expect(ordinalConverter(21, { plural: true, female: true })).toBe('ventunesime');
  });
  test('22 === ventiduesime', () => {
    expect(ordinalConverter(22, { plural: true, female: true })).toBe('ventiduesime');
  });
  test('23 === ventitreesime', () => {
    expect(ordinalConverter(23, { plural: true, female: true })).toBe('ventitreesime');
  });
  test('24 === ventiquattresime', () => {
    expect(ordinalConverter(24, { plural: true, female: true })).toBe('ventiquattresime');
  });
  test('25 === venticinquesime', () => {
    expect(ordinalConverter(25, { plural: true, female: true })).toBe('venticinquesime');
  });
  test('26 === ventiseiesime', () => {
    expect(ordinalConverter(26, { plural: true, female: true })).toBe('ventiseiesime');
  });
  test('27 === ventisettesime', () => {
    expect(ordinalConverter(27, { plural: true, female: true })).toBe('ventisettesime');
  });
  test('28 === ventottesime', () => {
    expect(ordinalConverter(28, { plural: true, female: true })).toBe('ventottesime');
  });
  test('29 === ventinovesime', () => {
    expect(ordinalConverter(29, { plural: true, female: true })).toBe('ventinovesime');
  });
});

describe('exceptions', () => {
  test('greater than 999999999999', () => {
    expect(() => {
      ordinalConverter(9999999999991);
    }).toThrow('greater than 999999999999');
  });
  test('not a number', () => {
    expect(() => {
      ordinalConverter(Number('string'));
    }).toThrow('not a number');
  });
  test('negative number not allowed', () => {
    expect(() => {
      ordinalConverter(-1);
    }).toThrow('negative number not allowed');
  });
});

describe('min-max', () => {
  test('999999999999 === novecentonovantanovemiliardinovecentonovantanovemilioninovecentonovantanovemilanovecentonovantanovesimo', () => {
    expect(ordinalConverter(999999999999)).toBe('novecentonovantanovemiliardinovecentonovantanovemilioninovecentonovantanovemilanovecentonovantanovesimo');
  });
  test('0 === zeresimo', () => {
    expect(ordinalConverter(0)).toBe('zeresimo');
  });
  test('Infinity === infinitesimo', () => {
    expect(ordinalConverter(Infinity)).toBe('infinitesimo');
  });
});

describe('hundreds tests', () => {
  test('101 === centunesimo', () => {
    expect(ordinalConverter(101)).toBe('centunesimo');
  });
  test('108 === centottesimo', () => {
    expect(ordinalConverter(108)).toBe('centottesimo');
  });
  test('110 === centodecimo', () => {
    expect(ordinalConverter(110)).toBe('centodecimo');
  });
  test('116 === centosedicesimo', () => {
    expect(ordinalConverter(116)).toBe('centosedicesimo');
  });
});

describe('random tests', () => {
  test('801100 === ottocentounomilacentesimo', () => {
    expect(ordinalConverter(801100)).toBe('ottocentounomilacentesimo');
  });
  test('108416 === centoottomilaquattrocentosedicesimo', () => {
    expect(ordinalConverter(108416)).toBe('centoottomilaquattrocentosedicesimo');
  });
  test('1000 === millesimo', () => {
    expect(ordinalConverter(1000)).toBe('millesimo');
  });
  test('1110 === millecentodecimo', () => {
    expect(ordinalConverter(1110)).toBe('millecentodecimo');
  });
  test('1000000 === milionesimo', () => {
    expect(ordinalConverter(1000000)).toBe('milionesimo');
  });
  test('1000000000 === miliardesimo', () => {
    expect(ordinalConverter(1000000000)).toBe('miliardesimo');
  });
  test('1000001 === milioneunesimo', () => {
    expect(ordinalConverter(1000001)).toBe('milioneunesimo');
  });
  test('1000000001 === miliardunesimo', () => {
    expect(ordinalConverter(1000000001)).toBe('miliardunesimo');
  });
  test('1000000008 === miliardottesimo', () => {
    expect(ordinalConverter(1000000008)).toBe('miliardottesimo');
  });
  test('2000 === duemillesimo', () => {
    expect(ordinalConverter(2000)).toBe('duemillesimo');
  });
  test('2000000001 === duemiliardunesimo', () => {
    expect(ordinalConverter(2000000001)).toBe('duemiliardunesimo');
  });
  test('456799123 === quattrocentocinquantaseimilionisettecentonovantanovemilacentoventitreesimo', () => {
    expect(ordinalConverter(456799123)).toBe('quattrocentocinquantaseimilionisettecentonovantanovemilacentoventitreesimo');
  });
  test('103 === centotreesimo', () => {
    expect(ordinalConverter(103)).toBe('centotreesimo');
  });
});
