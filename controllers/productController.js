const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { create } = require('ipfs-http-client');
const fs = require('fs');
const axios = require('axios');

const ipfs = create({
    host: '127.0.0.1',
    port: 5001,
    protocol: 'http'
});


const checkIpfsConnection = async () => {
    try {
        console.log('Verifica connessione IPFS...');
        const response = await axios.post('http://127.0.0.1:5001/api/v0/id');
        //console.log('ID IPFS:', response.data);
    } catch (error) {
        console.error('Errore di connessione IPFS:', {
            message: error.message,
            stack: error.stack,
            details: error
        });
    }
};


checkIpfsConnection();

const createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    const file = req.files ? req.files.specFile : null;

    if (!file) {
        return res.status(400).json({ error: 'Nessun file fornito' });
    }

    const priceAsFloat = parseFloat(price);
    if (isNaN(priceAsFloat)) {
        return res.status(400).json({ error: 'Prezzo non valido' });
    }

    try {
        console.log('Dati ricevuti:', { name, description, price });
        console.log('File ricevuto:', file.name);

        // carica il file su IPFS
        console.log('Aggiunta del file su IPFS...');
        const fileAdded = await ipfs.add(file.data);
        const ipfsHash = fileAdded.path;

        console.log('File aggiunto a IPFS con hash:', ipfsHash);

        // salva i dettagli del prodotto nel database
        const product = await prisma.product.create({
            data: {
                name,
                description,
                price: priceAsFloat,
                ipfsHash
            }
        });

        res.json(product);
    } catch (error) {
        console.error('Errore nella creazione del prodotto:', error.message);
        res.status(500).json({ error: 'Errore nella creazione del prodotto', details: error.message });
    }
};


module.exports = {
    createProduct
};
