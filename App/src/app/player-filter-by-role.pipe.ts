import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFilterByRole'
})
export class PlayerFilterByRolePipe implements PipeTransform {
  transform(collection: any[], role: string): any {

    if(!role) return collection;
    return collection.filter(i => i.PlayerRoleName === role);
  }
}
