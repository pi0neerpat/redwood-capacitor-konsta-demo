import { MetaTags } from '@redwoodjs/web'
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  Range,
} from 'konsta/react'
const MailPage = () => {
  const isPreview = document.location.href.includes('examplePreview')
  const [volume, setVolume] = React.useState(50)
  const [price, setPrice] = React.useState(150)
  const [red, setRed] = React.useState(100)
  const [green, setGreen] = React.useState(50)
  const [blue, setBlue] = React.useState(75)
  return (
    <Page>
      <MetaTags title="Mail" description="Mail page" />
      <Navbar
        title="Range Slider"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Volume: {volume}</BlockTitle>
      <BlockHeader>From 0 to 100 with step 10</BlockHeader>
      <List>
        <ListItem
          innerClassName="flex space-x-4"
          innerChildren={
            <>
              <span>0</span>
              <Range
                value={volume}
                step={10}
                onChange={(e) => setVolume(e.target.value)}
              />
              <span>100</span>
            </>
          }
        />
      </List>

      <BlockTitle>Price: ${price}</BlockTitle>
      <BlockHeader>From 0 to 1000 with step 1</BlockHeader>
      <List>
        <ListItem
          innerClassName="flex space-x-4"
          innerChildren={
            <>
              <span>$0</span>
              <Range
                value={price}
                step={1}
                min={0}
                max={1000}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span>$1000</span>
            </>
          }
        />
      </List>

      <BlockTitle>
        Color: rgb({red}, {green}, {blue})
      </BlockTitle>
      <List>
        <ListItem
          innerChildren={
            <Range
              colors={{
                valueBg: 'bg-red-500',
                thumbBgMaterial: 'range-thumb:bg-red-500',
              }}
              value={red}
              step={1}
              min={0}
              max={255}
              onChange={(e) => setRed(e.target.value)}
            />
          }
        />
        <ListItem
          innerChildren={
            <Range
              colors={{
                valueBg: 'bg-green-500',
                thumbBgMaterial: 'range-thumb:bg-green-500',
              }}
              value={green}
              step={1}
              min={0}
              max={255}
              onChange={(e) => setGreen(e.target.value)}
            />
          }
        />
        <ListItem
          innerChildren={
            <Range
              colors={{
                valueBg: 'bg-blue-500',
                thumbBgMaterial: 'range-thumb:bg-blue-500',
              }}
              value={blue}
              step={1}
              min={0}
              max={255}
              onChange={(e) => setBlue(e.target.value)}
            />
          }
        />
      </List>
    </Page>
  )
}

export default MailPage
