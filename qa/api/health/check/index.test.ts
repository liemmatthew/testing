import 'module-alias/register'
import {assert} from 'chai'
import {status} from '@helpers/http-status-codes'
import {api} from '@helpers/api'

const endpoint = '/boilerplate/health/check'

const testCase = {
  describe: `Forky - GET Health Check Test | ${endpoint}`,
  before: '',
  after: '',
  positive: {
    getHealthCheck: 'As a User, I should be able to successfully get check',
  },
}

describe(`@getHealthCheckTest ${testCase.describe}`, () => {
  it(`@get @getHealthCheck ${testCase.positive.getHealthCheck}`, async () => {
    const response = await api.get(endpoint, {})
    assert.equal(response.status, status.OK, response.body.message)
  })
})
