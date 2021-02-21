const dimensions = {
  CD_BREAKPOINT: 'cd1',
  CD_PIXEL_DENSITY: 'cd2',
  CD_SITE_VERSION: 'cd3',
  CD_HIT_META: 'cd4',
  CD_EFFECTIVE_CONNECTION_TYPE: 'cd5',
  CD_METRIC_VALUE: 'cd6',
  CD_CLIENT_ID: 'cd7',
  CD_SERVICE_WORKER_REPLAY: 'cd8',
  CD_SERVICE_WORKER_STATE: 'cd9',
  CD_CACHE_HIT: 'cd10',
  CD_WINDOW_ID: 'cd11',
  CD_VISIBILITY_STATE: 'cd12',
  CD_HIT_TYPE: 'cd13',
  CD_HIT_ID: 'cd14',
  CD_HIT_TIME: 'cd15',
  CD_TRACKING_VERSION: 'cd16',
  CD_VISIT_ID: 'cd17',
  CD_NAVIGATION_TYPE: 'cd18',
};

const metrics = {
  CM_FCP: 'cm1',
  CM_FCP_SAMPLE: 'cm2',
  CM_NT_SAMPLE: 'cm3',
  CM_DOM_LOAD_TIME: 'cm4',
  CM_WINDOW_LOAD_TIME: 'cm5',
  CM_REQUEST_START_TIME: 'cm6',
  CM_RESPONSE_END_TIME: 'cm7',
  CM_RESPONSE_START_TIME: 'cm8',
  CM_WORKER_START_TIME: 'cm9',
  CM_FID: 'cm10',
  CM_FID_SAMPLE: 'cm11',
  CM_LCP: 'cm12',
  CM_LCP_SAMPLE: 'cm13',
  CM_CLS: 'cm14',
  CM_CLS_SAMPLE: 'cm15',
};

const GA4_MEASUREMENT_ID = 'G-GVKBFZ3VDY';
const UA_MEASUREMENT_ID = 'UA-21292978-1';

module.exports = {
  dimensions,
  metrics,
  GA4_MEASUREMENT_ID,
  UA_MEASUREMENT_ID,
};
