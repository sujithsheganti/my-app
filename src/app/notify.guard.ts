import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(confirm("if you go back, your progress will not be saved. Are you willing to go back?ngserve")){
    return true;
  }

  else{
    return false;
  }
};
