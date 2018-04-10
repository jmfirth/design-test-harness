import * as t from 'io-ts'
import * as redux from 'redux'
import { Config } from './config'

/* Harness */

export const HarnessState = t.interface({
  visible: t.boolean
})
export type HarnessState = t.TypeOf<typeof HarnessState>

export const initialHarnessState: HarnessState = {
  visible: false
}

export const TOGGLE_VISIBILITY = 'Harness/TOGGLE_VISIBILITY'

export const ToggleVisibilityAction = t.interface({
  type: t.literal(TOGGLE_VISIBILITY)
})
export interface ToggleVisibilityAction extends t.TypeOf<typeof ToggleVisibilityAction> {}

export const harnessActions = {
  toggleVisibility: () => ({ type: TOGGLE_VISIBILITY } as ToggleVisibilityAction)
}

export const harnessReducer: redux.Reducer<HarnessState> = (
  state: HarnessState = initialHarnessState,
  action: redux.AnyAction
) => {
  if (ToggleVisibilityAction.is(action)) {
    return { ...state, visible: !state.visible }
  }
  return state
}

/* Settings */

export const SettingsState = t.interface({
  config: t.union([Config, t.undefined])
})
export interface SettingsState extends t.TypeOf<typeof SettingsState> {}

export const initialSettingsState: SettingsState = {
  config: undefined
}

export const settingsActions = {
  setConfig(config: Config) {
    if (!Config.is(config)) {
      throw new Error('Invalid configuration object')
    }
    return { type: SET_CONFIG, config }
  }
}

const SET_CONFIG = 'Settings/SET_CONFIG'

const SetConfigAction = t.interface({
  type: t.literal(SET_CONFIG),
  config: Config
})
interface SetConfigAction extends t.TypeOf<typeof SetConfigAction> {}

const settingsReducer: redux.Reducer<SettingsState> = (
  state: SettingsState = initialSettingsState,
  action: redux.AnyAction
) => {
  if (SetConfigAction.is(action)) {
    return { ...state, config: action.config }
  }
  return state
}

/* Root */

export interface State {
  harness: HarnessState
  settings: SettingsState
}

export const initialState: State = {
  harness: initialHarnessState,
  settings: initialSettingsState
}

export const rootReducer = redux.combineReducers<State>({
  harness: harnessReducer,
  settings: settingsReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => redux.GenericStoreEnhancer
  }
}

export function createStore() {
  return redux.createStore<State>(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
  )
}
