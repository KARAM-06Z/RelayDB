abstract class Base<T> {
  abstract deserialize(data: Partial<T>): void

  protected primaryKey(key: string = 'id', value?: PropertyKey) {
    Object.assign(this, { [key]: value })
  }

  constructor(data: Partial<T> = {}) {
    this.deserialize(data)
  }
}

export { Base }
