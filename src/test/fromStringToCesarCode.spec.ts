import { FromStringToCesarCode } from './../main/fromStringToCesarCode';
// La chaine de caractère ne peut être vide
// La chaine de caractère ne doit pas commencer par un espace

let phrase: FromStringToCesarCode;

beforeEach(() => {
  phrase = new FromStringToCesarCode();
});

describe('GIVEN: Je veux coder un message en utilisant le code Cesar', () => {
  describe("WHEN : L'utilisateur envoie une phrase à coder", () => {
    it("THEN : Les lettres de la phrase sont décallées d'autant dans l'alphabet que la valeur du paramètre key", () => {
      expect(phrase.cesarCode('ABC', 3)).toEqual('DEF');
    });
  });
  describe('WHEN : La chaine commence par un espace', () => {
    it("THEN : L'espace est supprimé", () => {
      expect(phrase.cesarCode('    ABC', 3)).toEqual('DEF');
    });
  });
  describe('WHEN : La chaine est vide', () => {
    it('THEN : Une erreur est envoyée', () => {
      expect(() => phrase.cesarCode('', 3)).toThrowError();
    });
  });
  describe('WHEN : Arrivé à la fin de l alphabet', () => {
    it('THEN : On reprend à la lettre A', () => {
      expect(phrase.cesarCode('Z', 1)).toEqual('A');
    });
  });
  describe('WHEN : Une des lettre est spéciale (accent)', () => {
    it('THEN : La lettre n est pas changee', () => {
      expect(phrase.cesarCode('Chèvre', 1)).toEqual('Dièwsf');
    });
  });
  describe('WHEN : C est un caractere special', () => {
    it('THEN : La lettre n est pas changee', () => {
      expect(phrase.cesarCode('%', 1000)).toEqual('%');
    });
  });
  describe('WHEN : C est un chiffre', () => {
    it('THEN : La lettre n est pas changee', () => {
      expect(phrase.cesarCode('123', 1)).toEqual('123');
    });
  });
});
