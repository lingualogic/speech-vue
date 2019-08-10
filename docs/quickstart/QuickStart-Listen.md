# Speech-Vue Schnelleinstieg für Listen

In unseren Schnelleinstiegen wollen wir Vue Apps erstellen und sie um Sprachdienste erweitern. Den Code findet Ihr im /examples Ordner.

Das Beispiel könnt Ihr direkt im Speech-Vue Projektverzeichnis, ohne in den /examples Ordner wechseln zu müssen, ausführen:

	$ npm run listen

Im Folgenden erklären wir den Entwicklungsprozess Schritt für Schritt.


## Voraussetzungen

* NodeJS >= 10.X (LTS-Version)
* Vue >= 2.x

* speech-framework >= 0.5.13
* speech-vue >= 0.5.13


Weiter geht es in der App. Zur Programmierung können wir [VScode](https://code.visualstudio.com/) empfehlen.

## ListenService

Zunächst erstellen wir die Beispielapp mit dem Vue-Befehl:

    $ vue ui
    $ cd listen
    $ npm serve

Dann öffen wir Chrome und geben als URL http://localhost:8080 ein.

Mit dem neuen ListenService wollen wir [Spracherkennung](https://de.wikipedia.org/wiki/Spracherkennung) realisieren. Dazu istallieren wir die Speech-Packages:

    $ npm install speech-framework-0.5.13.tgz  
    $ npm install speech-vue-0.5.13.tgz


In src/main.ts fügen wir folgende Zeilen ein:


    import Vue from 'vue';

    import { ServiceManager } from 'speech-vue';   // <=== Import ServiceManager

    import App from './App.vue';

    ServiceManager.init();                        // <== ServiceManager initialisieren

    Vue.config.productionTip = false

    new Vue({
        render: h => h(App),
    }).$mount('#app')


In src/components/HalloWorld.vue fügen wir folgende Zeilen ein:


    <template>
        <div class="hello">
            <h1>{{ msg }}</h1>
            <p>
                Drücken Sie die Spracheingabe und sprechen Sie dann
            </p>
            <br>
            <!-- <== Eintragen des Buttons zum Start der Spracherkennung -->
            <button @click="onListenClick">Spracheingabe</button>
            <br>
            <!-- <== Eintragen der Anzeige des erkannten Textes der Spracherkennung -->
            <p>
                Gesprochener Text: {{ listenResultText }}
            </p>
        </div>
    </template>

    <script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { ServiceManager, ListenService, SPEECH_LISTEN_SERVICE } from 'speech-vue'; // <== Importe Speech

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg!: string;

        listenResultEvent: any;                                 // <== Event erstellen
        listenService: ListenService;                           // <== Service erstellen
        listenResultText = '';                                  // <== Ergebnistext der Spracherkennung

        constructor() {
            super();
            this.listenService = ServiceManager.get( SPEECH_LISTEN_SERVICE ); // <== ListenService eintragen
            this.listenResultEvent = null;                                    // <== ListenEvent initialisieren
        }


        // <== Einfuegen der create-Funktion mit dem erzeugen des ListenResultEvent 
        created() {
            if ( this.listenService ) {
                this.listenResultEvent = this.listenService.resultEvent.subscribe((aResult: any) => {
                    console.log('ListenResultEvent: ', aResult);
                    this.listenResultText = aResult;
                });
            }
        }


        // <== Einfuegen der destroyed-Funktion mit dem loeschen des ListenresultEvent
        destroyed() {
            if ( this.listenResultEvent ) {
                this.listenResultEvent.unsubscribe();
            }
        }


        // <== Einfuegen der Click-Funktion zum Start der Spracheingabe
        onListenClick() {
            if ( this.listenService ) {
                this.listenService.start();
            }
        }

    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
        h3 {
            margin: 40px 0 0;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            display: inline-block;
            margin: 0 10px;
        }
        a {
            color: #42b983;
        }
    </style>


Den Code zu diesem Teil findet ihr unter examples/listen.
