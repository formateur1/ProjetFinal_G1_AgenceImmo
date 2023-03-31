# ProjetFinal_G1
//Jour1// (Scrum master : Lucie Argaud) <br> <br>
-Mise en place Notion
<ul>
<li>
  Création projet</li><li>
  Ajout des différentes personnes</li><li>
  Création des catégories des tâches et ajout des tâches</li><li>
  Attribution des tâches</li><li>
  Tout au long du projet : compléter l'avancement des tâches </li>
</ul>
-Configuration Jenkins<br>
<ul>
<li>
  Connexion avec les identifiants créés lors de l'installation de Jenkins</li><li>
  Création d'un nouveau projet (item) Pipeline</li><li>
  Liaison avec Github : sélectionner Github Project et entrer l'url du repository Github</li><li>
  Ajouter le GitHub hook trigger dans Build Triggers pour lancer Jenkins à chaque push</li><li>
  Dans Pipeline, sélectionner Pipeline script from SCM puis Git. Ajouter l'url du repository Github puis les identifiants GitHub
  </li>
  </ul>
-Configuration Ngrok<br>
<ul>
<li>
  Ouvrir un panneau de commande dans le dossier contenant Ngrok (commande cmd dans la barre du path) </li><li>
  Entrer ngrok http + lien Jenkins (localhost:****) </li><li>
  Copier le lien Forwarding jusqu'au .io </li><li>
  Ajouter le lien à Github 
</li>
</ul>
-Configuration Github<br>
<ul>
<li>
  Créer un nouveau repository </li><li>
  Ajouter des collaborateurs : Settings -> Collaborators -> Add people </li><li>
  Ajout du fichier Jenkinsfile</li><li>
  Pour la personne qui crée le repository : création du projet Spring puis lier le repository avec Team -> Share Project -> Pull puis entrer l'url du repository Github</li><li>
  Pour les autres collaborateurs : dans Eclipse File -> Import -> Project from Git (with smart import) -> Clone URI puis entrer l'url du repository. Importer la branche master et faire un update du projet Maven
</li>
</ul>
-Création diagramme de class et cas d'utilisation (star UML)<br>
  <ul>  *Diagramme de classe
 <li>
  Création des classes Administrateur, Gérant, Client, Personne, AgenceImmobiliere, Offre, Questions</li><li>
  Ajout des attributs à chaque classe. Administrateur, Gérant et Client sont des classes filles de Personne </li><li>
  Ajout des association et de la cardinalité entre les classes 
 </ul>  
  
  <ul>  *Diagramme de cas d'utilisation
<li>
  Ajout des 3 acteurs (Client, Gérant, Administrateur) puis ajout des fonctionnalités associées, suivant les informations données</li><li>
  Ajout des étapes nécessaires non précisées dans les informations données (Exemple : étape du message envoyé par le client)</li><li>
  Ajout des liens entre les étapes (flèche include)</li>
 </ul>
-Création du projet Spring (Spring Starter Project) avec les dépendances : H2 Database, Spring Boot Devtools, Spring Web, Lombok, Spring Data JPA, Thymeleaf, MySQLDriver
<ul>
 <li>Java version 14 </li><li>
 Spring version 2.7.9 </li><li>
 Fichier application.properties : configuration à la base de données </li><li>
 Création des packages : com.inti.model, .repository, .controller </li><li>
 Ajout des classes crées sous Star UML : <br>
 Sur Star UML: Tools -> Java -> Generate Code -> Selectionner le model utilisé et enregistrer le dossier de fichiers <br>
 Sur Eclipse : glisser les fichiers dans le package com.inti.model. Rajouter une ligne de code package com.inti.model </li><li>
 Ajout des annotations sur les classes qui ne sont pas des classes filles : @Entity, @Data, @Table, @NoArgConstructor, @Id et @GeneratedValue(stratedy=GenerationType.IDENTITY). <br>
 La classe mère Personne a été configurée en abstract puisqu'une personne est forcément dans une des 3 classes filles. <br>
 Pour les classes filles, mettre uniquement les @Entity, @Table et @Data si il y a des arguments propres à la classe fille
 Création des relations entre les classes : @OneToMany et @ManyToOne avec la commande @JoinColumn(name="") dans la classe avec la plus petite cardinalité. L'autre classe n'a pas besoin de faire le @JoinColumn, il suffit de préciser @ManyToOne(mappedBy = "NomObjet"). Avec les relations, il y a un risque que certaines fonctions appellent en boucle des objets. La commande @JsonIgnoreProperties permet d'anticiper ces erreurs.</li><li>
 Pour créer les tables sur SQL en prenant en compte l'héritage, on ajoute les annotations @Inheritance (strategy=InheritanceType.JOINED) et @PrimaryKeyColumn(name=""). Ces annotations permettent de créer une table de la classe mère et une table par classe fille, avec les attributs associés.</li><li>
 On lance le projet en Spring Boot App (Run as -> Spring Boot App), ce qui crée automatiquement les tables en base de données. </li><li>
 Liaison avec github : Team -> Push Branch master puis coller le lien du github utilisé </li><li>
 Push du projet créé </li>
</ul>

//Jour2// (Scrum master : Lucie Argaud) <br>
-Diagramme MCD<br>
<ul>
<li></li> Apres la création des tables en base de données, on genere un diagramme MCD à partir des tables. Dans file, on cree un new model -> add diagramm -> dans l'onglet database, on clique sur reverse engineer -> bien choisir dans "stored connection" la base de donnée utilisée (qui contient les tables genereés) -> next -> dans "connect to DBMS" on ne touche pas aux paramètres -> next -> on selectionne le nom de la DB dans laquelle les tables ont été crées -> next -> dans "select objects", si la DB comporte plusieurs tables on clique sur "show filter" de "MySQL Table Objects", on selectionne les tables dont on veut generer le schema MCD -> execute et ensuite next -> on obtient le diagramme MCD des tables (relations et clés étrangères y compris. <Li></li>
<li></li> Dans file on enregistre ensuite le schéma ou effectue une capture d'écran et enregistre l'image en format PNG dans un dossier. <li></li>
</ul>
<li></li>
Dans github on insère les images des 3 diagrammes(cas d'utilisatio, classe, MCD)
<li></li>



-Répartition des fonctionnalités entre les personnes de l'équipe<br>

























