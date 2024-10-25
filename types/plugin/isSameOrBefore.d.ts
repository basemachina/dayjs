import { PluginFunc, ConfigType, OpUnitType } from '@basemachina/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@basemachina/dayjs' {
  interface Dayjs {
    isSameOrBefore(date?: ConfigType, unit?: OpUnitType): boolean
  }
}
