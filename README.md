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

## Lancement du serveur :

### IMPORTANT ⚠
Dans app-data-source.ts, changer l'ip de l'host par celui du conteneur de votre machine, le vEthernet(WSL) dans le gestionnaire de tâches

``` bash
npm start
```

### Lancer les tests :
Il faut avoir le serveur lancé pour lancer les tests avec npm start
````bash 
npm test
```


