import { CompteRemunere } from '../main/compteRemunere';

let compteRemunere: CompteRemunere;

beforeEach(() => {
  compteRemunere = new CompteRemunere(123456789, 1000, 10);
});

describe('Test de la classe CompteRemunere', () => {
  describe('Test des getters', () => {
    it('Taux', () => {
      expect(compteRemunere.taux).toBe(0.1);
    });
  });
  describe('Test des setters', () => {
    describe('set taux', () => {
      it('set taux', () => {
        compteRemunere.taux = 20;
        expect(compteRemunere.taux).toBe(0.2);
      });
      it('set taux avec nombre négatif', () => {
        expect(() => {
          compteRemunere.taux = -1;
        }).toThrowError(RangeError);
      });
      it('set taux supérieur à 20%', () => {
        expect(() => {
          compteRemunere.taux = 21;
        }).toThrowError(RangeError);
      });
    });
  });
  describe('Test des méthodes', () => {
    describe('calculerInterets()', () => {
      it('calculerInterets', () => {
        expect(compteRemunere.calculerInterets()).toBe(100);
      });
    });
    describe('verserInterets()', () => {
      it('verserInterets', () => {
        compteRemunere.verserInterets();
        expect(compteRemunere.solde).toBe(1100);
      });
    });
    describe('toString()', () => {
      it('toString', () => {
        expect(compteRemunere.toString()).toBe(`
    numero de compte : 123456789
    solde du compte : 1000
    taux d'intérêt: 10%
    `);
      });
    });
  });
});
