import { PluginFunc } from '@basemachina/dayjs'

declare module '@basemachina/dayjs' {
  interface ConfigTypeMap {
    bigIntSupport: BigInt
  }
  export function unix(t: BigInt): Dayjs
}

declare const plugin: PluginFunc
export = plugin
