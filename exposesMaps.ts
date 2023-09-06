import { ExposesObject, SharedObject } from '@originjs/vite-plugin-federation'

const exposes: ExposesObject = {
  './Book': './src/containers/ContainerFilter.vue',
}
const sharedExposed: SharedObject = {
  vue: {},
}
export { exposes, sharedExposed }
