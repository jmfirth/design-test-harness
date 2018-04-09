import { TemplateResult } from 'lit-html'
import { html } from 'lit-html/lib/lit-extended'
import * as colors from '../colors'
import { rgba } from '../common'
import { Breakpoints, Grid } from '../config'

export const grid = (breakpoints: Breakpoints, grid: Grid) => html`
  <div class="harness-grid">
    <style type="text/css">
      .harness-grid {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        grid-template-columns: repeat(${grid.columns}, 1fr);
        grid-gap: 3px;
        z-index: 99999999999;
        background: none !important;
      }

      @media (min-width: ${breakpoints.mobile}px) {
        .harness-grid {
          left: 50%;
          width: ${grid.container.mobile}px;
          margin-left: -${grid.container.mobile / 2}px;
          /* grid-template-columns: repeat($grid-columns, $mobile-grid-column); */
          grid-gap: ${grid.gutters.mobile}px;
        }
      }

      @media (min-width: ${breakpoints.tablet}px) {
        .harness-grid {
          width: ${grid.container.tablet}px;
          margin-left: -${grid.container.tablet / 2}px;
          /* grid-template-columns: repeat($grid-columns, $tablet-grid-column); */
          grid-gap: ${grid.gutters.tablet}px;
        }
      }

      @media (min-width: ${breakpoints.smallDesktop}px) {
        .harness-grid {
          width: ${grid.container.smallDesktop}px;
          margin-left: -${grid.container.smallDesktop / 2}px;
          /* grid-template-columns: repeat($grid-columns, $sm-desktop-grid-column); */
          grid-gap: ${grid.gutters.tablet}px;
        }
      }

      @media (min-width: ${breakpoints.largeDesktop}px) {
        .harness-grid {
          width: ${grid.container.largeDesktop}px;
          margin-left: -${grid.container.largeDesktop / 2}px;
          /* grid-template-columns: repeat($grid-columns, $lg-desktop-grid-column); */
          grid-gap: ${grid.gutters.tablet}px;
        }
      }

      .harness-grid__column {
        grid-column-gap: 3em;
        background-color: ${rgba(colors.carnation, 0.15)};
        border: 1px solid ${rgba(colors.carnation, 0.25)};
        border-top: none;
        border-bottom: none;
      }
    </style>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
    <div class="harness-grid__column"></div>
  </div>
`
