import { GameObject, Vector2D } from 'jf-canvas-game-engine';
import { Player } from './Player';
import { Platform } from './Platform';
import { DebugCamera } from './DebugCamera';
import { DisappearingPlatform } from './DisappearingPlatform';
import { FakePlatform } from './FakePlatform';

export class Level1 extends GameObject {
  #player = new Player(new Vector2D(-25, -6000));
  constructor() {
    super(new Vector2D(0, 0));
    const iceBlue = 'rgb(32 195 208 / 20%)';

    // this.addChild(new DebugCamera(new Vector2D(0, 0)));
    this.addChild(this.#player);

    // outer walls
    this.addChild(new Platform(new Vector2D(-62.5, -3000), 25, 6025, iceBlue));
    this.addChild(new Platform(new Vector2D(12.5, -3037.5), 25, 5950, iceBlue));
    this.addChild(
      new Platform(new Vector2D(1987.5, -3012.5), 25, 6000, iceBlue)
    );

    // bottom floor
    this.addChild(new Platform(new Vector2D(-25, 0), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1000, 0), 2000, 25, iceBlue));

    // first stairs
    this.addChild(new Platform(new Vector2D(150, -100), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(300, -200), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(500, -300), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(750, -400), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1050, -500), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1400, -600), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1500, -750), 100, 25, iceBlue));

    // right resting place
    this.addChild(new Platform(new Vector2D(1800, -900), 350, 25, iceBlue));

    // small jumps
    this.addChild(new Platform(new Vector2D(1400, -900), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1200, -900), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1000, -900), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(800, -900), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(600, -900), 50, 25, iceBlue));

    // left resting place
    this.addChild(new Platform(new Vector2D(200, -900), 350, 25, iceBlue));

    // runway
    this.addChild(new Platform(new Vector2D(187.5, -1100), 325, 25, iceBlue));

    // runway target platform
    this.addChild(new Platform(new Vector2D(550, -1250), 50, 25, iceBlue));

    // left large box with small protrusions
    this.addChild(new Platform(new Vector2D(175, -1662.5), 300, 1000, iceBlue));
    this.addChild(new Platform(new Vector2D(350, -1425), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(350, -1625), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(350, -1825), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(350, -2025), 50, 25, iceBlue));

    // left path: right right left platforms
    this.addChild(new Platform(new Vector2D(600, -2150), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(800, -2350), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(600, -2550), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(800, -2750), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1000, -2950), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(800, -3150), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1000, -3350), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1200, -3550), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1000, -3750), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1200, -3950), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1400, -4150), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1600, -4350), 50, 25, iceBlue));

    // right path
    this.addChild(new Platform(new Vector2D(1050, -2325), 150, 75, iceBlue));
    this.addChild(
      new Platform(new Vector2D(1231.25, -2337.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1281.25, -2537.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1331.25, -2737.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1381.25, -2937.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1431.25, -3137.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1481.25, -3337.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1531.25, -3537.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1581.25, -3737.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1631.25, -3937.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1681.25, -4137.5), 12.5, 50, iceBlue)
    );
    this.addChild(
      new Platform(new Vector2D(1731.25, -4337.5), 12.5, 50, iceBlue)
    );

    // right resting place
    this.addChild(new Platform(new Vector2D(1887.5, -4500), 175, 50, iceBlue));

    // right square stairs
    this.addChild(new Platform(new Vector2D(1950, -4600), 50, 50, iceBlue));
    this.addChild(new Platform(new Vector2D(1850, -4700), 50, 50, iceBlue));
    this.addChild(new Platform(new Vector2D(1950, -4800), 50, 50, iceBlue));
    this.addChild(new Platform(new Vector2D(1850, -4900), 50, 50, iceBlue));

    // bridge with disappearing platforms
    this.addChild(new Platform(new Vector2D(1750, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1650, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1550, -4912.5), 100, 25, iceBlue));
    this.addChild(
      new DisappearingPlatform(new Vector2D(1450, -4912.5), 100, 25, iceBlue)
    );
    this.addChild(new Platform(new Vector2D(1350, -4912.5), 100, 25, iceBlue));
    this.addChild(
      new DisappearingPlatform(new Vector2D(1250, -4912.5), 100, 25, iceBlue)
    );
    this.addChild(
      new DisappearingPlatform(new Vector2D(1150, -4912.5), 100, 25, iceBlue)
    );
    this.addChild(new Platform(new Vector2D(1050, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(950, -4912.5), 100, 25, iceBlue));
    this.addChild(
      new DisappearingPlatform(new Vector2D(850, -4912.5), 100, 25, iceBlue)
    );
    this.addChild(new Platform(new Vector2D(750, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(650, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(550, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(450, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(350, -4912.5), 100, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(250, -4912.5), 100, 25, iceBlue));

    // left resting space
    this.addChild(new Platform(new Vector2D(112.5, -4900), 175, 50, iceBlue));

    // left square stairs
    this.addChild(new Platform(new Vector2D(50, -5000), 50, 50, iceBlue));
    this.addChild(new Platform(new Vector2D(150, -5100), 50, 50, iceBlue));
    this.addChild(new Platform(new Vector2D(50, -5200), 50, 50, iceBlue));
    this.addChild(new Platform(new Vector2D(150, -5300), 50, 50, iceBlue));

    // stairs
    this.addChild(new Platform(new Vector2D(300, -5350), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(550, -5400), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(800, -5450), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1050, -5500), 50, 25, iceBlue));

    // split choice fake platforms
    this.addChild(new FakePlatform(new Vector2D(850, -5650), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1250, -5650), 50, 25, iceBlue));

    this.addChild(new Platform(new Vector2D(650, -5800), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1050, -5800), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1450, -5800), 50, 25, iceBlue));

    this.addChild(new Platform(new Vector2D(450, -5950), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(850, -5950), 50, 25, iceBlue));
    this.addChild(new Platform(new Vector2D(1250, -5950), 50, 25, iceBlue));
    this.addChild(new FakePlatform(new Vector2D(1650, -5950), 50, 25, iceBlue));

    this.addChild(new Platform(new Vector2D(250, -6100), 50, 25, iceBlue));
    this.addChild(new FakePlatform(new Vector2D(650, -6100), 50, 25, iceBlue));
    this.addChild(new FakePlatform(new Vector2D(1050, -6100), 50, 25, iceBlue));
    this.addChild(new FakePlatform(new Vector2D(1450, -6100), 50, 25, iceBlue));
    this.addChild(new FakePlatform(new Vector2D(1850, -6100), 50, 25, iceBlue));
  }

  override render(ctx: CanvasRenderingContext2D): void {
    const gradient = ctx.createLinearGradient(1000, 500, 1000, -8000);
    gradient.addColorStop(0, '#1e5799');
    gradient.addColorStop(0.5, '#2989d8');
    gradient.addColorStop(0.8, 'black');
    ctx.fillStyle = gradient;
    ctx.fillRect(-1500, 500, 5000, -8000);
  }
}
