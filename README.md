# ProjetFinal_G1
//Jour1// <br> <br>
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
-Configuration Ngrok<br>
-Configuration Github<br>
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
 On lance le projet en Spring Boot App (Run as -> Spring Boot App), ce qui crée automatiquement les tables en base de données. </li><li>
 Liaison avec github : Team -> Push Branch master puis coller le lien du github utilisé </li><li>
 Push du projet créé </li>
</ul>
