export class Professor {
  name: string;
  lastName: string;

  constructor () {
    this.name = '';
    this.lastName = '';
  }

  valid() : boolean {
    this.name = this.name.trim();
    this.lastName = this.lastName.trim();
    return (this.name != '' && this.lastName != '');
  }
}