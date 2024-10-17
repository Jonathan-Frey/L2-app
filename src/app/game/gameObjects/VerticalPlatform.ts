import {
  RectangleCollisionShape,
  StaticCollisionBody,
  Vector2D,
} from 'jf-canvas-game-engine';

export class VerticalPlatform extends StaticCollisionBody {
  #width: number;
  #height;
  #color: string | CanvasGradient | CanvasPattern;
  constructor(
    position: Vector2D,
    height: number,
    color: string | CanvasGradient | CanvasPattern
  ) {
    const width = 25;
    super(
      position,
      new RectangleCollisionShape(
        new Vector2D(-width / 2, -height / 2),
        width,
        height
      )
    );
    this.#height = height;
    this.#width = width;
    this.#height = height;
    this.#color = color;
  }

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.#color;
    ctx.fillRect(
      this.position.x - this.#width / 2,
      this.position.y - this.#height / 2,
      this.#width,
      this.#height
    );
  }
}
