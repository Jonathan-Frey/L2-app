import { GameObject, Vector2D } from 'jf-canvas-game-engine';
import { Player } from './Player';
import { Platform } from './Platform';
import { DebugCamera } from './DebugCamera';
import { DisappearingPlatform } from './DisappearingPlatform';

export class Level1 extends GameObject {
  #player = new Player(new Vector2D(1800, -5050));
  constructor() {
    super(new Vector2D(0, 0));
    // this.addChild(new DebugCamera(new Vector2D(0, 0)));
    this.addChild(this.#player);

    // outer walls
    this.addChild(new Platform(new Vector2D(-62.5, -3000), 25, 6025, 'red'));
    this.addChild(new Platform(new Vector2D(12.5, -3037.5), 25, 5950, 'red'));
    this.addChild(new Platform(new Vector2D(1987.5, -3012.5), 25, 6000, 'red'));

    // bottom floor
    this.addChild(new Platform(new Vector2D(-25, 0), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, 0), 2000, 25, 'red'));

    // first stairs
    this.addChild(new Platform(new Vector2D(150, -100), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(300, -200), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(500, -300), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(750, -400), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1050, -500), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1400, -600), 100, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1500, -750), 100, 25, 'red'));

    // right resting place
    this.addChild(new Platform(new Vector2D(1800, -900), 350, 25, 'red'));

    // small jumps
    this.addChild(new Platform(new Vector2D(1400, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1200, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(800, -900), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(600, -900), 50, 25, 'red'));

    // left resting place
    this.addChild(new Platform(new Vector2D(200, -900), 350, 25, 'red'));

    // runway
    this.addChild(new Platform(new Vector2D(187.5, -1100), 325, 25, 'red'));

    // runway target platform
    this.addChild(new Platform(new Vector2D(550, -1250), 50, 25, 'red'));

    // left large box with small protrusions
    this.addChild(new Platform(new Vector2D(175, -1662.5), 300, 1000, 'red'));
    this.addChild(new Platform(new Vector2D(350, -1425), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -1625), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -1825), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(350, -2025), 50, 25, 'red'));

    // left path: right right left platforms
    this.addChild(new Platform(new Vector2D(600, -2150), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(800, -2350), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(600, -2550), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(800, -2750), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, -2950), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(800, -3150), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, -3350), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1200, -3550), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1000, -3750), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1200, -3950), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1400, -4150), 50, 25, 'red'));
    this.addChild(new Platform(new Vector2D(1600, -4350), 50, 25, 'red'));

    // right path
    this.addChild(new Platform(new Vector2D(1050, -2325), 150, 75, 'red'));
    this.addChild(
      new Platform(new Vector2D(1231.25, -2337.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1281.25, -2537.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1331.25, -2737.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1381.25, -2937.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1431.25, -3137.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1481.25, -3337.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1531.25, -3537.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1581.25, -3737.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1631.25, -3937.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1681.25, -4137.5), 12.5, 50, 'red')
    );
    this.addChild(
      new Platform(new Vector2D(1731.25, -4337.5), 12.5, 50, 'red')
    );

    // right resting place
    this.addChild(new Platform(new Vector2D(1887.5, -4500), 175, 50, 'red'));

    // right square stairs
    this.addChild(new Platform(new Vector2D(1950, -4600), 50, 50, 'red'));
    this.addChild(new Platform(new Vector2D(1850, -4700), 50, 50, 'red'));
    this.addChild(new Platform(new Vector2D(1950, -4800), 50, 50, 'red'));
    this.addChild(new Platform(new Vector2D(1850, -4900), 50, 50, 'red'));

    // bridge with disappearing platforms
    this.addChild(
      new DisappearingPlatform(new Vector2D(1750, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1650, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1550, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1450, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1350, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1250, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1150, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1050, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(950, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(850, -4912.5), 100, 25, 'red')
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(750, -4912.5), 100, 25, 'red')
    );
  }

  override render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 2000, -2000);
  }
}
