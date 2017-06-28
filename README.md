{
        task:{
                id:'',
                name:'',
                date:'',
                label:''
        }
}

mongod --dbpath data/db --logpath data/log/log --smallfiles
mongo
use booksDb

//VOIR LES DONNES
db.book.find()

//INSERER UNE DONNEE
db.book.insert({'isbn':'978-2212135602','title':'Les bases de données NoSQL','author':'Rudy Bruchez','purchase_date':'2017-06-06','state':'new','theme':'course','label':'course'});