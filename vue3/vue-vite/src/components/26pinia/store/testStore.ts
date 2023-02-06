import { NORMALIZE_CLASS } from '@vue/compiler-core'
import { defineStore } from 'pinia'
import { Names } from '../storeName'
type userType = {
  name: string,
  age: number,
}
const result:userType = {
  name: 'zzj',
  age: 25
}
export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      count: 1,
      user: result
    }
  },
  getters: {
    userInfo():string {
      return `姓名${this.user.name},age:${this.user.age}`
    }
  },
  actions: {
    changeUser() {
      const newUser:userType = {name: 'zzn', age:26}
      this.user = newUser
      this.count = 666
    }
  }
})