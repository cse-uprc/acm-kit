import { ToastrService } from 'ngx-toastr';
/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
export declare class ToastService {
    private readonly toastr;
    constructor(toastr: ToastrService);
    createSuccess(message: string, title?: string, timeout?: number): void;
    createError(message: string, title?: string, timeout?: number): void;
    createWarning(message: string, title?: string, timeout?: number): void;
}
