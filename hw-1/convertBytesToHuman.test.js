/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(10n)).toBe(false)
  expect(convertBytesToHuman(1024 * 1024 * 1024 * 1024 * 1024)).toBe(false)
  expect(convertBytesToHuman(123.456)).toBe(false)
  expect(convertBytesToHuman(1 / 0)).toBe(false)
  expect(convertBytesToHuman(- 1 / 0)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman("string")).toBe(false)
  expect(convertBytesToHuman(Symbol("id"))).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(convertBytesToHuman())).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1)).toBe("1 B")
  expect(convertBytesToHuman(524)).toBe("524 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(1025)).toBe("1.00 KB")
  expect(convertBytesToHuman(564987)).toBe("551.75 KB")
  expect(convertBytesToHuman(1048576)).toBe("1 MB")
  expect(convertBytesToHuman(2482398)).toBe("2.37 MB")
  expect(convertBytesToHuman(734538289)).toBe("700.51 MB")
  expect(convertBytesToHuman(1073741823)).toBe("1024.00 MB") //?
  expect(convertBytesToHuman(1073741824)).toBe("1 GB")
  expect(convertBytesToHuman(1121832384)).toBe("1.04 GB")
  expect(convertBytesToHuman(2873942684)).toBe("2.68 GB")
  expect(convertBytesToHuman(1099511627776)).toBe("1 TB")
  expect(convertBytesToHuman(9035825912573)).toBe("8.22 TB")
  expect(convertBytesToHuman(1024 * 1024 * 1024 * 1024 * 1024 - 1)).toBe("1024.00 TB") //?
});

// другая группа проверок
