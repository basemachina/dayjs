import { PluginFunc } from '@basemachina/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@basemachina/dayjs' {
  interface Dayjs {
    dayOfYear(): number
    dayOfYear(value: number): Dayjs
  }
}
