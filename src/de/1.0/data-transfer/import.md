# Import

Der Bulk-Import ist eine Funktion, mit der Benutzer schnell und effizient große Datenmengen in ein System importieren können. Er vereinfacht den Prozess und spart Zeit, da nicht jede einzelne Information einzeln hinzugefügt werden muss.

Die Funktion arbeitet bei jedem System anders und hat eine breite Palette von Anwendungsfällen in vielen Branchen sowie in [UnoPim](https://unopim.com/).

### Schritte zum Hinzufügen eines Bulk-Imports in UnoPim

**Schritt 1:** Gehen Sie zum Admin-Panel von UnoPim und klicken Sie auf **Datentransfer >> Importe >> Import erstellen**.

   <ImagePopup src="/assets/1.0/images/data-transfer/createImport.png" alt="Import erstellen" />

**Schritt 2:** Fügen Sie unter den allgemeinen Konfigurationen die unten stehenden Felder hinzu:

1) **Code -** Geben Sie den Code Ihres Import-Prozesses ein.

2) **Type -** Wählen Sie den Typ (Products, Categories), den Sie importieren möchten.

3) **File –** Wählen Sie die Datei in Ihrem gewünschten Format **(CSV, XLS, XLSX)** und stellen Sie sicher, dass die Datei alle erforderlichen Felder enthält.

4) **Download Sample –** Sie können auch die Beispieldateien der Typen (Products, Categories) herunterladen. Stellen Sie sicher, dass die hochgeladene Datei dieser Beispieldatei ähnelt.

5) **Image Directory Path –** Produktbilddateien sollten in den Ordner **/project-root/storage/app/import/product-images** abgelegt werden.

6) **Action –** Wählen Sie aus der Settings-Konfiguration, ob Sie Datensätze Create/Update oder Delete möchten.

7) **Validation Strategy –** Diese einzigartige Funktion ermöglicht es Ihnen, Fehler beim Importieren der Daten zu überspringen oder anzuhalten.

8) **Allowed Errors –** Diese Funktion legt fest, wie viele Fehler beim Importieren der Daten ignoriert werden.

9) **Field Separator –** Mit dieser Funktion können Sie die Felder festlegen. Wenn Sie zum Beispiel **","** als Feldtrennzeichen verwenden, werden die Daten innerhalb der Datei damit getrennt.

Klicken Sie nun auf die Schaltfläche **Save Import**.  

   <ImagePopup src="/assets/1.0/images/data-transfer/saveImport.png" alt="Import speichern" />

**Schritt 3:** Klicken Sie nun auf die Schaltfläche **Jetzt importieren**, wie im untenstehenden Bild gezeigt.

   <ImagePopup src="/assets/1.0/images/data-transfer/importNow.png" alt="Jetzt importieren" />

**Schritt 4:** Klicken Sie nun auf **Datentransfer >> Job-Tracker**, wo Sie den Status Ihres Importprozesses sehen. Sobald der Status abgeschlossen ist, wurde der Importprozess erfolgreich durchgeführt.

Sie können auch den folgenden Befehl im Stammverzeichnis Ihres UnoPim ausführen.

**php artisan queue:listen**


   <ImagePopup src="/assets/1.0/images/data-transfer/importOutput.png" alt="Import-Ausgabe" />

Mit den obigen Schritten können Sie ganz einfach Importdaten in UnoPim erstellen.
