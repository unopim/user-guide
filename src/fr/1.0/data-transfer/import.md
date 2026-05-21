# Importer

L'import en masse est une fonctionnalité qui permet aux utilisateurs d'importer rapidement et efficacement de grandes quantités de données dans un système. Il simplifie le processus et fait gagner du temps en évitant d'avoir à ajouter chaque élément d'information un par un.

La fonctionnalité fonctionne différemment pour chaque système et a une grande variété de cas d'utilisation dans de nombreuses industries ainsi que dans [UnoPim](https://unopim.com/).

### Étapes pour ajouter un import en masse dans UnoPim

**Étape 1 :** Allez dans le panneau d'administration d'UnoPim, cliquez sur **Transfert de données >> Importer >> Créer un import**.

   <ImagePopup src="/assets/1.0/images/data-transfer/createImport.png" alt="Créer un import" />

**Étape 2 :** Dans les configurations générales, ajoutez les champs ci-dessous :

1) **Code -** Saisissez le code de votre processus d'import.

2) **Type -** Sélectionnez le type, c'est-à-dire (Products, Categories) que vous souhaitez importer.

3) **File –** Choisissez le fichier dans le format souhaité **(CSV, XLS, XLSX)** et assurez-vous d'avoir tous les champs requis dans le fichier.

4) **Download Sample –** Vous pouvez également télécharger les fichiers d'exemple des types (Products, Categories). Assurez-vous que le fichier que vous téléversez est similaire à ce fichier d'exemple.

5) **Image Directory Path –** Pour les fichiers d'images de produit, ils doivent être placés dans le dossier **/project-root/storage/app/import/product-images**.

6) **Action –** Sélectionnez depuis la configuration des paramètres si vous souhaitez Create/Update ou Delete les enregistrements.

7) **Validation Strategy –** Cette fonctionnalité unique vous permet d'ignorer les erreurs ou de vous arrêter aux erreurs lors de l'import des données.

8) **Allowed Errors –** Cette fonctionnalité vous permet de définir combien d'erreurs seront négligées lors de l'import des données.

9) **Field Separator –** Cette fonctionnalité vous permet de définir le séparateur de champs. Par exemple, si vous utilisez **","** comme séparateur de champs, alors les données dans le fichier sont séparées par ce caractère.

Maintenant, cliquez sur le bouton **Save Import**.  

   <ImagePopup src="/assets/1.0/images/data-transfer/saveImport.png" alt="Enregistrer l'import" />

**Étape 3 :** Cliquez maintenant sur le bouton **Importer maintenant** comme illustré dans l'image ci-dessous.

   <ImagePopup src="/assets/1.0/images/data-transfer/importNow.png" alt="Importer maintenant" />

**Étape 4 :** Cliquez maintenant sur **Transfert de données >> Suivi de tâches** où vous voyez l'état de votre processus d'import. Une fois le statut completed, le processus d'import est terminé avec succès.

Vous pouvez également exécuter la commande ci-dessous à la racine de votre UnoPim.

**php artisan queue:listen**


   <ImagePopup src="/assets/1.0/images/data-transfer/importOutput.png" alt="Sortie de l'import" />

En suivant les étapes ci-dessus, vous pouvez facilement créer des données d'import dans UnoPim.
