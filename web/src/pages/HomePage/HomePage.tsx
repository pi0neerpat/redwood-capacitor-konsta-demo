import React, { useLayoutEffect, useState, useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageWrapper from 'src/components/PageWrapper'

import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Radio,
  Toggle,
} from 'konsta/react'

const DemoIcon = () => {
  return <img src="/favicon.png" alt="icon" className="ios:w-7 material:w-6" />
}

const HomePage = () => {
  const [theme, setTheme] = useState('ios')

  useEffect(() => {
    window.setTheme = (t) => setTheme(t)
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
  })

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
          key="/"
          link
          title={'test'}
          linkComponent={Link}
          linkProps={{ to: '/' }}
          media={<DemoIcon />}
        />
      </List>
    </PageWrapper>
  )
}

export default HomePage
