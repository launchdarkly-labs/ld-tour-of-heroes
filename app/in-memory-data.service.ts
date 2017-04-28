export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Lark Daunchly' },
      { id: 12, name: 'Jaina Proudmore' },
      { id: 13, name: 'Flip Fonskoy' },
      { id: 14, name: 'Father Gascoigne' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }
}
