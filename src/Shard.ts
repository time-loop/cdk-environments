export interface IShardProps {
  /**
   * The AWS region for a shard.
   */
  readonly region: string;
  /**
   * The shard-number within the region.
   */
  readonly number: number;
}

export interface IShard extends IShardProps {
  /**
   * The proper name for a shard (without numeric suffix).
   */
  readonly name: string;
}

export abstract class Shard implements IShard {
  readonly region: string;
  readonly number: number;

  constructor(props: IShardProps) {
    this.region = props.region;
    this.number = props.number;
  }

  /**
   * There are numerous different ways to name a shard. Pick one and stick with
   * it.
   */
  abstract get name(): string;
}
