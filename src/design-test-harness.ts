import { render } from 'lit-html'
import { createPublisher } from '@jmfirth/lit-html-redux'
import { harness } from './components/harness'
import { Config } from './config'
import { createStore, harnessActions, settingsActions } from './store'

const store = createStore()

function createContainer(): HTMLDivElement {
  const container = document.createElement('div')
  container.className = 'harness'
  document.body.appendChild(container)
  return container
}

function createTestHarness(config: Config): void {
  const container = createContainer()
  store.dispatch(settingsActions.setConfig(config))
  const provider = createPublisher(
    publisher => render(publisher.publish(harness), container),
    store
  )
  provider.mount()

  let clickTimer: number | null = null
  document.body.addEventListener('mousedown', (event: Event) => {
    if (clickTimer === null) {
      clickTimer = window.setTimeout(() => {
        clickTimer = null
      }, 500)
    } else {
      window.clearTimeout(clickTimer)
      clickTimer = null
      store.dispatch(harnessActions.toggleVisibility())
    }
  })
}

declare global {
  interface Window {
    testHarness(config?: Config): void
  }
}

window.testHarness = createTestHarness
