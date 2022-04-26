import { FromStringToReturn } from './../main/fromStringToReturn';
// La phrase ne peut être vide
// La phrase ne doit pas commencer par un espace

let phrase: FromStringToReturn;

beforeAll(() => {
  phrase = new FromStringToReturn();
});

describe('GIVEN : Je veux remplacer les espaces par des retour chariot', () => {
  describe("WHEN : L'utilisateur envoie une phrase", () => {
    it('THEN : La phrase est retournée avec des retours chariot à la place des espaces', () => {
      expect(phrase.fromStringToReturn("J'aime les chèvres")).toEqual(
        "J'aime\rles\rchèvres",
      );
    });
  });
  describe("WHEN : L'utilisateur envoie une phrase avec un espace au début", () => {
    it('THEN : Les espaces sont supprimés', () => {
      expect(phrase.fromStringToReturn(" J'aime les chèvres")).toEqual(
        "J'aime\rles\rchèvres",
      );
    });
  });
  describe("WHEN : L'utilisateur envoie une phrase avec un espace à la fin", () => {
    it('THEN : Les espaces sont supprimés', () => {
      expect(phrase.fromStringToReturn("J'aime les chèvres ")).toEqual(
        "J'aime\rles\rchèvres",
      );
    });
  });
  describe("WHEN : L'utilisateur envoie une phrase vide", () => {
    it('THEN : Une erreur est retournée', () => {
      expect(() => phrase.fromStringToReturn('')).toThrowError();
    });
  });
  describe("WHEN : L'utilisateur envoie une phrase qui ne contient que des espaces", () => {
    it('THEN : Une erreur est retournée', () => {
      expect(() => phrase.fromStringToReturn('     ')).toThrowError();
    });
  });
});
