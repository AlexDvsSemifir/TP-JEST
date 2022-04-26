import { Compte } from '../main/compte';

let compte: Compte;

beforeEach(() => {
  compte = new Compte(123456789, 1000);
});

describe('Test de Compte', () => {
  describe("Vérification de l'instanciation et des valeurs par dafaut", () => {
    it('solde avec une valeur par défaut à 0', () => {
      const compte2 = new Compte(123456789);
      expect(compte2.solde).toEqual(0);
    });
  });
  describe('Test des getters', () => {
    it('get numero', () => {
      expect(compte.numero).toEqual(123456789);
    });
    it('get solde', () => {
      expect(compte.solde).toEqual(1000);
    });
  });
  describe('Test des setters', () => {
    describe('set numeros', () => {
      it('set numero', () => {
        compte.numero = 123456789;
        expect(compte.numero).toEqual(123456789);
      });
      it('set numero avec nombre negatif', () => {
        expect(() => {
          compte.numero = -1;
        }).toThrowError(RangeError);
      });
      it('set numero avec nombre trop grand', () => {
        expect(() => {
          compte.numero = 1234567891011;
        }).toThrowError(RangeError);
      });
      it('set numero avec nombre trop petit', () => {
        expect(() => {
          compte.numero = 12;
        }).toThrowError(RangeError);
      });
    });
    it('set solde', () => {
      compte.solde = 1000;
      expect(compte.solde).toEqual(1000);
    });
  });
  describe('Test des méthodes', () => {
    describe('ajouter()', () => {
      it('ajouter', () => {
        compte.ajouter(1000);
        expect(compte.solde).toEqual(2000);
      });
      it('ajouter avec un nombre négatif', () => {
        expect(() => {
          compte.ajouter(-1000);
        }).toThrowError(RangeError);
      });
    });
    describe('retirer()', () => {
      it('retirer', () => {
        compte.retirer(1000);
        expect(compte.solde).toEqual(0);
      });
      it('retirer avec un nombre négatif', () => {
        expect(() => {
          compte.retirer(-1000);
        }).toThrowError(RangeError);
      });
    });
    it('toString', () => {
      expect(compte.toString()).toEqual(
        `
    numero de compte : 123456789
    solde du compte : 1000
    `,
      );
    });
  });
});
