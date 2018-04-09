import { TemplateResult } from 'lit-html'
import { html } from 'lit-html/lib/lit-extended'
import { Config } from '../config'

export const information = (config: Config) => {
  const gridColumn = 1
  const verticalPosition = 30

  return html`
    <div class="harness-information">
      <div class="harness-information__grid-column">
        ${gridColumn}
      </div>
      <div class="harness-information__vertical-position">
        ${verticalPosition}
      </div>
    </div>
  `
}
