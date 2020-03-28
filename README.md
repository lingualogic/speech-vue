# Speech-Vue

Speech-Vue ist eine Vue Typescript-Bibliothek zur Integration von Sprachdiensten, wie Sprachausgabe (TTS), Spracherkennung (ASR), Sprachverstehen (NLU), Dialogverarbeitung (NLP) und Aktionsausführung in einer Vue Web-Seite oder Web-App. Kern von Speech-Vue ist ein **BotService**, der Dialoge eines Dialogskripts ausführen kann.

Daneben git es folgende einzeln verwendbare Dienste:

* **SpeakService** für die Sprachausgabe
* **ListenService** für die Spracherennung
* **IntentService** für das Sprachverstehen
* **ActionService** für die Aktionserzeugung
* **DialogService** für die Dialogausführung


In Speech-Vue können für die Sprachausgabe (TTS) und das Sprachverstehen (NLU) auch Clouddienste verwendet werden. Dazu wird ein eigener Account des jeweiligen Cloud-Dienstes benötigt.


## Speech-Framework

Die Speech-Vue Bibliothek benötigt das Speech-Framework, welches unter [https://github.com/lingualogic/speech-framework](https://github.com/lingualogic/speech-framework) in Github zu finden ist.

Um in eigenen Projekten Speech-Vue nutzen zu können, muss das Speech-Framework NPM-Package von der [LinguaLogic-Seite](https://lingualogic.de) heruntergeladen werden, in den eigenen Projektordner kopiert werden und vor Speech-Vue installiert sein. Das Speech-Framework NPM-Package wird mit folgendem Befehl installiert:

    $ npm install speech-framework-0.5.18.tgz


## Letzte Version

* 0.5.18.0006 Release vom 28.03.2020 [Release Notizen](./CHANGELOG.md)

Wir empfehlen für neue Vue-Projekte die Verwendung von Typescript, ansonsten kann Speech-Vue auch mit JavaScript verwendet werden.


## Voraussetzungen

Wir haben Speech-Vue auf Mac OS X 10.11, Mac OS X 10.14, Win 10 und Ubuntu 18.04 getestet. Als Plattformen können eingesetzt werden:

* Mac OS X >= 10.9
* Windows >= 7
* aktuelles Linux (z.B. Ubuntu 18.04)

Es wird die aktuellste Vue-Version empfohlen

* Vue >= 2.x


Grundsätzlich ist das Speech-Vue SDK in Chrome, Firefox, Opera, Safari und Edge nutzbar, allerdings hängt die Sprachausgabe unter diesen Browsern von der zugrunde liegenden Text-to-Speech Engine der jeweiligen Plattformen ab. Die Spracheingabe funktioniert bisher nur in Chrome.

* Chrome >= 71   Windows/Linux/MacOS (Html5: TTS, ASR)(Amazon: TTS, Google: NLU)
* Firefox >= 64  Windows/Linux/MacOS (Html5: TTS)(Amazon: TTS, Google: NLU)
* Opera >= 58    Windows/MacOS (Html5: TTS)(Amazon: TTS, Google: NLU) Linux (kein Html5)
* Safari >= 12   MacOS/iOS (Html5: TTS)(Amazon: TTS, Google: NLU)
* Edge >= 42     Windows (Html5: TTS)(Amazon: TTS, Google: NLU)


NodeJS muss installiert sein.

* NodeJS >= 10.X (LTS-Version)

Als weitere Plattformen können Android und iOS mit Cordova verwendet werden:

* Cordova >= 8 für Android  >= 5.1 und iOS >= 10

Für Cordova müssen weitere Programme zur Entwicklung von Android- und iOS-Apps installiert werden.
Informationen hierzu finden sich unter [docs/platform/Cordova.md](./docs/platform/Cordova.md).

Will man den Clouddienst verwenden, muss ein eigener Account eingerichtet werden und die Cloud-Komponente des Speech-Frameworks separat in die eigene App eingebunden werden. Wie man dies macht, findet man unter [docs/cloud/Cloud.md](./docs/cloud/Cloud.md)


## Installation

Die Installation kann vom globalen NPM-Repository aus erfolgen, oder als lokale Installation erzeugt man sich sein NPM-Package selbst.

### NPM-Package

Zur Installation von Speech-Vue ins eigene Projekt, im Projektverzeichnis folgenden Befehl eingeben:

    $ npm install speech-vue


### lokales Package

Zuerst muss das Speech-Vue Github-Repsitory unter [https://github.com/lingualogic/speech-vue](https://github.com/lingualogic/speech-vue) mit folgendem Befehl geklont werden:

    $ git clone https://github.com/lingualogic/speech-vue
    $ cd speech-vue

danach werden alle NPM-Pakete für Speech-Vue mit folgendem Befehl installiert:

    $ npm install

anschließend kann man optional die Unit-Tests von Speech-Vue starten:

    $ npm test

zum Schluß wird das NPM-Paket für Speech-Vue im dist/ Ordner erzeugt:

    $ npm run build

Die API-Dokumentation kann mit folgenden Befehl in docs/api erzeugt werden:

    $ npm run docs

Das im dist/ Ordner erzeugte npm-Paket 'speech-vue-0.5.18.tgz' kann in den eigenen Vue Projektordner kopiert werden.

Die Installation des speech-vue npm-Paketes erfolgt im eigenen Vue Projektordner mit folgendem Befehl:

    $ npm install speech-vue-0.5.18.tgz

Danach kann Speech-Vue im eigenen Vue-Projekt verwendet werden.

Alternativ kann das fertige Speech-Vue npm-Paket auch von der [LinguaLogic-Webseite](https://lingualogic.de) heruntergeladen werden.


## Deinstallation

Speech-Vue kann mit folgendem Befehl wieder deinstalliert werden:

    $ npm uninstall speech-vue


## gebrochener Code gegenüber der Vorversion

* wird das Google-Module eingebunden, muss jetzt auch der Parameter googleServerUrl bei den googleCredentials eingetragen und der Konfiguration mitübergeben werden.


## Bekannte Probleme

* Unter Chrome in iOS funktioniert die Spracheingabe nicht


## Dokumentation

[**Schnelleinstieg**](./docs/quickstart/README.md)

[**Architektur**](./docs/design/Design.md)

[**Services**](./docs/service/Service.md)

[**Cloud-Dienste**](./docs/cloud/Cloud.md)

[**Plattformen**](./docs/platform/README.md)

[**API-Referenz**](https://lingualogic.de/speech-vue/docs/latest/api)

[**Roadmap**](./docs/roadmap/README.md)

[**Release Notizen**](./CHANGELOG.md)


## Beispiel-Apps

Im examples Ordner sind mehrere kleine Beispiele für die einzelnen Services von Speech-Vue zu finden.
Zum Ausführen der Beispiele darf nicht in den Beispielordner gewechselt werden. Von dort aus funktioniert
der Start der jeweiligen Beispiel-App nicht, da globale NPM-Packages aus dem Projektverzeichnis benötigt werden.

Folgender Befehl ist im Hauptprojektverzeichnis für das SpeakService-Beispiel einzugeben:

    $ npm run speak

Für das ListenService-Beispiel ist folgender Befehl einzugeben:

    $ npm run listen


## Projektverantwortliche (LinguaLogic Team)

Projektorganisation: **Leo Füchsel** (leo@lingualogic.de)

Technische Entwicklung: **Stefan Brauer** (stefan@lingualogic.de)


## Mitwirkende


## In Projekten verwendet


-------------------

## Lizenz

Speech-Vue wurde als Open Source unter der [MIT-Lizenz](./docs/LICENSE.md) veröffentlicht.
