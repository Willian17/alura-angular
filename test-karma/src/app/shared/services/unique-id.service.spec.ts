import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} 
  should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} 
  should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set()
    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedIds.name} 
  should not generate duplicate IDs when called multiple times`, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedIds.name} 
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generatedUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`)
      .toThrow();
    })
  });
});
