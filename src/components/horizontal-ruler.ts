import { TemplateResult } from 'lit-html'
import { html } from 'lit-html/lib/lit-extended'
import * as colors from '../colors'
import { rgba } from '../common'

export const horizontalRuler = () => html`
  <style type="text/css">
    .harness-horizontal-ruler {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .harness-horizontal-ruler__rule {
      height: 10vh;
      border-bottom: 1px solid ${rgba(colors.carnation, 0.5)};
    }

    .harness-horizontal-ruler__rule:nth-child(odd) {
      border-bottom: 1px solid ${rgba(colors.carnation, 0.25)};
    }
  </style>
  <div class="harness-horizontal-ruler">
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
    <div class="harness-horizontal-ruler__rule"></div>
  </div>
`
