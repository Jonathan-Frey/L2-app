import {
  Camera,
  GameContext,
  GameObject,
  Vector2D,
} from 'jf-canvas-game-engine';

export class EndScene extends GameObject {
  #camera: Camera;
  constructor() {
    super(new Vector2D(0, 0));
    this.#camera = new Camera(new Vector2D(0, 0));
    this.addChild(this.#camera);
    GameContext.getInstance().setActiveCamera(this.#camera);
  }

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.fillText('You have reached the end!', 100, 100);
  }
}
