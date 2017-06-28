class Task {

	constructor() {}

	add() {
		console.log('hola');
	}
	delete() {}
	show() {
		app.db.collection('task').findOne({}, function (err, doc) {
			res.render("index", {
				"task_array": doc
				//"name":doc.name
			});
			console.log(doc);
		});
	}
	update() {}
}

module.exports = Task;