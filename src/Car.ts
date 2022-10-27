export class Car {
  private wheels = 4;
  private on = false;

  start(): void {
    this.on = true;
  }

  stop(): void {
    this.on = false;
  }

  state(): void {
    console.log(`Car with ${this.wheels} wheels. On: ${this.on.toString()}`);
  }
}
