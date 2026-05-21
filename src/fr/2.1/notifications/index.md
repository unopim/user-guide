# Notifications

Les notifications dans [UnoPim](https://unopim.com/) fournissent un système d'alerte in-app en temps réel qui tient les administrateurs informés des événements importants et des processus en arrière-plan. Introduit en **v0.2.0**, le système de notification fonctionne aux côtés des notifications email facultatives pour s'assurer que vous ne manquez jamais de mises à jour critiques.

Que ce soit la fin d'un import en masse, un job d'export échoué ou un changement de produit, les notifications vous aident à rester au top de tout ce qui se passe dans votre PIM sans avoir besoin de vérifier constamment chaque section manuellement.

### Accéder aux notifications

Pour accéder à vos notifications, cliquez sur l'**icône cloche** dans la barre de navigation supérieure du panneau d'administration. Cela ouvre le panneau de notifications où vous pouvez voir toutes les alertes récentes.

 <ImagePopup src="/assets/2.1/images/notifications/notification-panel.png" alt="Panneau de notifications" />

### Types de notifications

UnoPim envoie des notifications pour divers événements système. Voici les principales catégories :

**1) Mises à jour de statut des jobs d'import/export**

Chaque fois que vous exécutez un job d'import ou d'export en masse, UnoPim envoie automatiquement une notification lorsque le job est terminé, échoué ou nécessite de l'attention. Cela vous permet de surveiller les opérations de transfert de données de longue durée sans rester sur la page job tracker.

- **Completed** — Le job d'import ou d'export s'est terminé avec succès.
- **Failed** — Le job a rencontré des erreurs et n'a pas pu se terminer.
- **Completed with Errors** — Le job s'est terminé mais certains enregistrements ont été ignorés en raison de problèmes de validation.

**2) Modifications de produits**

Les notifications peuvent vous alerter lorsque des modifications de données produit importantes se produisent, telles que des mises à jour en masse ou des changements effectués via l'API. Ceci est utile lorsque plusieurs membres de l'équipe travaillent sur le catalogue produit simultanément.

**3) Notifications système**

Les alertes générales au niveau système, telles que les rappels de maintenance planifiée ou les modifications de configuration importantes, sont également livrées via le panneau de notifications.

### Fonctionnalités du panneau de notifications

Cliquez sur l'**icône cloche** en haut à droite de l'en-tête pour ouvrir le panneau. Un **point vert** sur la cloche indique des notifications non lues.

<ImagePopup src="/assets/2.1/images/notifications/notification-panel.png" alt="Panneau de notifications" />

Le panneau liste les notifications récentes. Chaque entrée affiche :

- **Titre** — type de job + numéro séquentiel, par exemple, `Import #15`, `Export #1`. Le numéro correspond à la colonne **ID** dans le [Suivi de tâches](../data-transfer/job-tracker.md), vous pouvez donc cliquer pour trouver l'exécution exacte.
- **Corps** — le code de profil + l'état terminal, par exemple, *"Import 'Test' completed"* — utile pour distinguer plusieurs exécutions du même profil.
- **Horodatage relatif** — par exemple, *"4 days ago"*.

Deux actions se trouvent en bas du panneau :

- **View All** — ouvre la page complète des notifications, où vous pouvez parcourir, filtrer et gérer les entrées individuelles.
- **Mark as Read** — une seule action en masse qui efface l'état non lu pour chaque notification visible dans le panneau.

::: tip
Les contrôles *Mark as Read / Unread* par notification et *Clear Notifications* se trouvent désormais sur la page complète des notifications (via **View All**). Le panneau lui-même ne conserve que les actions en masse *Mark as Read* et *View All* pour qu'il reste facile à parcourir.
:::

### Notifications email

En plus des notifications in-app, UnoPim prend en charge les notifications email pour les événements critiques. Lorsqu'elles sont activées, le système envoie un email à l'adresse email enregistrée de l'administrateur aux côtés de la notification in-app.

**Comment fonctionnent les notifications email**

Les notifications email sont envoyées automatiquement pour les événements clés tels que les complétions et les échecs de jobs d'import/export. Cela garantit que même si vous n'êtes pas activement connecté au panneau d'administration, vous recevez toujours des mises à jour en temps opportun.

**Configuration**

La livraison email est configurée au niveau infrastructure via votre fichier `.env` UnoPim — définissez `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD` et `MAIL_FROM_ADDRESS` pour correspondre à votre fournisseur de messagerie (SMTP, Mailgun, Postmark, etc.). UnoPim utilise des pilotes de messagerie Laravel standard et récupère les paramètres automatiquement au démarrage de l'application.

::: tip
Testez votre configuration de messagerie de bout en bout avant de vous fier aux emails de notification. Déclenchez un événement à faibles enjeux (par exemple, un petit import) et confirmez que l'email arrive ; s'il n'arrive pas, vérifiez votre journal Laravel (`storage/logs/laravel.log`) pour les erreurs du mailer.
:::

En utilisant à la fois les notifications in-app et email ensemble, vous pouvez garantir une visibilité complète sur tous les événements importants se produisant dans votre instance UnoPim.
