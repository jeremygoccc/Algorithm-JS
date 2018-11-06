const Stack = require('./Stack')

class Broswer {
  constructor () {
    this.backStack = new Stack.createStack()
    this.frontStack = new Stack.createStack()
  }

  normalVisit (url) {
    this.backStack.push(url)
    this.frontStack.clear()
    this.displayAllStack()
  }

  back () {
    const url = this.backStack.pop()
    if (url !== -1) {
      this.frontStack.push(url)
      this.displayAllStack()
    } else {
      console.log('无后退页')
    }
  }

  front () {
    const url = this.frontStack.pop()
    if (url !== -1) {
      this.backStack.push(url)
      this.displayAllStack()
    } else {
      console.log('无前进页')
    }
  }

  displayAllStack () {
    console.log('后退栈: ')
    this.backStack.display()
    console.log('前进栈: ')
    this.frontStack.display()
  }
}

const broswer = new Broswer()
broswer.normalVisit('www.baidu.com')
broswer.normalVisit('www.google.com')
broswer.normalVisit('www.fackbook.com')
broswer.normalVisit('www.yaho.com')
broswer.normalVisit('www.linkedin.com')
broswer.back()
broswer.back()
broswer.normalVisit('www.homyit.cn')
broswer.front()
