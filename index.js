const express = require('express');
const fileUpload = require('express-fileupload');
const productRoutes = require('./routers/productRouter');

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use('/api', productRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});

