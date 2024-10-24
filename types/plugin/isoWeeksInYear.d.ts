import { PluginFunc } from '@basemachina/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    isoWeeksInYear(): number
  }
}
