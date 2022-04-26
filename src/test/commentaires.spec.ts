import { Commentaire } from './../main/commentaires';
// Contraintes :
// -    Un commentaire ne peut pas être vide
// -    Un commentaire ne peut pas dépasser 30 caractères
// -    Un commentaire ne doit pas commencer par des espaces

let commentaire: Commentaire;

beforeEach(() => {
  commentaire = new Commentaire();
});

describe('GIVEN : Je sauvegarde un commentaire', () => {
  describe("WHEN : quand l'utilisateur l'a envoyé", () => {
    it('THEN : le commentaire est sauvegardé', () => {
      expect(commentaire.addComment('message')).toEqual('message');
      expect(commentaire.addComment('autre message')).toEqual('autre message');
    });
  });
  describe('WHEN : Quand le commentaire est vide', () => {
    it('THEN : je lève une exception', () => {
      expect(() => commentaire.addComment('')).toThrow();
    });
  });
  describe('WHEN : Quand le commentaire dépasse 30 caractères', () => {
    it('THEN : je lève une exception', () => {
      expect(() =>
        commentaire.addComment('1234567890123456789012345678901'),
      ).toThrow();
    });
  });
  describe('WHEN : Quand le commentaire commence ou termine par des espaces', () => {
    it("THEN : j'enlève les espaces", () => {
      expect(commentaire.addComment('   commentaire')).toEqual('commentaire');
      expect(commentaire.addComment('commentaire    ')).toEqual('commentaire');
    });
  });
  describe('Le commentaire ne contient que des espaces', () => {
    it('THEN : je retire les espaces et je lève une exception', () => {
      expect(() => commentaire.addComment('    ')).toThrow();
    });
  });
});
