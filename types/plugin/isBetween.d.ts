import { PluginFunc, ConfigType, OpUnitType } from '@basemachina/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@basemachina/dayjs' {
  interface Dayjs {
    isBetween(a: ConfigType, b: ConfigType, c?: OpUnitType | null, d?: '()' | '[]' | '[)' | '(]'): boolean
  }
}
