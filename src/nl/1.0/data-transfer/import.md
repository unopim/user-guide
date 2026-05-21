# Importeren

Bulk importeren is een functie waarmee gebruikers grote hoeveelheden gegevens snel en efficiënt in een systeem kunnen importeren. Het vereenvoudigt het proces en bespaart tijd door niet elk stukje informatie één voor één toe te hoeven voegen.

De functie werkt anders voor elk systeem en heeft een breed scala aan use cases in vele industrieën, waaronder [UnoPim](https://unopim.com/).

### Stappen om Bulk Importeren toe te voegen in UnoPim

**Stap 1:** Ga naar het Admin-paneel van UnoPim en klik op **Gegevensoverdracht >> Importeren >> Import aanmaken**.

   <ImagePopup src="/assets/1.0/images/data-transfer/createImport.png" alt="Import aanmaken" />

**Stap 2:** Voeg onder algemene configuraties de onderstaande velden toe:

1) **Code -** Voer de code van uw Import-proces in.

2) **Type -** Selecteer het type, dus (Products, Categories) dat u wilt importeren.

3) **File –** Kies het bestand in de gewenste indeling **(CSV, XLS, XLSX)** en zorg ervoor dat u alle vereiste velden in het bestand heeft.

4) **Download Sample –** U kunt ook voorbeeldbestanden van typen (Products, Categories) downloaden. Zorg ervoor dat het bestand dat u uploadt vergelijkbaar is met dit voorbeeldbestand.

5) **Image Directory Path –** Voor productafbeeldingsbestanden moeten ze worden geplaatst in de map **/project-root/storage/app/import/product-images**.

6) **Action –** Selecteer in de settings-configuratie of u de records wilt Create/Update of Delete.

7) **Validation Strategy –** Deze unieke functie laat u Skip the Errors of Stop on Errors kiezen tijdens het importeren van de gegevens.

8) **Allowed Errors –** Met deze functie kunt u aangeven hoeveel fouten worden genegeerd tijdens het importeren van de gegevens.

9) **Field Separator –** Met deze functie kunt u de velden instellen. Bijvoorbeeld, als u **","** als veld-separator gebruikt, worden de gegevens in het bestand hiermee gescheiden.

Klik nu op de knop **Import opslaan**.  

   <ImagePopup src="/assets/1.0/images/data-transfer/saveImport.png" alt="Import opslaan" />

**Stap 3:** Klik nu op de knop **Nu importeren** zoals weergegeven in de onderstaande afbeelding.

   <ImagePopup src="/assets/1.0/images/data-transfer/importNow.png" alt="Nu importeren" />

**Stap 4:** Klik nu op **Gegevensoverdracht >> Taakvolger** waar u de status van uw importproces ziet. Nadat de status completed toont, is het importproces succesvol voltooid.

U kunt ook het onderstaande commando uitvoeren in de root van uw UnoPim.

**php artisan queue:listen**


   <ImagePopup src="/assets/1.0/images/data-transfer/importOutput.png" alt="Import-uitvoer" />

Door de bovenstaande stappen kunt u eenvoudig Gegevens importeren aanmaken in UnoPim.
