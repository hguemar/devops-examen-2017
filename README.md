# TP de noSql en Licence Devops (Groupe 1)

Réalisation d'une application d'une bibliothèque de livres.
Utilisation de nodejs comme serveur web et mongodb comme base de données.

Format de la base de données:
livre:
{
	{
		ISBN:0000000000002,
		titre:"1984",
		auteur:"George Orwell",
		dateAchat:new Date(Date.now()),
		etat:"bon état",
		thematique:{0:"science-fiction",1:"futuriste",2:"distopie"}
	},
	{
		ISBN:0000000000002,
		titre:"A song of ice and fire",
		auteur:"R. R. Martin",
		dateAchat:new Date(Date.now()),
		etat:"abimé",
		thematique:{"fantastique","médiévale"}
	}
}