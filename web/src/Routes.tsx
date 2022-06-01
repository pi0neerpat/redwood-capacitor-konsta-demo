// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route } from '@redwoodjs/router'
import DefaultLayout from 'src/layouts/DefaultLayout'
const Routes = () => {
  return (
    <Router>
      <DefaultLayout>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/demo" page={DemoPage} name="demo" />
        <Route path="/mail" page={MailPage} name="mail" />
        <Route notfound page={NotFoundPage} />
      </DefaultLayout>
    </Router>
  )
}

export default Routes
