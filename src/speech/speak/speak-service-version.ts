/**
 * SpeakService Version und Build Konstanten
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * @module speech/speak
 * @author SB
 */


// global

import {
    SPEECHSERVICE_VERSION_NUMBER,
    SPEECHSERVICE_VERSION_BUILD,
    SPEECHSERVICE_VERSION_TYPE,
    SPEECHSERVICE_VERSION_DATE
} from './../const/speech-service-version';


// Versions-Konstanten

export const SPEAKSERVICE_VERSION_NUMBER = SPEECHSERVICE_VERSION_NUMBER;
export const SPEAKSERVICE_VERSION_BUILD = SPEECHSERVICE_VERSION_BUILD;
export const SPEAKSERVICE_VERSION_TYPE = SPEECHSERVICE_VERSION_TYPE;
export const SPEAKSERVICE_VERSION_DATE = SPEECHSERVICE_VERSION_DATE;

// tslint:disable-next-line
export const SPEAKSERVICE_VERSION_STRING = SPEAKSERVICE_VERSION_NUMBER + '.' + SPEAKSERVICE_VERSION_BUILD + ' vom ' + SPEAKSERVICE_VERSION_DATE + ' (' + SPEAKSERVICE_VERSION_TYPE + ')';
export const SPEAKSERVICE_API_VERSION = SPEAKSERVICE_VERSION_STRING;
