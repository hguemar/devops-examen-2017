# TP de noSql en Licence Devops (Groupe 1)

Réalisation d'une application d'une bibliothèque de livres.
Utilisation de nodejs comme serveur web et mongodb comme base de données.

Format de la base de données:
livre:
{
&nbsp;&nbsp;ISBN:0000000000001,
&nbsp;&nbsp;titre:"Le meilleur des mondes",
&nbsp;&nbsp;auteur:"Aldous Huxley",
&nbsp;&nbsp;dateAchat:new Date(Date.now()),
&nbsp;&nbsp;etat:"neuf",
&nbsp;&nbsp;thematique:["science-fiction","futuriste","distopie"]
},
{
&nbsp;&nbsp;ISBN:0000000000002,
&nbsp;&nbsp;titre:"1984",
&nbsp;&nbsp;auteur:"George Orwell",
&nbsp;&nbsp;dateAchat:new Date(Date.now()),
&nbsp;&nbsp;etat:"bon état",
&nbsp;&nbsp;thematique:["science-fiction","futuriste","distopie"]
}