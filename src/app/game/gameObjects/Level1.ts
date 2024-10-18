import { GameObject, Vector2D } from 'jf-canvas-game-engine';
import { Player } from './Player';
import { Platform } from './Platform';
import { DebugCamera } from './DebugCamera';

export class Level1 extends GameObject {
  #player = new Player(new Vector2D(200, -2225));
  constructor() {
    super(new Vector2D(0, 0));
    // this.addChild(new DebugCamera(new Vector2D(0, 0)));
    this.addChild(this.#player);

    this.addChild(new Platform(new Vector2D(-62.5, -3000), 25, 6025, 'red'));

    this.addChild(new Platform(new Vector2D(12.5, -3037.5), 25, 5950, 'red'));

    this.addChild(new Platform(new Vector2D(1987.5, -3012.5), 25, 6000, 'red'));

    this.addChild(new Platform(new Vector2D(-25, 0), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, 0), 2000, 25, 'red'));

    this.addChild(new Platform(new Vector2D(150, -100), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(300, -200), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(500, -300), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(750, -400), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1050, -500), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1400, -600), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1500, -750), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1800, -900), 350, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1400, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1200, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(800, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(600, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(200, -900), 350, 25, 'red'));
    this.addChild(new Platform(new Vector2D(187.5, -1100), 325, 25, 'red'));
    this.addChild(new Platform(new Vector2D(175, -1662.5), 300, 1000, 'red'));
    this.addChild(new Platform(new Vector2D(550, -1250), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -1425), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -1625), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -1825), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -2025), 50, 25, 'red'));
  }

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 2000, -2000);
  }
}
