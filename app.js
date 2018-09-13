var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Contacto        = require("./models/contactos");

mongoose.connect("mongodb://localhost/Gourou", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/contacto", function(req, res){
    res.render("contacto/contacto");
});

app.post("/contacto", function(req, res){
    var newContacto = req.body.data;
    Contacto.create(newContacto, function(err, newlyContacto){
        if(err){
            console.log(err);
        } else {
            console.log(newlyContacto);
            res.render("contacto/correcto")
        }
    });

});

app.get("/nosotros", function(req, res){
    res.render("nosotros/nosotros")
});

app.get("/servicios", function(req,res){
    res.render("servicios/servicios")
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Esta vivo!!!!")
})
//process.env.PORT,process.env.IP