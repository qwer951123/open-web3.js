// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@polkadot/types/codec';
import { AccountId, Moment, OracleValue } from '@open-web3/orml-types/interfaces/runtime';

/** @name OrderedSet */
export interface OrderedSet extends Vec<AccountId> {}

/** @name TimestampedValue */
export interface TimestampedValue extends Struct {
  readonly value: OracleValue;
  readonly timestamp: Moment;
}

/** @name TimestampedValueOf */
export interface TimestampedValueOf extends TimestampedValue {}

export type PHANTOM_ORACLE = 'oracle';
