import AnyValue from './any-value'

class NumberValue extends AnyValue {
  static defaultProps = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
  }

  constructor(...args) {
    super(...args, 0)

    this.define('increment', (v, n = 1) => {
      const num = typeof n !== 'number' ? 1 : n
      return Math.min(v + num, this.props.max)
    })

    this.define('decrement', (v, n = 1) => {
      const num = typeof n !== 'number' ? 1 : n
      return Math.max(v - num, this.props.min)
    })
  }
}

export default NumberValue
