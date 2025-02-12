import { PluginFunc, ConfigType, OpUnitType } from '@basemachina/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@basemachina/dayjs' {
  interface Dayjs {
    isSameOrAfter(date?: ConfigType, unit?: OpUnitType): boolean
  }
}
