import { DeeplyNestedObjects, MultipleDeeplyNestedObjects } from './lib'

export function classWithDeeplyNestedObjects(): number {
  return new DeeplyNestedObjects().outer.inner.getStuff(12).deep.veryDeep
}

export function classWithMultipleDeeplyNestedObjects(): [number, number] {
  const stuff = new MultipleDeeplyNestedObjects().outer.inner.getStuff(12)
  return [stuff.deep.veryDeep, stuff.deep.alsoVeryDeep]
}
