import { GameObject, Vector2D } from 'jf-canvas-game-engine';

export class EndMessage extends GameObject {
  #lines: string[];
  #fontSize = 24;
  #spacing = 1000;
  #font = 'Arial';
  #fillStyle: string | CanvasGradient | CanvasPattern = 'white';
  #textAlign: CanvasTextAlign = 'center';

  constructor(position: Vector2D, lines: string[]) {
    super(position);
    this.#lines = lines;
  }

  override render(ctx: CanvasRenderingContext2D) {
    ctx.font = `${this.#fontSize}px ${this.#font}`;
    ctx.fillStyle = this.#fillStyle;
    ctx.textAlign = this.#textAlign;
    for (let i = 0; i < this.#lines.length; i++) {
      ctx.fillText(
        this.#lines[i],
        this.position.x,
        this.position.y - i * this.#spacing
      );
    }
  }
}
