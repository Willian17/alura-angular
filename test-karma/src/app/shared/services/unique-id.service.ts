import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if(!prefix || !this.validId.test(prefix)) {
      throw new Error('Prefix can not be empty');
    }
    const uniqueId = this.genereateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratedIds;
  }

  genereateUniqueId(): string {
    return uuidv4();
  }
}
