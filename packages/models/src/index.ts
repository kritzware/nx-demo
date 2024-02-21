export class Statement {
  someSharedLogicMethod() {
    return this.getTotal() + 50;
  }

  getTotal() {
    return 100;
  }

  process() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }
}
