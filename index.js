const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
const buildDir = path.resolve(__dirname, '../build');

app.use(morgan(':date[clf] :method :url :req[header] :status :response-time ms - :res[content-length]'));

console.log("Express server listening on port %d", app.address().port)

app.use(express.static(buildDir));

app.get('*', (req, res) => res.sendFile(`${buildDir}/index.html`));

app.listen(process.env.PORT || 5010);

