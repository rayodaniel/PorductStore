import { Observable, Subscription } from 'rxjs';

let apiSubscription: Subscription | null = null;

/**
 * Controla la ejecución de una petición API basada en un booleano
 * @param apiCall Observable de la llamada API
 * @param shouldExecute Booleano que determina si se ejecuta
 */
export function ActivedManageState(apiCall: Promise<any>, shouldExecute: boolean) {
    console.log('ActivedManageState', shouldExecute);
    
  if (shouldExecute) {
    console.log('Execute API Call');
    
    apiCall;
  }
}