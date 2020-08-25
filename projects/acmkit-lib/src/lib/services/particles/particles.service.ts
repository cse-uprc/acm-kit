import { Injectable } from '@angular/core';
declare var particlesJS: any;

/**
 * Class to help manage a particle config.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  constructor() {}

  /**
   * Initializes the particlesJS based on the passed in config file
   *
   * @param configFile - The particle config file we want to initialize
   */
  init(configFile: any) {
    particlesJS('particles-js', configFile, () => {});
  }
}
