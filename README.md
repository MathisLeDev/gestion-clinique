22/03/2024 - Mathis Brouard


## Installation des dépendances :
``` bash
npm install
```

# DOCKER

## Télécharger l'image postgres :
``` bash
docker pull postgres
```

## Lancer le conteneur :
``` bash
docker run -p 5432:5432 --name postgres-container -e POSTGRES_PASSWORD=0000 -d postgres
```

## Liste des conteneurs éxecutés :
``` bash
docker ps
```

## Liste des images :
``` bash
docker images ls
```


## Accéder au conteneur :
``` bash
docker exec -it lenomici bash
```


## ⚠ IMPORTANT ⚠ IMPORTATION DES DONNEES AVEC TYPEORM

La gestion des migrations est dans le app-data-source.ts, il faut donc lancer le serveur pour importer les données
Si rien ne se passe au lancement. Vérifier dans le serveur.ts que conn.runMigrations() est bien décommenté

#### Créer une migration exemple (Uniquement pour dev):
``` bash
   typeorm migration:create .\src\migrations\patient   
```


## Lancement du serveur :

### IMPORTANT ⚠
Dans app-data-source.ts, changer l'ip de l'host par celui du conteneur de votre machine, le vEthernet(WSL) dans le gestionnaire de tâches

``` bash
npm start
```

### Lancer les tests :
Il faut avoir le serveur lancé pour lancer les tests avec npm start
```bash 
npm test
```


