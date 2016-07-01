import {observable, computed} from 'mobx'
import mobx from 'mobx'
import React from 'react'
import { Text } from 'react-native'

const list = []

class ObservableListStore {
  @observable list = list

  addListItem (item) {
    this.list.push({
      name: item, 
      items: []
    })
  }

  removeListItem (item) {
    console.log('item:: ', item)
    this.list = this.list.filter((l) => {
      return l.name !== item.name
    })
  }

  addItem(name, item) {
    console.log('name: ', name)
    console.log('item: ', item)
    this.list.forEach((l) => {
      console.log('l::', l)
      if (l.name === name) {
        l.items.push(item)
      }
    })
  }
}


const observableListStore = new ObservableListStore()
export default observableListStore
                        