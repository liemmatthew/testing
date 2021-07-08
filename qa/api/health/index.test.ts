import 'module-alias/register'
import {assert} from 'chai'
import {status} from '@helpers/http-status-codes'
import {api} from '@helpers/api'

const endpoint = '/boilerplate/health'

const testCase = {
  describe: `Forky - GET Health Test | ${endpoint}`,
  before: '',
  after: '',
  positive: {
    getHealth: 'As a User, I should be able to successfully get check',
  },
}

describe(`@getHealthTest ${testCase.describe}`, () => {
  it(`@get @getHealth ${testCase.positive.getHealth}`, async () => {
    const response = await api.get(endpoint, {})
    assert.equal(response.status, status.OK, response.body.message)
  })
})
