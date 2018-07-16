import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { initialize, LDClient, LDFlagSet } from 'ldclient-js';

@Injectable()
export class LaunchDarklyService {
  ldClient:LDClient;
  flags:LDFlagSet;
  flagChange:Subject<Object> = new Subject<Object>();
  constructor() {
    this.flags = {'toh-modify': false, 'toh-search': false};

    this.ldClient = initialize("YOUR-CLIENT-SIDE-ID",
      { key: "SAMPLE-USER-KEY", anonymous: true });

    this.ldClient.on('change', (flags) => {
      if(flags['toh-modify'] !== undefined) {
        this.flags['toh-modify'] = flags['toh-modify'];
      }
      if(flags['toh-search'] !== undefined) {
        this.flags['toh-search'] = flags['toh-search'];
      }
      this.flagChange.next(this.flags);
      console.log("Flags updated.")
   });

   this.ldClient.on('ready', () => {
     this.setFlags();
   })
  }

  setFlags() {
    this.flags = this.ldClient.allFlags();
    console.log("Flags initialized.");
  }

  changeUser(user) {
    if(user !== "Anonymous") {
      this.ldClient.identify({key: user, name: user, anonymous: false});
    }
    else {
      this.ldClient.identify({key: 'anon', anonymous: true});
    }
  }
 }
