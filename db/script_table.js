use library
db.books.drop()
db.createCollection("books", {autoIndexId : true })
for (var i = 0; i < 7; i++){db.books.insert( {'ISBN':'874593246984'+(i+2),'title' : 'The Witcher ' + i , 'author': 'Adrew', 'state' : 'neuf', 'theme' : 'Science Fiction','loan' : {}})}
db.books.insert({'title': 'Harry Potter','date': '02/04/2012','author' : 'J.K Rolling' , 'state' : 'neuf' , 'theme' :  'Science Fiction', 'loan' : {'name' : 'Arne', 'date' :' 20/03/2015'}})
db.books.insert({'title': 'NO SQL' , 'state' : 'neuf' , 'theme' :  'Computing','loan' : {}})
db.books.insert({'title': 'Lord of the ring', 'author' : 'J.R Tolkien' , 'state' : 'vieux' , 'theme' :  'Science Fiction','loan' : {}})
db.books.insert({'title': 'Batman', 'author' : 'Bob Kane' , 'state' : 'neuf' , 'theme' :  'Science Fiction' , 'loan' : {'name' : 'Nachury', 'date' :' 20/05/2015'}})
db.books.insert({'title': 'Superman','date': '05/02/2015', 'author' : 'Jerry Siegel' , 'state' : 'vieux' , 'theme' :  'Science Fiction' , 'loan' : {'name' : 'Alphonse', 'date' :' 20/05/2015'}})
db.books.insert({'title': 'Mathieu Nachury', 'author' : 'Nachury Mathieu' , 'state' : 'neuf' , 'theme' :  'Science Fiction', 'loan' : {'name' : 'Brigitte' , 'date' :' 20/02/2015'}})