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
   Problème : Affichage sur MySQL uniquement de la classe abstraite mère 'Personne' et non des classes filles 'Client', 'Administrateur' et 'Gerant'. <br>
 Pour créer les tables sur SQL en prenant en compte l'héritage, on ajoute les annotations @Inheritance (strategy=InheritanceType.JOINED) dans la table MERE et @PrimaryKeyColumn(name="") dans les tables FILLES. Ces annotations permettent de créer une table de la classe mère et une table par classe fille, avec les attributs associés.</li><li>
 On lance le projet en Spring Boot App (Run as -> Spring Boot App), ce qui crée automatiquement les tables en base de données. </li><li>
 Liaison avec github : Team -> Push Branch master puis coller le lien du github utilisé </li><li>
 Push du projet créé </li>
</ul>

//Jour2// (Scrum master : Lucie Argaud) <br>
-Diagramme MCD<br>
-Répartition des fonctionnalités entre les personnes de l'équipe<br>

- CRUD Back-end <br>
<ul>
* Gerant : <br> <li>
  Ajout des fonctions ajouter/modifier (save), supprimer (delete), récupérer de la BDD une/des offre(s)  </li><li>
  La liste des offres doit être visible par tous (client-gérant) : choix de faire la fonction 'getListeOffres' dans le controller du gerant pour avoir tous les CRUD     'Offre' au même endroit, l'accès sera donné plus tard au client.  </li><li>
  Ajout des fonctions getListeClients() et getClientByID() mais l'ajout, la modification et la suppression se feront par le client avec la validation de l'admin. </li><li>
  Ajout d'une liste d'offre proposé par le gérant en attribut de la classe client pour que le client puisse les consulter. </li><li>
  Ajout d'une fonction permettant d'ajouter des offres à proposer à un client précis: récuperer le client avec son ID et mettre a jour sa liste d'offres proposées.<br>
  **Reflexion sur le possible futur ajout d'une liste similaire pour les croquis proposés.
  
  <br>
 * Offre : 
  <li>Ajout de la fonction noter Offre</li>
  <li>Dans le model Offre, ajouter en attribut une liste de notes, une fonction permettant d'ajouter un note dans cette liste et une autre fonction calculant   la moyenne de ces notes.</li>
  <li>
  Création du repository IOffreRepository avec en extends JpaRepository.
  </li>
  <li>
  Création du controller OffreController pour définir le type et le chemin du contrôleur. Injection du repository IOffreRepository avec l'annotation          @Autowired
  </li>
  <li>
  Dans ce contrôleur ajout des méthodes API ajouterNote et MoyenneNotes avec les mappers correspondants.
  </li>
  
 </ul>
 - Configuration Front-end <br>
 <ul> 
  <li> 
 Création du projet coté angular avec la commande: ng new ProjetFinal_G1 --defaults </li><li>
 Mettre le projet sur GitHub, sur GitHub : new File et ajouté le lien du projet créer sur Visual Code  </li><li>
 Creer une nouvelle branche: dans Visual Code -> Source Controll -> configurer push et ajouter une nouvelle branche  </li><li>
 Ajout du mapping avec @CrossOrigin(origins = {"URL"}) dans controller <br>
 **Probleme de requètes http, erreur dans la connexion angular-eclipse NON REGLÉ   </li>
 </ul>
  -  Creation des modèles Front-end  <br> <ul> 
  <li>
    Ajout des modèles (client, gerant, admin, offre) dans un dossier 'model": ng g class model/gerant --type=model  </li><li>
    Ajout component (offre, gerant, ...) dans un dossier 'component': ng g c component/gerantComponent  </li><li>
    Ajout des service (offre, gerant, ...) dans un dossier 'service': ng g s service/gerantService  </li> <br>
   </ul>
<ul>
* Fonctionnalite Gerant: Acceder aux listes (client et offres)  <br>  
  <li>
    Ajout du html affichachant la liste des clients :  </li><li>
    Creation manuelle provisoire de clients et d'offres  </li><li> 
    Ajout des clients et des offres dans des listes  </li><li> 
     </li><li> 
  </li>
  </ul>
  
  //Jour3// (Scrum master : ) <br>
<ul>
* Gerant  : focntion ajouter une nouvelle Offre : <br> <li>
  Formulaire de création  d'une nouvelle offre via une page d'accueil : </li><li> <br>
  Dans le component gerant, ajouter un bouton qui redirige sur le formulaire <br>
  Creation du formulaire via un nouveau composent ng g c formOffre <br>
  Implémenter OnInit() dans .ts <br>
  Déclarer et initialiser dans OnInit() les attributs <br>
  Ajouter la fonction ajouterOffre() qui lorsque le formulaire est soumis, appele la fonction saveOffre() dans offreService. <br> 
  Ajouter la  fonction saveOffre() dans offreService qui effectue une requette de type post, et renvoie un observable. <br>
  
  Coté back-end faire appel à la fonction dans le controller de la classe gérant qui permet de sauvegarder l'offre envoyé par la requete. </li><li>
  <br> S'assurer que les fonctions aient le même nom. (Idem pour les fonctitons delete, uptade, getById et getAll)
  
  Probleme avec les attribut en boolean car récupéré en string dans le formulaire html : utiliser des boucles if pour convertir "true" et "false" en true et false <br>
  Problème de connexion entre le formulaire et la base de donnée :   Test de récupération du modèle avec des console.log et d'alert<br> 
  Fermer tout les caches (ctrl C dans Visual Code, fermer via le gestionnaire de taches les taches superflux d'Eclipse) <br>
  Vérifier que tout est lancé (run spring en Eclipse, MySQL ouvert et Visual Code ng serve -o <br> 
  Creation d'un constructeur sans id (autogénéré coté bdd) et sans note (attribuée par les clients) <br> </li><li>
  
    //Jour4// (Scrum master : ) <br>
<ul>
* CRUD offre dans Gerant : <br> <li>
  Ajouter un bouton dans l'accueil du gerant qui redirige vers le formulaire d'ajout d'un nouvelle offre </li><li>
  Affichage de la liste des offres pour le gérant (différent de celle pour les clients car les fonctions supprimé et modifié une offre y seront accessibles ) : </li><li>
  Ajouter un nouveau composent : ng g c offreGerant <br>
  Implémenter et récuperer la liste des offres dans OnInit() en appelant la fonction getListeOffres() dans offre service <br>
  Ajouter la fonction getListeOffres() qui effectue une requete de type post et retourne une liste d'observable, elle fait appel à la fonction findAllOffres() dans le controller de la classe gérant.
  Afficher la liste récupéré dans le offreGerant.html avec une boucle " *ngFor="let o of listeOffres$ | async" " 
  Ajouter une colonne actions. <br>
  Ajouter la fonction deleteOffre avec un bouton dans la liste des offres gerant. </li><li>
  Appelé la fonction deletOffre(o.id) dans offre service pour effectuer une requete de type delete et ne retourne rien.
  Ajouter la fonciton updateOffre(o.id) avec un bouton dans la liste des offres gerant. </li><li>
  Rediriger vers un formulaire de modification d'une offre avec this.router.navigate(['modifierOffre/'+id]); <br>
  Ajouter un nouveau composent : ng g c modifierOffre <br>
  Recupérer l'id dans l'url avec le constructeur : " constructor(private ar: ActivatedRoute, private os: OffreService, private fb: FormBuilder) { 
    this.id = this.ar.snapshot.params['id'] ;
  } " <br>
 Dans le html faire un formulaire <form [formGroup]="offreForm" (ngSubmit)="updateOffre()"> <br>
  Avec la fonction updateOffre(), rediriger vers offre service pour faire la requete : this.os.modifierOffre(this.offreForm.value).subscribe();
  <br> Le subscribe() est nécéssaire avec des observables. <br>
  Dans offre service faire la requete de type put et qui retourne un observable.
  Ajouter dans le menu du gérant la possibilité de chercher une offre par son id </li><li>
  Faire un input permettant de rentrer l'id dans l'url avant de rediriger vers elle avec " [(ngModel)]="idOffre" " dans le input. <br>
  Problème de reconnaissance du formulaire actif : ajouter un name dans le input et bien déclarer ET initialiser la variable idOffre dans le .ts 
   <br>
  Rediriger vers un la page d'affichage d'une offre this.router.navigate(['offreById/'+idOffre]); <br>
  Ajouter un nouveau composent : ng g c offreById <br>
  Recupérer l'id dans l'url avec le constructeur comme pour la fonction modifier <br>
  Implémenter OnInit () et y récupéré l'offre par son id en appelant la fonction getOffreById(id) dans offre service (requete de type get, retourne un observable) <br>
  Afficher toutes les informations de l'offre avec une boucle *ngIf="offre$ | async as o; else faux" où "<ng-template #faux >" affiche un message si l'offre n'est pas correctement récupérée. <br>
  Ajouter les fonctions pour supprimé et modifié une offre (identiques à celles dans la liste de toutes les offres).
  </ul>
  
  
