// https://repl.it/@mpaulweeks/ice

import { Move, PointHistory } from './moves';
import { Point } from './point';

export interface Traveled {
  move: Move,
  point: Point,
}

export interface MoveInformation {
  point: Point,
  traveled: Array<Traveled>,
}

export enum Block {
  Start = 1,
  Win,
  Block,
}

interface BlockLookup {
  [key: string]: Block;
};

export class Level {
  width: number;
  height: number;
  start: Point;
  win: Point;
  blocks: Array<Point>;
  blocksByKey: BlockLookup = {};


  constructor(width: number, height: number, start: Point, win: Point, blocks: Array<Point>) {
    this.width = width;
    this.height = height;
    this.start = start;
    this.win = win;
    this.blocks = blocks;

    this.blocksByKey = this.blocks.reduce(
      (lookup: BlockLookup, b) => {
        lookup[b.toString()] = Block.Block;
        return lookup;
      },
      {}
    );
  }

  isWinningPoint(loc: Point): boolean {
    return this.win.equals(loc);
  }
  isIllegalPoint(loc: Point): boolean {
    const { blocksByKey, width, height } = this;
    const hitBlock = !!blocksByKey[loc.toString()];
    return hitBlock || (
      (loc.x < 0) ||
      (loc.x >= width) ||
      (loc.y < 0) ||
      (loc.y >= height)
    );
  }
  applyMove(point: Point, move: Move): MoveInformation {
    let current = point;
    const traveled = [{
      move: move,
      point: current,
    }];
    while (true) {
      const next = current.clone();

      if (move === Move.Left) next.x--;
      else if (move === Move.Right) next.x++;
      else if (move === Move.Up) next.y--;
      else if (move === Move.Down) next.y++;
      else throw new Error(`unexpected move: ${move}`);

      if (this.isIllegalPoint(next)) {
        break;
      }
      traveled.push({ move: move, point: next });
      current = next;
      if (this.isWinningPoint(current)) {
        break;
      }
    }
    return {
      point: current,
      traveled: traveled,
    };
  }
  solve(): PointHistory | null {
    const spawn = new PointHistory(this.start, [], []);
    const visited: { [key: string]: boolean } = {};
    const queue = [spawn];
    while (queue.length) {
      const next = queue.shift() as PointHistory;
      const key = next.point.toString();
      if (!visited[key]) {
        visited[key] = true;
        if (this.isWinningPoint(next.point)) {
          return next;
        }
        let nextMoves = next.getNextMoves();
        nextMoves.forEach(m => {
          const { move, history } = m;
          const newPoint = this.applyMove(history.point, move).point;
          history.addMove(newPoint, move);
          queue.push(history);
        });
      }
    }
    return null;
  }

  print(): string {
    const { width, height, start, win, blocks } = this;
    const grid: Array<Array<string>> = [];
    for (let y = 0; y < height; y++) {
      const row: Array<string> = [];
      for (let x = 0; x < width; x++) {
        let char = '_';
        if (win.x === x && win.y === y) {
          char = 'W';
        }
        if (start.x === x && start.y === y) {
          char = 'S';
        }
        blocks.forEach(b => {
          if (b.x === x && b.y === y) {
            char = '0';
          }
        });
        row.push(char);
      }
      grid.push(row);
    }
    return grid.map(row => row.join('')).join('\n');
  }
}

export class SolvableLevel {
  level: Level;
  soln: PointHistory;
  constructor(level: Level, soln: PointHistory) {
    this.level = level;
    this.soln = soln;
  }
}

export class PlayableLevel {
  level: Level;
  soln: PointHistory;
  hero: PointHistory;

  constructor(solved: SolvableLevel) {
    this.level = solved.level;
    this.soln = solved.soln;
    this.hero = new PointHistory(this.level.start, [], []);
  }

  reset(): void {
    this.hero = new PointHistory(this.level.start, [], []);
  }

  moveHero(move: Move): MoveInformation {
    const { level, hero } = this;
    const moveInfo = level.applyMove(hero.point, move);
    hero.addMove(moveInfo.point, move);
    return moveInfo;
  }
}
