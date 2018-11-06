import { Injectable, HostListener } from '@angular/core';

import swal from 'sweetalert2';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable()
export class UiService {

  public showSidebar = true;

  public _loaderCounter = 0;
  get loaderState() {
    return this._loaderCounter !== 0;
  }

  public loader = {
    show: () => {
      // setTimeout(() => { this._loaderCounter++; }, 0);
      this._loaderCounter++;
      console.log('loader_show', this._loaderCounter);
    },
    hide: () => {
      // setTimeout(() => { this._loaderCounter--; }, 0);
      this._loaderCounter--;
      console.log('loader_hide', this._loaderCounter);
    },
    reset: () => {
      console.log('loader_reset');
      setTimeout(() => { this._loaderCounter = 0; }, 0);
    }
  }

  public alert = {
    error: (message) => {
      swal('Oops!', message, 'error');
    }
  }

  constructor() { }

  getLoaderState() {
    return this._loaderCounter;
  }

}
