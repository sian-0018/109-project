const db = require('../utils/database');

const portfolio_33 = class portfolio_33 {
	constructor(idsum, product, text, img, p_id, head, money, body, link) {
		this.idsum = idsum;
		this.product = product;
		this.text = text;
		this.img = img;
		this.p_id = p_id;
		this.head = head;
		this.money = money;
		this.body = body;
		this.link = link;
	}

	// READ
	static fetchAll() {
		return db.execute('SELECT * FROM 109_project.sum;');
	}

	static fetchCake(id) {
		return db.execute('SELECT * FROM 109_project.product2 where p_id = 2;');
	}
	static fetchCoffee(id) {
		return db.execute('SELECT * FROM 109_project.product2 where p_id = 1;');
	}
	static fetchDessert(id) {
		return db.execute('SELECT * FROM 109_project.product2 where p_id = 3;');
	}

	//Create
	static create(req, res) {
		return db.execute(
			'INSERT INTO  109_project.product2(idsum,p_id,img,head,money,body,link) VALUES(?,?,?,?,?,?,?)',
			[ req.body.idsum, req.body.p_id, req.body.img, req.body.head, req.body.money, req.body.body, req.body.link ]
		);
	}

	//Update
	static updateById(req, res) {
		return db.execute('UPDATE 109_project.product2 SET p_id=?,img=?,head=?,money=?,body=?,link=? where idsum=?', [
			req.body.p_id,
			req.body.img,
			req.body.head,
			req.body.money,
			req.body.body,
			req.body.link,
			req.body.idsum
		]);
	}

	//Delete
	static deleteById(id) {
		return db.execute('DELETE FROM 109_project.product2 where idsum=?', [ id ]);
	}
};

// test
const test = async (req, res) => {
	try {
		await portfolio_33.fetchAll().then(([ rows ]) => {
			console.log('testFetchAll', JSON.stringify(rows));
		});
	} catch (err) {
		console.log(err);
	}
};

// test();

const test2 = async (req, res) => {
	try {
		await portfolio_33.fetchCake().then(([ rows ]) => {
			console.log('testFetchCake', JSON.stringify(rows));
		});
	} catch (err) {
		console.log(err);
	}
};

// test2();

module.exports = portfolio_33;
