<template>
  <div class="hello">
      <div v-show="!listenButtonOn" class="button--microphone">
        <font-awesome-icon icon="microphone" @click="onListenClick"/>
      </div>
      <div v-show="listenButtonOn" class="button--microphone-active">
        <font-awesome-icon icon="microphone" @click="onListenClick"/>
      </div>
      <p>
        Listen Result: {{listenResultText}}
      </p>
      <p>
        Press the microphone button to start the speech recognition.
      </p>
      <a href="https://www.lingualogic.de" target="_blank"> Learn more about the Speech-Framework.</a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ServiceManager, ListenService, SPEECH_LISTEN_SERVICE } from 'speech-vue';

@Component
export default class HelloWorld extends Vue {

  listenService: ListenService; //<==
  listenStartEvent: any;        //<== Add Events
  listenStopEvent: any;         //
  listenResultEvent: any;       //
  listenResultText:string = '';     //<== View Variable
  listenButtonOn:boolean = false;  //

  constructor() {
    super();
    this.listenService = ServiceManager.get( SPEECH_LISTEN_SERVICE ); //<== Get ListenService
    this.listenStartEvent = null;
    this.listenStopEvent = null;
    this.listenResultEvent = null;
  }

  created() {
    if ( this.listenService ) {
      this.listenResultEvent = this.listenService.resultEvent.subscribe((aResult: any) => {
        this.listenResultText = aResult; //<== Set View Variable
      });
      this.listenStartEvent = this.listenService.startEvent.subscribe(() => {
        this.listenButtonOn = true;      //<== 
      });
      this.listenStopEvent = this.listenService.stopEvent.subscribe(() => {
        this.listenButtonOn = false;     //<== 
      });
    }
  }

  destroyed() {
    if ( this.listenResultEvent ) {
      this.listenResultEvent.unsubscribe(); //<== Do Not Forget!
      this.listenResultEvent.unsubscribe(); //
      this.listenResultEvent.unsubscribe(); //
    }
  }

  onListenClick() {
    if ( this.listenService ) {
      this.listenService.start(); //<== Start Speech Recognition
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
  &--microphone {
    color: #2c3e50;
    font-size: 20vh;
    background-color: transparent;
  }

  &--microphone-active {
    background-color: transparent;
    color: #42b983;
    font-size: 20vh;
    &:active, &:focus {
      color: #42b983;
      outline: none;
    }
  }
}
</style>
