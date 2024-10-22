import MatomoTracker from '@4v-services/matomo-tracker'
import { InstanceParams } from './types'

function createInstance(params: InstanceParams): MatomoTracker {
  return new MatomoTracker(params)
}

export default createInstance
