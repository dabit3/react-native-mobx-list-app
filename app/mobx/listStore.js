import {observable} from 'mobx'
import React from 'react'
import { Text } from 'react-native'

class ObservableListStore {
  @observable list = []

  addListItem (item) {
    this.list.push({
      name: item, 
      items: []
    })
  }

  removeListItem (item) {
    this.list = this.list.filter((l) => {
      return l.name !== item.name
    })
  }

  addItem(name, item) {
    this.list.forEach((l) => {
      if (l.name === name) {
        l.items.push(item)
      }
    })
  }
}


const observableListStore = new ObservableListStore()
export default observableListStore
                        