import type { Key, DataProperty } from './interface';

const INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';

function toArray<T>(arr: T | readonly T[]): T[] {
  if (arr === undefined || arr === null) {
    return [];
  }
  return (Array.isArray(arr) ? arr : [arr]) as T[];
}

export function getPathValue<ValueType, ObjectType extends object>(
  record: ObjectType,
  path: DataProperty,
): ValueType {
  // Skip if path is empty
  if (!path && typeof path !== 'number') {
    return record as unknown as ValueType;
  }

  const pathList = toArray(path);

  let current: ValueType | ObjectType | any = record;

  for (let i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null as any;
    }

    const prop = pathList[i];
    current = current[prop];
  }

  return current as ValueType;
}
