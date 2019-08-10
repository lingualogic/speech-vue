# GoogleModule Cloud-Dienst (Dialogflow Version 1)

Die GoogleModule Cloud-Dienstanbindung von Speech-Vue erlaubt die Nutzung der Google-NLU (Dialogflow) im IntentService.

Infos zu Googles Dialogflow unter [dialogflow.com](https://dialogflow.com/).


## Voraussetzungen

Um die GoogleModule Cloud-Dienstanbindung nutzen zu können, muss ein Dialogflow Account eingerichtet sein und die Dialogflow-Credentials ermittelt werden. Dann legt man die Datei google-credentials.ts im Unterverzeichnis credentials des eigenen Projektes an und trägt folgende Konstante ein:

* **GOOGLE_APP_KEY** - Googles Dialogflow Access Token der Version 1 des Dialogflow-APIs !


Die Datei credentials/google-credentials.ts sollte folgendes beinhalten:

	/**
	 * Google Credentials
	 */
	
	export const GOOGLE_APP_KEY = ''; 			// <--- Hier das eigene Dialogflow Access Token eintragen
	

Diese Datei darf nicht in das Git-Repository übernommen werden. Dazu wird in der .gitignore Datei des Projektes der Name der Datei eingetragen.

eigenes Projektverzeichnis/.gitignore:
 
	# Konfigdateien

	credentials/
	google-credentials*


## Integration des GoogleModule von Speech-Vue

Um den Google Cloud-Dienst in der eigenen Vue-Anwendung verwenden zu können, muss das GoogleModule von Speech-Vue in die src/Apps.tsx Datei der Vue-Anwendung, wie nachfolgend im Beispielcode gezeigt, eingebaut werden.

eigenes Projektverzeichnis/src/main.ts:


	import Vue from 'vue';

	// Speech-Vue

	import { GoogleModule, ServiceManager } from 'speech-vue';


	import App from './App.vue';

	
	// Google-Credentials
	
	// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
	import { GOOGLE_APP_KEY } from './../credentials/google-credentials';
	const googleOption = {
	  googleAppKey: GOOGLE_APP_KEY
	};
	
	
	// Initialiserung von Google-Modul

	GoogleModule.init( googleOption, (aGoogleFlag: boolean) => {
		console.log('Google: ', aGoogleFlag );        

		// Initialisierung aller Speech-Services

		ServiceManager.init();
	});


	Vue.config.productionTip = false

	new Vue({
		render: h => h(App),
	}).$mount('#app')


Das GoogleModule initialisiert den Google Cloud-Service. Die Initialisierung der Speech-Services darf erst danach erfolgen, daher wird sie in der an GoogleModule.init() übergebenen Callback-Funktion erst ausgeführt, um die Speech-Services korrekt mit dem eingerichteten Google Cloud-Dienst zu starten.


## Dynamische Google-Credentials

Will man die Google-Credetials nicht bei der Initialisierung übergeben, sondern erst später durch ein Formular, so kann dies mit dem optionalen Paramter:

	const googleOption = {
		googleDynamicCredentialsFlag: true
	};

in den Optionen eingetragen werden. Dann sind die Angaben der anderen Credentials-Parameter nicht mehr notwendig.
Die Google-Credentials können dann zu jedem späteren Zeitpunkt mit dem GoogleService in der Vue-App geändert werden.
