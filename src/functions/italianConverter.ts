const unitsDict : { [unit: string] : number } = {
  un: 1,
  uno: 1,
  due: 2,
  tre: 3,
  tré: 3,
  quattro: 4,
  cinque: 5,
  sei: 6,
  sette: 7,
  otto: 8,
  nove: 9,
  dieci: 10,
  undici: 11,
  dodici: 12,
  tredici: 13,
  quattordici: 14,
  quindici: 15,
  sedici: 16,
  diciassette: 17,
  diciotto: 18,
  diciannove: 19,
};

const tensDict : { [ten: string] : number } = {
  venti: 20,
  trenta: 30,
  quaranta: 40,
  cinquanta: 50,
  sessanta: 60,
  settanta: 70,
  ottanta: 80,
  novanta: 90,
};

const tensConverter = (word: string): number => {
  if (unitsDict[word]) {
    return unitsDict[word];
  }

  const ten = Object.keys(tensDict).find((w) => word.startsWith(w.slice(0, -1)));

  if (!ten) {
    return NaN;
  }

  const result = tensDict[ten];
  if (word === ten) {
    return result;
  }

  let [, unit] = word.split(ten);
  if (!unit) {
    [, unit] = word.split(ten.slice(0, -1));
  }
  if (!unitsDict[unit]) {
    return NaN;
  }
  return result + unitsDict[unit];
};

const hundredsConverter = (word: string): number => {
  const [hundred, ten] = word.split('cento');
  if (ten === undefined) {
    return tensConverter(hundred);
  }
  let result = -1;
  if (hundred === '') {
    result = 100;
  } else {
    if (!unitsDict[hundred]) {
      return NaN;
    }
    result = unitsDict[hundred] * 100;
  }
  if (ten !== '') {
    if (ten.startsWith('tt')) {
      result += tensConverter(`o${ten}`);
    } else {
      result += tensConverter(ten);
    }
  }

  return result;
};

const numberCalculator = (word: string): number => {
  let index = word.indexOf('miliard');
  if (index > -1) {
    const sub = word.slice(index + 8);
    if (!sub) {
      return hundredsConverter(word.slice(0, index)) * 1000000000;
    }
    return hundredsConverter(word.slice(0, index)) * 1000000000
      + numberCalculator(sub);
  }

  index = word.indexOf('milion');
  if (index > -1) {
    const sub = word.slice(index + 7);
    if (!sub) {
      return hundredsConverter(word.slice(0, index)) * 1000000;
    }
    return hundredsConverter(word.slice(0, index)) * 1000000
      + numberCalculator(sub);
  }

  index = word.indexOf('mila');
  if (index > -1) {
    const sub = word.slice(index + 4);
    if (!sub) {
      return hundredsConverter(word.slice(0, index)) * 1000;
    }
    return hundredsConverter(word.slice(0, index)) * 1000
      + numberCalculator(sub);
  }

  index = word.indexOf('mille');
  if (index > -1) {
    const sub = word.slice(index + 5);
    if (!sub) {
      return 1000;
    }
    return 1000 + hundredsConverter(sub);
  }

  return hundredsConverter(word);
};

const italianConverter = (word: string): number => {
  let escapedWord = word.toLowerCase();
  escapedWord = escapedWord.replaceAll(' e ', '');
  escapedWord = escapedWord.replaceAll(' ', '');

  let multiplier = 1;
  if (escapedWord.startsWith('meno')) {
    multiplier = -1;
    escapedWord = escapedWord.replace('meno', '');
  }

  if (word === 'infinito') {
    return Infinity;
  }

  if (word === 'zero') {
    return 0;
  }

  return numberCalculator(escapedWord) * multiplier;
};

export default italianConverter;
