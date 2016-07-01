import {observable, computed} from 'mobx'
import mobx from 'mobx'
import React from 'react'
import { Text } from 'react-native'

const td = []

for (var i = 0; i < 10; i++){
  td.push({
    task: 'hello world' + i, completed: true, assignee: 'nader dabit'
  })
}

class ObservableTodoStore {
  @observable todos = td
  @observable pendingRequests = 0

  constructor() {
    mobx.autorun(() => console.log(this.report))
  }

  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length
  }

  @computed get report() {
    if (this.todos.length === 0)
      return <Text>none</Text>
    return <Text> + `Next todo: "${this.todos[0].task}". ` + 
      `Progress: ${this.completedTodosCount}/${this.todos.length}` + </Text>
  }

  addTodo(task) {
    this.todos.push({ 
      task: task,
      completed: false,
      assignee: null
    })
  }
}


const observableTodoStore = new ObservableTodoStore()
export default observableTodoStore
                        