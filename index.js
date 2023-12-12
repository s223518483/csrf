let express = require("express");
let cors = require("cors");
let proxy = require('express-http-proxy');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

app.use(cors());

app.use('/proxy', proxy('localhost:8080', {
    proxyReqPathResolver: function(req) {
        return '/api/create-checkout-session' + require('url').parse(req.url).path;
    },
    filter: function(req) {
        return req.method === 'POST';
    }
}));

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

