import { Injectable } from '@angular/core';
declare var particlesJS: any;

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  constructor() {}

  init(configFile: any) {
    particlesJS('particles-js', configFile, function () {});
  }
}
