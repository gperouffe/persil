import * as express from 'express';
import { Persil } from "./common/model";

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

    
app.get('/persil', function (req, res) {

    let persils = new Array<Persil>();

    let persil1 = new Persil();
    persil1.NomCommun = "Persil frisé";
    persil1.NomScientifique = "Petroselinum crispum var. crispum"
    persils.push(persil1);

    let persil2 = new Persil();
    persil2.NomCommun = "Persil plat";
    persil2.NomScientifique = "Petroselinum crispum var. neapolitanum"
    persils.push(persil2);

    let persil3 = new Persil();
    persil3.NomCommun = "Persil tubéreux";
    persil3.NomScientifique = "Petroselinum crispum var. tuberosum"
    persils.push(persil3);

    res.json(persils);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});