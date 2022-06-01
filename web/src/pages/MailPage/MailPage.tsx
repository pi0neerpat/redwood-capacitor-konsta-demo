import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MailPage = () => {
  return (
    <>
      <MetaTags title="Mail" description="Mail page" />

      <h1>MailPage</h1>
      <p>
        Find me in <code>./web/src/pages/MailPage/MailPage.tsx</code>
      </p>
      <p>
        My default route is named <code>mail</code>, link to me with `
        <Link to={routes.mail()}>Mail</Link>`
      </p>
    </>
  )
}

export default MailPage
