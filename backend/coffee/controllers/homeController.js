const home = require('../models/homeModels');

//read
exports.getHome = async(req, res) => {
    let data = {};
    try {
        await home.fetchAll().then(([rows]) => {
            console.log('getHome',JSON.stringify(rows));
            // res.json(rows);
            data.home = rows;
        });

        res.render('home2',{ title: 'home',data: data.home});
    }catch (err) {
        console.log(err);
    }
};
exports.getCake = async(req, res) => {
    let data = {};
    try {
        await home.fetchCake().then(([rows]) => {
            // console.log('getHome',JSON.stringify(rows));
            // res.json(rows);
            data.home = rows;
        });

        res.render('cake',{ title: 'home',data: data.home});
    }catch (err) {
        console.log(err);
    }
};
exports.getCoffee = async(req, res) => {
    let data = {};
    try {
        await home.fetchCoffee().then(([rows]) => {
            // console.log('getHome',JSON.stringify(rows));
            // res.json(rows);
            data.home = rows;
        });

        res.render('coffee',{ title: 'home',data: data.home});
    }catch (err) {
        console.log(err);
    }
};
exports.getDessert = async(req, res) => {
    let data = {};
    try {
        await home.fetchDessert().then(([rows]) => {
            // console.log('getHome',JSON.stringify(rows));
            // res.json(rows);
            data.home = rows;
        });

        res.render('dessert',{ title: 'home',data: data.home});
    }catch (err) {
        console.log(err);
    }
};

//create
exports.createProduct = async(req, res, next)=>{
    console.log('createProduct',req.body);
    try{
        await home.create(req,res).then(([rows])=> {
            res.redirect('/home2/cake');
        });
    }catch(err){
        console.log(err);
    }
}

//update
exports.updateProduct = async(req, res, next)=>{
    console.log('updateProduct',req.body);
    try{
        await home.updateById(req,res).then(([rows])=> {
            res.redirect('/home2/cake');
        });
    }catch(err){
        console.log(err);
    }
}

//delete
exports.deleteProductById = async(req, res, next)=>{
    console.log('deleteProductById',req.params.id);
    try{
        await home.deleteById(req.params.id).then(([rows])=> {
            res.redirect('/home2/cake');
        });
    }catch(err){
        console.log(err);
    }
}




