import {
  Area,
  GameObject,
  RectangleCollisionShape,
  Vector2D,
} from 'jf-canvas-game-engine';
import { Player } from './Player';

export class FinishLine extends GameObject {
  #area: Area;
  constructor(position: Vector2D, width: number, height: number) {
    super(position);
    this.#area = new Area(
      new Vector2D(0, 0),
      new RectangleCollisionShape(
        new Vector2D(-width / 2, -height / 2),
        width,
        height
      )
    );
    this.addChild(this.#area);
  }

  override process(delta: number): void {
    const collidingBodies = this.#area.getCollidingBodies();
    for (const body of collidingBodies) {
      if (body instanceof Player) {
        body.hasWon = true;
        return;
      }
    }
  }
}
