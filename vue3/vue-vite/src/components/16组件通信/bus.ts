type BusClass<T> = {
  emit: (name: T) => void
  on: (name: T, callback: Function) => void
}

type BusParams = string | number | symbol

type List = {
  [key: BusParams]: Array<Function>
}

class Bus<T extends BusParams> implements BusClass<T> {
  list: List
  constructor() {
    this.list = {}
  }
  emit(name: T, ...arg: Array<any>) {
    const funs = this.list[name] || []
    funs.forEach((fun) => {
      fun.apply(this, arg)
    })
  }

  on(name: T, callback: Function) {
    const funs = this.list[name] || []
    funs.push(callback)
    this.list[name] = funs
  }
}

export default new Bus()
