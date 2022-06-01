import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageWrapper from 'src/components/PageWrapper'
const DemoPage = () => {
  return (
    <PageWrapper>
      <MetaTags title="Demo" description="Demo page" />

      <h1>DemoPage</h1>
      <p>
        Find me in <code>./web/src/pages/DemoPage/DemoPage.tsx</code>
      </p>
      <p>
        My default route is named <code>demo</code>, link to me with `
        <Link to={routes.demo()}>Demo</Link>`
      </p>
    </PageWrapper>
  )
}

export default DemoPage
