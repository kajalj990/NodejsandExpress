var bodyParser = require('body-parser')

var list =[{id:1,item:"tomatoes",price:50},{id:2,item:"sweet",price:200}]

var urlencodedParser = bodyParser.urlencoded({ extended: true })

module.exports = function(app){

    app.get('/items',function(req,res){
        res.render('List', { list:list});
    })
    app.get("/items/:id", function (req, res) {
        requiredItem.push(data[req.params.id]);
        console.log(requiredItem);
        res.send(requiredItem);
        // res.render("items", { items: requiredItem });
        requiredItem.pop();
      });

    app.patch("/items/:id", function (req, res) {
        console.log(req.body);
        data[req.params.id] = req.body;
        res.send(data);
      });

    app.post('/item',urlencodedParser,function(req,res){
        var newItem = req.body;
        //add the new list from the post route into the array
            list.push(newItem);
        //after adding to the array go back to the root route
            res.redirect("/items");
    })

   

    app.delete('/item/:id',function(req,res){
        data.splice([req.params.id], 1);
        console.log(data);
        res.send(data);
    })

}