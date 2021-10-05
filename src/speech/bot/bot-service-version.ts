/** @packageDocumentation
 * BotService Version und Build Konstanten
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * @module speech/bot
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

export const BOTSERVICE_VERSION_NUMBER = SPEECHSERVICE_VERSION_NUMBER;
export const BOTSERVICE_VERSION_BUILD = SPEECHSERVICE_VERSION_BUILD;
export const BOTSERVICE_VERSION_TYPE = SPEECHSERVICE_VERSION_TYPE;
export const BOTSERVICE_VERSION_DATE = SPEECHSERVICE_VERSION_DATE;

// tslint:disable-next-line
export const BOTSERVICE_VERSION_STRING = BOTSERVICE_VERSION_NUMBER + '.' + BOTSERVICE_VERSION_BUILD + ' vom ' + BOTSERVICE_VERSION_DATE + ' (' + BOTSERVICE_VERSION_TYPE + ')';
export const BOTSERVICE_API_VERSION = BOTSERVICE_VERSION_STRING;
