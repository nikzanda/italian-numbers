import { unitsDict, tensDict, zeroTenOrdinals } from '../constants/constants';

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
  // billions
  let index = word.indexOf('miliard');
  if (index > -1) {
    const sub = word.slice(index + 8);
    let rest = 0;
    if (sub) {
      rest = numberCalculator(sub);
    }
    return hundredsConverter(word.slice(0, index)) * 1000000000 + rest;
  }

  // millions
  index = word.indexOf('milion');
  if (index > -1) {
    const sub = word.slice(index + 7);
    let rest = 0;
    if (sub) {
      rest = numberCalculator(sub);
    }
    return hundredsConverter(word.slice(0, index)) * 1000000 + rest;
  }

  // thousands
  index = word.indexOf('mila');
  if (index > -1) {
    const sub = word.slice(index + 4);
    let rest = 0;
    if (sub) {
      rest = numberCalculator(sub);
    }
    return hundredsConverter(word.slice(0, index)) * 1000 + rest;
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

const getNumberFromOrdinal = (ordinal: string): string => {
  let cardinal = ordinal;
  cardinal = cardinal.replace(/decim\w$/, 'dieci');
  cardinal = cardinal.replace(/centesim\w$/, 'cento');
  cardinal = cardinal.replace(/^millesim\w$/, 'mille');
  cardinal = cardinal.replace(/millesim\w$/, 'mila');
  cardinal = cardinal.replace(/^milionesim\w$/, 'unmilione');
  cardinal = cardinal.replace(/milionesim\w$/, 'milioni');
  cardinal = cardinal.replace(/^miliardesim\w$/, 'unmiliardo');
  cardinal = cardinal.replace(/miliardesim\w$/, 'miliardi');
  cardinal = cardinal.replace(/ventesim\w$/, 'venti');
  cardinal = cardinal.replace(/ntesim\w$/, 'nta');
  cardinal = cardinal.replace(/unesim\w$/, 'uno');
  cardinal = cardinal.replace(/quattresim\w$/, 'quattro');
  cardinal = cardinal.replace(/ottesim\w$/, 'otto');
  cardinal = cardinal.replace(/duesim\w$/, 'due');
  cardinal = cardinal.replace(/cinquesim\w$/, 'cinque');
  cardinal = cardinal.replace(/settesim\w$/, 'sette');
  cardinal = cardinal.replace(/novesim\w$/, 'nove');
  cardinal = cardinal.replace(/undicesim\w$/, 'undici');
  cardinal = cardinal.replace(/dodicesim\w$/, 'dodici');
  cardinal = cardinal.replace(/tredicesim\w$/, 'tredici');
  cardinal = cardinal.replace(/quattordicesim\w$/, 'quattordici');
  cardinal = cardinal.replace(/quindicesim\w$/, 'quindici');
  cardinal = cardinal.replace(/sedicesim\w$/, 'sedici');
  cardinal = cardinal.replace(/esim\w$/, '');
  cardinal = cardinal.replace(/^milione/, 'unmilione');
  cardinal = cardinal.replace(/^miliard/, 'unmiliardo');
  cardinal = cardinal.replace(/centuno/, 'centouno');
  cardinal = cardinal.replace(/centotto/, 'centootto');
  cardinal = cardinal.replace(/miliarduno/, 'miliardouno');
  cardinal = cardinal.replace(/miliardotto/, 'miliardootto');
  return cardinal;
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

  if (escapedWord.match(/\w*(a|o|e|i)$/)) {
    const index = zeroTenOrdinals.findIndex((ord) => escapedWord.startsWith(ord.slice(0, -1)));
    if (index !== -1) {
      return index;
    }
    if (escapedWord.match(/infinitesim(a|o|e|i)$/)) {
      return Infinity;
    }
    if (escapedWord.match(/\w*(esim|decim)(a|o|e|i)$/)) {
      escapedWord = getNumberFromOrdinal(escapedWord);
    }
  }

  return numberCalculator(escapedWord) * multiplier;
};

export default italianConverter;
