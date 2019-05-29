import { Level, SolvableLevel } from "./level";
import { Point } from "./point";

function range(n: number): Array<number> {
  let arr: Array<number> = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

export class Generator {
  width: number;
  height: number;
  blockPercent: number;
  minMoves: number;

  constructor(width: number, height: number, blockPercent: number, minMoves: number) {
    this.width = width;
    this.height = height;
    this.blockPercent = blockPercent;
    this.minMoves = minMoves;
  }

  tryGenerateLevel(): (SolvableLevel | null) {
    const { width, height, blockPercent, minMoves } = this;
    const bound = new Point(width, height);
    const win = bound.randomWithin([]);
    const start = bound.randomWithin([win]);
    const blocks = range(width * height * blockPercent).map(_ => bound.randomWithin([win, start]));
    const level = new Level(width, height, start, win, blocks);
    const solution = level.solve();
    return solution && solution.moves.length > minMoves ? new SolvableLevel(level, solution) : null;
  }

  generateLevels(max: number, tries: number): Array<SolvableLevel> {
    const levels: Array<SolvableLevel> = [];
    for (let i = 0; levels.length < max && i < tries; i++) {
      const l = this.tryGenerateLevel();
      if (l) {
        levels.push(l);
      }
    }
    return levels;
  }
}
