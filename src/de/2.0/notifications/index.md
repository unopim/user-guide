# Benachrichtigungen

Benachrichtigungen in [UnoPim](https://unopim.com/) bieten ein In-App-Echtzeit-Alarmsystem, das Administratoren über wichtige Ereignisse und Hintergrundprozesse informiert. Eingeführt in **v0.2.0**, arbeitet das Benachrichtigungssystem zusammen mit optionalen E-Mail-Benachrichtigungen, um sicherzustellen, dass Sie keine wichtigen Updates verpassen.

Egal ob es sich um den Abschluss eines Massenimports, einen fehlgeschlagenen Exportauftrag oder eine Produktänderung handelt — Benachrichtigungen helfen Ihnen, alles im Blick zu behalten, was in Ihrem PIM passiert, ohne dass Sie jeden Abschnitt manuell prüfen müssen.

### Zugriff auf Benachrichtigungen

Um auf Ihre Benachrichtigungen zuzugreifen, klicken Sie auf das **Glocken-Symbol** in der oberen Navigationsleiste des Admin-Panels. Dies öffnet das Benachrichtigungs-Panel, in dem Sie alle aktuellen Alarme anzeigen können.

 <ImagePopup src="/assets/2.0/images/notifications/notification-panel.png" alt="Benachrichtigungs-Panel" />

### Arten von Benachrichtigungen

UnoPim sendet Benachrichtigungen für verschiedene Systemereignisse. Im Folgenden finden Sie die Hauptkategorien:

**1) Import-/Export-Job-Statusupdates**

Wann immer Sie einen Massenimport- oder Exportauftrag ausführen, sendet UnoPim automatisch eine Benachrichtigung, wenn der Job abgeschlossen ist, fehlgeschlagen ist oder Aufmerksamkeit erfordert. Dies ermöglicht es Ihnen, lang laufende Datenübertragungsoperationen zu überwachen, ohne auf der Job-Tracker-Seite bleiben zu müssen.

- **Abgeschlossen** — Der Import- oder Exportauftrag wurde erfolgreich beendet.
- **Fehlgeschlagen** — Der Auftrag ist auf Fehler gestoßen und konnte nicht abgeschlossen werden.
- **Mit Fehlern abgeschlossen** — Der Auftrag wurde beendet, aber einige Datensätze wurden aufgrund von Validierungsproblemen übersprungen.

**2) Produktänderungen**

Benachrichtigungen können Sie warnen, wenn bedeutende Produktdatenänderungen auftreten, wie z. B. Massenupdates oder Änderungen, die über die API vorgenommen werden. Dies ist nützlich, wenn mehrere Teammitglieder gleichzeitig am Produktkatalog arbeiten.

**3) Systembenachrichtigungen**

Allgemeine Alarme auf Systemebene, wie z. B. Erinnerungen an geplante Wartungsarbeiten oder wichtige Konfigurationsänderungen, werden ebenfalls über das Benachrichtigungs-Panel zugestellt.

### Funktionen des Benachrichtigungs-Panels

Klicken Sie auf das **Glocken-Symbol** oben rechts in der Kopfzeile, um das Panel zu öffnen. Ein **grüner Punkt** an der Glocke zeigt ungelesene Benachrichtigungen an.

<ImagePopup src="/assets/2.0/images/notifications/notification-panel.png" alt="Benachrichtigungs-Panel" />

Das Panel listet kürzliche Benachrichtigungen auf. Jeder Eintrag zeigt:

- **Titel** — Job-Typ + fortlaufende Nummer, z. B. `Import #15`, `Export #1`. Die Nummer stimmt mit der Spalte **ID** im [Job-Tracker](../data-transfer/job-tracker.md) überein, damit Sie durchklicken und den genauen Lauf finden können.
- **Body** — der Profilcode + Endzustand, z. B. *„Import 'Test' completed"* — nützlich, um mehrere Läufe desselben Profils zu unterscheiden.
- **Relativer Zeitstempel** — z. B. *„vor 4 Tagen"*.

Zwei Aktionen befinden sich am unteren Rand des Panels:

- **View All** — öffnet die vollständige Benachrichtigungsseite, auf der Sie einzelne Einträge durchsuchen, filtern und verwalten können.
- **Mark as Read** — eine einzelne Massenaktion, die den ungelesenen Zustand für jede im Panel sichtbare Benachrichtigung löscht.

::: tip
Die *Mark as Read / Unread*- und *Clear Notifications*-Steuerungen pro Benachrichtigung befinden sich nun auf der vollständigen Benachrichtigungsseite (über **View All**). Das Panel selbst behält nur die Massenaktionen *Mark as Read* und *View All*, damit es übersichtlich bleibt.
:::

### E-Mail-Benachrichtigungen

Zusätzlich zu In-App-Benachrichtigungen unterstützt UnoPim E-Mail-Benachrichtigungen für kritische Ereignisse. Wenn aktiviert, sendet das System eine E-Mail an die registrierte E-Mail-Adresse des Administrators neben der In-App-Benachrichtigung.

**So funktionieren E-Mail-Benachrichtigungen**

E-Mail-Benachrichtigungen werden automatisch für wichtige Ereignisse wie Import-/Export-Job-Abschlüsse und -Fehler gesendet. Dies stellt sicher, dass Sie auch dann zeitnahe Updates erhalten, wenn Sie nicht aktiv im Admin-Panel angemeldet sind.

**Konfiguration**

Die E-Mail-Zustellung wird auf Infrastrukturebene über Ihre UnoPim-`.env`-Datei konfiguriert — setzen Sie `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD` und `MAIL_FROM_ADDRESS`, damit sie zu Ihrem Mail-Anbieter passen (SMTP, Mailgun, Postmark usw.). UnoPim verwendet standardmäßige Laravel-Mail-Treiber und übernimmt die Einstellungen beim Applikationsstart automatisch.

::: tip
Testen Sie Ihre Mail-Konfiguration End-to-End, bevor Sie sich auf Benachrichtigungs-E-Mails verlassen. Lösen Sie ein wenig riskantes Ereignis aus (z. B. einen kleinen Import) und bestätigen Sie, dass die E-Mail ankommt; wenn nicht, prüfen Sie Ihr Laravel-Log (`storage/logs/laravel.log`) auf Mailer-Fehler.
:::

Durch die gemeinsame Nutzung von In-App- und E-Mail-Benachrichtigungen können Sie eine vollständige Sichtbarkeit aller wichtigen Ereignisse in Ihrer UnoPim-Instanz gewährleisten.
