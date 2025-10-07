const calculateAge = require('../src/ageCalculator');

describe('calculateAge', () => {
  // Mock today's date for consistent testing
  const mockToday = new Date(2025, 9, 7); // October 7, 2025

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(mockToday);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should calculate age correctly for normal date', () => {
    const age = calculateAge(2000, 5, 15); // May 15, 2000
    expect(age).toEqual({ years: 25, months: 4, days: 22 });
  });

  test('should return null for a future date', () => {
    const age = calculateAge(2030, 1, 1);
    expect(age).toBeNull();
  });

  test('should calculate age correctly when birthday is today', () => {
    const age = calculateAge(1990, 10, 7); // October 7, 1990
    expect(age).toEqual({ years: 35, months: 0, days: 0 });
  });

  test('should handle end-of-month correctly', () => {
    const age = calculateAge(2000, 9, 30); // Sept 30, 2000
    expect(age).toEqual({ years: 25, months: 0, days: 7 });
  });

  test('should handle leap year birthdays correctly', () => {
    const age = calculateAge(2004, 2, 29); // Feb 29, 2004
    expect(age).toEqual({ years: 21, months: 7, days: 8 });
  });

  test('should handle birthdate in same month but later day', () => {
    const age = calculateAge(2000, 10, 15); // Oct 15, 2000
    expect(age).toEqual({ years: 24, months: 11, days: 22 });
  });

  test('should handle birthdate in same year but previous month', () => {
    const age = calculateAge(2025, 8, 7); // Aug 7, 2025
    expect(age).toEqual({ years: 0, months: 2, days: 0 });
  });

  test('should handle birthdate on the first day of the month', () => {
    const age = calculateAge(2000, 10, 1); // Oct 1, 2000
    expect(age).toEqual({ years: 25, months: 0, days: 6 });
  });
});
