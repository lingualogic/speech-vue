<template>
  <div class="hello">
    <div v-show="!speakButtonOn" class="button--speaker">
      <font-awesome-icon icon="volume-off" @click="onSpeakClick()"/>
    </div>
    <div v-show="speakButtonOn" class="button--speaker-active">
      <font-awesome-icon icon="volume-up" @click="onSpeakClick()"/>
    </div>
    <br>
    <input v-model="text">
    <br>
    <p>
      Press the speaker button to start the TTS.
    </p>
    <a href="https://www.lingualogic.de" target="_blank"> Learn more about the Speech-Framework.</a>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ServiceManager, SpeakService, SPEECH_SPEAK_SERVICE } from 'speech-vue';

@Component
export default class Speaker extends Vue {

  speakService: SpeakService;

  speakStartEvent: any;
  speakStopEvent: any;

  speakButtonOn:boolean = false;

  text: string = 'Hello World!';

  constructor() {
    super();
    this.speakService = ServiceManager.get( SPEECH_SPEAK_SERVICE );
    this.speakStartEvent = null;
    this.speakStopEvent = null;
  }

  created() {
    if ( this.speakService ) {
      this.speakStartEvent = this.speakService.startEvent.subscribe(() => {
        this.speakButtonOn = true;
      });
      this.speakStopEvent = this.speakService.stopEvent.subscribe(() => {
        this.speakButtonOn = false;
      });
    }
  }

  destroyed() {
    if ( this.speakService ) {
      this.speakStartEvent.unsubscribe(); 
      this.speakStopEvent.unsubscribe();
    }
  }

  onSpeakClick( ) {
    if ( this.speakService ) {
      this.speakService.text = this.text;
      this.speakService.language = 'en';
      this.speakService.start();
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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

.button {
    &:active, &:focus {
     color: #2c3e50;
     outline: none;
    }
    &--speaker {
      color: #2c3e50;
      font-size: 20vh;
      background-color: transparent;
    }
  
    &--speaker-active {
      background-color: transparent;
      color: #42b983;
      font-size: 20vh;
      &:active, &:focus {
       color: #42b983;
       outline: none;
      }
    }
  }

input {
  padding: 4px 5px;
  font-size: 20px;
  color:  #2c3e50;
  border-color: #2c3e50;
}

</style>
