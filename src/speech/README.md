# Speech-Vue Quellcode

**Version:** **0.5.20**

Der Quellcode von Speech-Vue ist vollständig im Verzeichnis src/speech untergebracht, und baut auf dem Speech-Framework auf. Es sollten keine direkten Zugriffe auf das Speech-Framework genutzt werden, da sich das Speech-Framework API noch stark ändern kann. Alle Zugriffe sollten nur über die Services des Speech-Vue SDK im eigenen Code erfolgen.

Das Speech-Vue SDK besteht aus folgenden Services:

* **BaseService**: ist die Basisklasse für alle anderen Speech-Services

* **SpeakService**: dient zur Sprachausgabe mittels Sprachsyntese (Text to Speech)

* **ListenService**: dient zur Spracheingabe mittels Spracherkennung (Speech to Text)

* **IntentService**: dient zur Bedeutungsermittlung mittels Sprachanalyse (Natural Language Understandig)

* **ActionService**: dient zur Weitergabe von Aktionen aus dem Bot

* **DialogService**: dient zum Abspielen von Dialogen

* **BotService**: dient zum Abspielen von Dialogen für die Sprachausgabe und Aktionen

* **AmazonService**: dient zum eintragen von Amazon-Credentials

* **GoogleService**: dient zum eintragen von Google-Credentials

* **MicrosoftService**: dient zum eintragen von Microsoft-Credentials

* **RasaService**: dient zum eintragen von Rasa-Credentials


Jeder Service hat sein eigenes Verzeichnis, in dem der Code des Service untergebracht ist.


Zusätzlich gibt des noch Module, die für die Initialsierung von optionalen Subsystemen verantwortlich sind:

* **AmazonModule**: dient zur Initialisierung des Amazon Cloud-Service

* **GoogleModule**: dient zur Initialisierung des Google Cloud-Service

* **MicrosoftModule**: dient zur Initialisierung des Microsoft Cloud-Service

* **RasaModule**: dient zur Initialisierung des Rasa Cloud-Service (benötigt eigenen Rasa-Server)
