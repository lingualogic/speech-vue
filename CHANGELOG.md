# Speech-Vue Release Notizen


## 0.5.23.0011 Release (10.07.2021)

### Fix

Aktualisierung aller NPM-Packages.


## 0.5.22.0010 Release (31.08.2020)

### Fix

Fehlerbeseitigung in Google Cloud-Dienst, Speak, Listen und Intent.


## 0.5.21.0009 Release (26.06.2020)

### Features

* **Listen:** Ausbau von Listen, um den NoMatch-Event zu senden.
* **Google:** In Google Dialogflow wurden Session-Id und EventName eingebaut, um
              die Versionierung des Sprachmodells und parallele Sessions verschiedener
              Nutzer zuzulassen.


## 0.5.20.0008 Release (17.05.2020)

### Features

* **Google:** In Google kann zwischen verschiedenen Servern über setConfig umgeschaltet werden.

### Fix

* **Gulp:** Umstellung auf Gulp4, um kompatibel zu Node12 zu sein.


## 0.5.19.0007 Release (11.04.2020)

### Features

* **Listen:** Einbau eines Dicate-Mode in die HTML5-ASR für das Diktieren von Texten (nur Chrome-Browser).
              Einbau von Mkrofon-Events in Listen zur Anzeige, wann das Mikrofon an und aus geht.


## 0.5.18.0006 Release (28.03.2020)

### Features

* **Google:** Vollständige Einbindung von Dialogflow V2 in den CloudPort von Google, einschließlich Spracheingabe und Sprachausgabe.

### Fix

* **Google:** Fehlerkorrektur in der Google-Komponente, um den Stop-Event in ASR und TTS zu erzeugen.


## 0.5.17.0005 Release (16.02.2020)

### Features

* **Google:** Erweiterung der Google-Komponente um ASR mit Verbindung zum Google Token-Server.


## 0.5.16.0004 Beta (17.12.2019)

### Features

* **Google:** Erweiterung der Google-Komponente um TTS mit Verbindung zum Google Token-Server.


## 0.5.15.0003 Beta (19.10.2019)

### Features

* **Dialog:** Erweiterung der Dialog-Komponente um das Einlesen von JSON-Daten anstelle einer Def-Datei.
* **Google:** Erweiterung der Google-Komponente um Dialogflow Version 2.


## 0.5.14.0002 Beta (31.08.2019)

### Features

* **Microsoft:** der Microsoft Cloud-Dienst (LUIS) für die NLU wurde eingebaut, um Microsofts NLU für die Sprachanalyse verwenden zu können


## 0.5.13.0001 Alpha (10.08.2019)

### Features

Erstveröffentlichung der Speech-Vue Version.
