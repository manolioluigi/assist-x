<h1>Guida alla Configurazione e Avvio dell'Applicazione</h1>

<h3>Cosa Serve</h3>

    Node.js, IPFS Desktop

<h3>Configurazione di IPFS</h3>

  Se non hai IPFS, puoi installarlo usando il pacchetto ipfs tramite npm. Esegui questo comando: 
    
        npm install -g ipfs

<h3>Avvia IPFS:</h3>

  Dopo l'installazione, avvia IPFS con il comando:

    ipfs daemon

  Questo avvierà IPFS sulla porta predefinita 5001 e sul protocollo http.

<h3>Configurazione dell'Applicazione</h3>

  Clona la repository

<h3>Installa le Dipendenze:</h3>

  Vai nella cartella del progetto e installa le dipendenze necessarie:
  
    npm install

<h3>Configura il File .env:</h3>

  Modifica il file .env copy con i tuoi dati

<h3>Avvia l'Applicazione:</h3>

  Usa nodemon (o un altro strumento di avvio) per avviare l'applicazione:

      npm start

  L'applicazione dovrebbe essere in esecuzione su http://localhost:3000.
