# Tp Chat_NodeJs

    I - Installation de Node js
    
    <p>
  Pour avoir node js il suffit de se rendre sur https://nodejs.org/en/download/ et télécharger la version correspondante á votre système d'exploitation.
  </p>
  <p>
  Durant L'installation il faut verifier que l'option "Add to PATH" est bien activé, elle permet d ajouter node.js,npm et les module necessaire aux variable d environnements de votre OS.
  </p>
  <p>
  Pour tester le bon fonctionnement de node , il suffit d'ouvrir le terminal de commande et de taper la commande suivante : node --help si la documentation s'affiche, c'est parfait.

  </p>
  <p>
  <em>
  NB: Dans le cas echeant il faut verifier que le chemin d'installation de node à votre variable d'environnement.
  </em>

    II - Téléchargement du projet
    
Il suffit de cliquer sur Download sur la page github du projet : <code> https://github.com/Chey47/Chat_NodeJs </code>   

    III - Structure du projet
    
Le projet se compose des éléments suivants :<br>
<ul>
<li> une page index html </li>
<li> un dossier css </li>
<li> un dossier pour les dépendances de nodeJs appelé node_modules </li>
<li> un fichier pour gérer le serveur nodeJs appelé serveur.js </li>
<li> un dossier includes où se trouve les différents modules du projet </li>
<li> un dossier js contenant les différents fichiers client </li>
</ul>

    IV - Lancement du projet
    
<ul>
<li> Il faut mettre le projet dans un serveur local ( Wamp - easyPHP - Mamp .... ) , plus précisément dans le dossier www </li>
<li> Modifier le fichier de configuration de la base de données (includes/configdb.js) en fournissant les coordonnés d'accès à votre base de données </li>
<li> Créer une base de données selon la configuration du fichier de configuration de la bd</li>
<li> Se placer avec le terminal de commandes dans le dossier du projet et lancer la commande suivante : <code> node serveur.js</code></li>
<li> Ouvrir index.html avec votre serveur local </li>
</ul>  

  
  

  
  


    

  

  
  

  


      
      
