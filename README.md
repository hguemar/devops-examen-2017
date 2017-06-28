Application de gestion d'une bibliotheque implémentant les fonctionnalités suivantes :

- affichage d'une liste de livre
- ajout d'un livre
- suppression d'un livre

Modele de données (exemple) :

{
  'ISBN': 01234567890123,
  'titre': '1984',
  'auteur': 'George Orwell',
  'dateachat': '12/02/2012',
  'etat':'neuf',
  'thematiques':['dystopie','anticipation'],
  'prets': [
    {
      'datepret':'02/08/2016',
      'emprunteur':'Big Brother'
    },
    {
      'datepret':'02/04/2017',
      'emprunteur':'Haruki Murakami'
    }
  ]
}
