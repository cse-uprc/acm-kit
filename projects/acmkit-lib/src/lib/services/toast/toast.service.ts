import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
@Injectable()
export class ToastService {
  constructor(private readonly toastr: ToastrService) {}

  createSuccess(message: string, title?: string, timeout?: number) {
    if (timeout) {
      this.toastr.success(message, title, {
        timeOut: timeout,
      });
    } else {
      this.toastr.success(message, title);
    }
  }

  createError(message: string, title?: string, timeout?: number) {
    if (timeout) {
      this.toastr.error(message, title, {
        timeOut: timeout,
      });
    } else {
      this.toastr.error(message, title);
    }
  }

  createWarning(message: string, title?: string, timeout?: number) {
    if (timeout) {
      this.toastr.warning(message, title, {
        timeOut: timeout,
      });
    } else {
      this.toastr.warning(message, title);
    }
  }
}
