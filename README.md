# Tp Chat_NodeJs

  <h2>  I - Installation de Node js</h2>
<div>
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
</p>
</div>

  <h2>  II - Téléchargement du projet</h2>
  <p>
Le projet est deja present sur gitHub Il suffit de les telecharger sur la page du projet :  <code>https://github.com/Chey47/Chat_NodeJs </code>
</p>

    <h2>III - Structure du projet</h2>
    <p>
    Le projet se contient les éléments suivants :
    <br>
    <ul>
    <li>
      une page index html.
    </li>
    <li>
    un dossier css.
    </li>
    <li>
    un dossier node_modules pour les dépendances.
    </li>
    <li>
    un fichier serveur.js pour gérer le serveur nodeJs .
    </li>
    <li>
    un dossier includes où se trouve les différents modules eet fichier de configuration du projet.
    </li>
    <li>
    un dossier js contenant les différents fichiers client.
    </li>
    </ul>
</p>



    <h2>IV - Lancement du projet</h2>
<p>
<ul>
<li> Il faut mettre le projet dans un serveur local ( Wamp - easyPHP - Mamp .... ) , plus précisément dans le dossier www </li>
<li> Modifier le fichier de configuration de la base de données (includes/configdb.js) en fournissant les coordonnés d'accès à votre base de données </li>
<li> Créer une base de données selon la configuration du fichier de configuration de la bd</li>
<li> Se placer avec le terminal de commandes dans le dossier du projet et lancer la commande suivante : <code> node serveur.js</code></li>
<li> Ouvrir index.html avec votre serveur local </li>
</ul>  
<p>
