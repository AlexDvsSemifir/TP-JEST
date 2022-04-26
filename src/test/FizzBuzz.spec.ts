import { FizzBuzz } from './../main/FizzBuzz';
// Exercice FizzBuzz
// Contraites :
// 		- L'utilisateur ne peut pas entrer un nombre négatif
// 		- L'utilisateur ne peut pas entrer un nombre supérieur à 100

let fizzBuzz: FizzBuzz;

beforeAll(() => {
  fizzBuzz = new FizzBuzz();
});

describe('GIVEN : Je veux utiliser FizzBuzz', () => {
  describe("WHEN : L'utilisateur envoie un nombre ", () => {
    it('THEN : Le nombre est retourné sous forme de chaine de caractère', () => {
      expect(fizzBuzz.fizzBuzz(1)).toEqual('1');
    });
  });
  describe("WHEN : L'utilisateur envoie un nombre multiple de 3", () => {
    it('THEN : Fizz est retourné', () => {
      expect(fizzBuzz.fizzBuzz(6)).toEqual('Fizz');
    });
  });
  describe("WHEN : L'utilisateur envoie un nombre multiple de 5", () => {
    it('THEN : Buzz est retourné', () => {
      expect(fizzBuzz.fizzBuzz(10)).toEqual('Buzz');
    });
  });
  describe("WHEN : L'utilisateur envoie un nombre multiple de 3 et 5", () => {
    it('THEN : FizzBuzz est retourné', () => {
      expect(fizzBuzz.fizzBuzz(15)).toEqual('FizzBuzz');
    });
  });
  describe("WHEN : L'utilisateur envoie un nombre négatif", () => {
    it('THEN : une exception est lancée', () => {
      expect(() => fizzBuzz.fizzBuzz(-1)).toThrow();
    });
  });
  describe("WHEN : L'utilisateur envoie un nombre supérieur à 100", () => {
    it('THEN : une exception est lancée', () => {
      expect(() => fizzBuzz.fizzBuzz(101)).toThrow();
    });
  });
});
