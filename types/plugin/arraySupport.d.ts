import { PluginFunc } from '@basemachina/dayjs'

declare module '@basemachina/dayjs' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export = plugin
