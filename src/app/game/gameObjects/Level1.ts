import { GameObject, Vector2D } from 'jf-canvas-game-engine';
import { Player } from './Player';
import { Platform } from './Platform';
import { DebugCamera } from './DebugCamera';
import { VerticalPlatform } from './VerticalPlatform';

export class Level1 extends GameObject {
  #player = new Player(new Vector2D(50, -1000));
  constructor() {
    super(new Vector2D(0, 0));
    // this.addChild(new DebugCamera(new Vector2D(0, 0)));
    this.addChild(this.#player);

    this.addChild(
      new VerticalPlatform(new Vector2D(12.5, -3012.5), 6000, 'red')
    );
    this.addChild(
      new VerticalPlatform(new Vector2D(1987.5, -3012.5), 6000, 'red')
    );

    this.addChild(new Platform(new Vector2D(1000, 0), 2000, 'red'));
    this.addChild(new Platform(new Vector2D(150, -100), 100, 'red'));
    this.addChild(new Platform(new Vector2D(300, -200), 100, 'red'));
    this.addChild(new Platform(new Vector2D(500, -300), 100, 'red'));
    this.addChild(new Platform(new Vector2D(750, -400), 100, 'red'));
    this.addChild(new Platform(new Vector2D(1050, -500), 100, 'red'));
    this.addChild(new Platform(new Vector2D(1400, -600), 100, 'red'));
    this.addChild(new Platform(new Vector2D(1500, -750), 100, 'red'));
    this.addChild(new Platform(new Vector2D(1800, -900), 387.5, 'red'));
  }

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 2000, -2000);
  }
}
