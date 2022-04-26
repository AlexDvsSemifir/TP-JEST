import { Compte } from '../main/compte';
import { Client } from './../main/client';

let client: Client;

beforeEach(() => {
  client = new Client(123456, 'Dupont', 'Jean', 25);
});

describe('Test de Client', () => {
  describe('Test des getters', () => {
    it('get nom', () => {
      expect(client.nom).toEqual('Dupont');
    });
    it('get prenom', () => {
      expect(client.prenom).toEqual('Jean');
    });
    it('get age', () => {
      expect(client.age).toEqual(25);
    });
    it('get numero', () => {
      expect(client.numero).toEqual(123456);
    });
    it('get tabCompte', () => {
      expect(client.tabCompte).toEqual([]);
      client.ajouterCompte(new Compte(123456789, 1000));
      expect(client.tabCompte).toEqual([new Compte(123456789, 1000)]);
    });
  });
  describe('Test des setters', () => {
    it('set nom', () => {
      client.nom = 'Dupont';
      expect(client.nom).toEqual('Dupont');
    });
    it('set Nom avec mauvaise Regex', () => {
      expect(() => {
        client.nom = 'Dupont';
      });
    });
    it('Test de la regex sur le nom avec valeur à 1', () => {
      client.nom = '1';
      expect(client.nom).toEqual('');
    });
    it('set prenom', () => {
      client.prenom = 'Jean';
      expect(client.prenom).toEqual('Jean');
    });
    it('set prenom avec mauvaise Regex', () => {
      expect(() => {
        client.prenom = 'Jean';
      });
    });
    it('Test de la regex avec valeur à 1 sur prenom', () => {
      client.prenom = '1';
      expect(client.prenom).toEqual('');
    });
    it('set age', () => {
      client.age = 25;
      expect(client.age).toEqual(25);
    });
    it('set age avec un nombre négatif', () => {
      expect(() => {
        client.age = -25;
      }).toThrowError(RangeError);
    });
    it('set numero', () => {
      client.numero = 1234567;
      expect(client.numero).toEqual(1234567);
    });
    it('set numero avec un nombre trop petit', () => {
      expect(() => {
        client.numero = -1;
      }).toThrowError(RangeError);
    });
    it('set numero avec un nombre trop grand', () => {
      expect(() => {
        client.numero = 1234567891011;
      }).toThrowError(RangeError);
    });
    it('set numero avec un nombre négatif', () => {
      expect(() => {
        client.numero = -1234567;
      }).toThrowError(RangeError);
    });
    it('set tabCompte', () => {
      client.tabCompte = [new Compte(123456789, 1000)];
      expect(client.tabCompte).toEqual([new Compte(123456789, 1000)]);
    });
  });
  describe('Test des méthodes', () => {
    it('ajouter un compte', () => {
      client.ajouterCompte(new Compte(123456789, 1000));
      expect(client.tabCompte.length).toEqual(1);
    });
    it('toString', () => {
      client.ajouterCompte(new Compte(123456789, 1000));
      expect(client.toString()).toEqual(
        'le client Jean Dupont agé de 25 ans possède 1 comptes',
      );
    });
  });
});
