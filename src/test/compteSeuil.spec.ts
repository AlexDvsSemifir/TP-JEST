import { CompteSeuil } from './../main/compteSeuil';

let compteSeuil: CompteSeuil;

beforeEach(() => {
  compteSeuil = new CompteSeuil(123456789, 10, 1000);
});

describe('Test de la classe CompteSeuil', () => {
  describe('Test des getters', () => {
    it('Seuil', () => {
      expect(compteSeuil.seuil).toBe(10);
    });
  });
  describe('Test des setters', () => {
    describe('set seuil', () => {
      it('set seuil', () => {
        compteSeuil.seuil = 20;
        expect(compteSeuil.seuil).toBe(20);
      });
    });
  });
  describe('Test des méthodes', () => {
    describe('retirer()', () => {
      it('retirer', () => {
        compteSeuil.retirer(100);
        expect(compteSeuil.solde).toBe(900);
      });
      it('retirer avec montant supérieur au seuil', () => {
        expect(() => {
          compteSeuil.retirer(1000);
        }).toThrowError(Error);
      });
    });
    describe('toString()', () => {
      it('toString', () => {
        expect(compteSeuil.toString()).toBe(`
    numero de compte : 123456789
    solde du compte : 1000
     seuil de retrait : 10 `);
      });
    });
  });
});
