import { PluginFunc } from '@basemachina/dayjs'

declare const plugin: PluginFunc
export = plugin

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare module '@basemachina/dayjs' {
  interface Dayjs {
    toObject(): DayjsObject
  }
}
