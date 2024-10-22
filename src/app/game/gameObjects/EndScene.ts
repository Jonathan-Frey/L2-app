import {
  Camera,
  GameContext,
  GameObject,
  Vector2D,
} from 'jf-canvas-game-engine';

export class EndScene extends GameObject {
  #fontSize = 24;
  #font = 'Arial';
  #textFillStyle: string | CanvasGradient | CanvasPattern = 'black';
  #textAlign: CanvasTextAlign = 'center';
  #camera!: Camera;
  constructor() {
    super(new Vector2D(0, 0));
    this.#setUpCamera();
  }

  #setUpCamera(): void {
    const canvasSize =
      GameContext.getInstance().getCanvasSize() || new Vector2D(0, 0);
    this.#camera = new Camera(
      new Vector2D(canvasSize.x / 2, -canvasSize.y / 2)
    );
    this.addChild(this.#camera);
    GameContext.getInstance().setActiveCamera(this.#camera);
  }

  #drawBackground(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, -ctx.canvas.height);
  }

  #drawMessage(ctx: CanvasRenderingContext2D): void {
    ctx.font = `${this.#fontSize}px ${this.#font}`;
    ctx.fillStyle = this.#textFillStyle;
    ctx.textAlign = this.#textAlign;
    ctx.fillText(
      'Thank you so much for playing!',
      ctx.canvas.width / 2,
      -ctx.canvas.height / 2
    );
  }

  override render(ctx: CanvasRenderingContext2D): void {
    this.#drawBackground(ctx);
    this.#drawMessage(ctx);
  }
}
