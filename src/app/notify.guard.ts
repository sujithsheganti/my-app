import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(confirm("If you goback,your progress will not be saved! are you willing to go back?")){
    return true;
  }

  else{
    return false;
  }
};
