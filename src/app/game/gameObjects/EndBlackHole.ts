import {
  Area,
  GameContext,
  GameObject,
  RectangleCollisionShape,
  Vector2D,
} from 'jf-canvas-game-engine';
import { Player } from './Player';
import { EndScene } from './EndScene';

export class EndBlackHole extends GameObject {
  #image: HTMLImageElement;
  #area: Area;
  constructor(position: Vector2D) {
    super(position);
    this.#image = document.createElement('img');
    this.#image.src = 'black-hole.png';
    this.#area = new Area(
      new Vector2D(0, 0),
      new RectangleCollisionShape(new Vector2D(-50, -50), 100, 25)
    );
    this.addChild(this.#area);
  }

  override process(delta: number): void {
    const collidingBodies = this.#area.getCollidingBodies();
    for (const body of collidingBodies) {
      if (body instanceof Player && !body.isBeingSucked) {
        console.log('Player is being sucked');
        body.isBeingSucked = true;
        setTimeout(() => {
          console.log('navigating to end scene');
          GameContext.getInstance().navigateToScene(new EndScene());
        }, 10000);
        return;
      }
    }
  }

  override render(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.#image,
      this.position.x - this.#image.naturalWidth / 2,
      this.position.y - this.#image.naturalHeight / 2
    );
  }
}
