import React, { useLayoutEffect, useState, useEffect } from 'react'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageWrapper from 'src/components/PageWrapper'

import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Link,
  Toggle,
  Button,
  Block,
  Panel,
} from 'konsta/react'

const DemoIcon = () => {
  return <img src="/favicon.png" alt="icon" className="ios:w-7 material:w-6" />
}

const HomePage = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false)
  const [rightPanelOpened, setRightPanelOpened] = useState(false)

  useEffect(() => {
    window.setMode = (mode) => {
      if (mode === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }
  }, [])

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  useLayoutEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  return (
    <PageWrapper>
      <MetaTags title="Home" description="Home page" />
      <Navbar title="Redwood + Capacitor + Konsta" />
      <BlockTitle>Theme</BlockTitle>
      <List>
        <ListItem
          title="Dark Mode"
          after={
            <Toggle onChange={() => toggleDarkMode()} checked={darkMode} />
          }
        />
      </List>
      <BlockTitle>Components</BlockTitle>
      <List>
        <ListItem
          key={'/'}
          link
          title="Demos"
          linkComponent={Link}
          linkProps={{ to: routes.demo() }}
          media={<DemoIcon />}
        />
      </List>
      <Block strong className="space-y-4">
        <p>
          Konsta UI comes with 2 panels (on left and on right), both are
          optional. You can put absolutely anything inside: data lists, forms,
          custom content, etc.
        </p>
      </Block>
      <Block strong className="flex space-x-4">
        <Button onClick={() => setLeftPanelOpened(true)}>Left Panel</Button>
        <Button onClick={() => setRightPanelOpened(true)}>Right Panel</Button>
      </Block>

      <Panel
        side="left"
        opened={leftPanelOpened}
        onBackdropClick={() => setLeftPanelOpened(false)}
      >
        <Page>
          <Navbar
            title="Left Panel"
            right={
              <Link navbar onClick={() => setLeftPanelOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>Here comes left panel.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut
              leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in
              lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
              lacinia venenatis dignissim. Suspendisse non nisl semper tellus
              malesuada suscipit eu et eros. Nulla eu enim quis quam elementum
              vulputate. Mauris ornare consequat nunc viverra pellentesque.
              Aenean semper eu massa sit amet aliquam. Integer et neque sed
              libero mollis elementum at vitae ligula. Vestibulum pharetra sed
              libero sed porttitor. Suspendisse a faucibus lectus.
            </p>
          </Block>
        </Page>
      </Panel>
      <Panel
        side="right"
        opened={rightPanelOpened}
        onBackdropClick={() => setRightPanelOpened(false)}
      >
        <Page>
          <Navbar
            title="Right Panel"
            right={
              <Link navbar onClick={() => setRightPanelOpened(false)}>
                Close
              </Link>
            }
          />
          <Block className="space-y-4">
            <p>Here comes right panel.</p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
              Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor
              nibh, suscipit in consequat vel, feugiat sed quam. Nam risus
              libero, auctor vel tristique ac, malesuada ut ante. Sed molestie,
              est in eleifend sagittis, leo tortor ullamcorper erat, at
              vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis
              bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at
              urna. Pellentesque tempor congue massa quis faucibus. Vestibulum
              nunc eros, convallis blandit dui sit amet, gravida adipiscing
              libero.
            </p>
          </Block>
        </Page>
      </Panel>
    </PageWrapper>
  )
}

export default HomePage
