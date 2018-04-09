import { connect, ConnectedTemplateFactory, Provider } from '@jmfirth/lit-html-redux'
import { TemplateResult, directive } from 'lit-html'
import { html } from 'lit-html/lib/lit-extended'
import { bindActionCreators } from 'redux'
import { grid, horizontalRuler, information } from '.'
import { Config, Grid } from '../config'
import { harnessActions, State } from '../store'

export const harness = connect(
  (state: State) => ({
    config: state.settings.config,
    visible: state.harness.visible
  }),
  dispatch => ({ actions: bindActionCreators(harnessActions, dispatch) })
)(({ config, visible, actions }) => {
  return html`
    <div className=${['harness', visible ? 'harness--hidden' : undefined]
      .filter(Boolean)
      .join(' ')}>
      <style type="text/css">
        .harness {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }
        .harness--hidden {
          display: none;
        }
      </style>
      ${/*${information(config)}*/ ''}
      ${Config.is(config) && Grid.is(config.grid) && grid(config.breakpoints, config.grid)}
      ${horizontalRuler()}
    </div>
  `
})
