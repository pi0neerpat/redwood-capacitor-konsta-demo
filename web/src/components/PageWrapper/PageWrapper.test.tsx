import { render } from '@redwoodjs/testing/web'

import PageWrapper from './PageWrapper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageWrapper />)
    }).not.toThrow()
  })
})
