import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageWrapper from 'src/components/PageWrapper'
import {
  Page,
  Navbar,
  NavbarBackLink,
  Card,
  BlockTitle,
  List,
  ListItem,
  Link,
} from 'konsta/react'
const DemoPage = () => {
  return (
    <PageWrapper>
      <MetaTags title="Demo" description="Demo page" />
      <BlockTitle withBlock={false}>Simple Cards</BlockTitle>
      <Card>
        This is a simple card with plain text, but cards can also contain their
        own header, footer, list view, image, or any other element.
      </Card>
      <Card header="Card header" footer="Card footer">
        Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom
        actions.
      </Card>
      <Card>
        Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
        Mauris aliquet magna justo.
      </Card>

      <BlockTitle withBlock={false}>Outline Cards</BlockTitle>
      <Card outline>
        This is a simple card with plain text, but cards can also contain their
        own header, footer, list view, image, or any other element.
      </Card>
      <Card outline header="Card header" footer="Card footer">
        Card with header and footer. Card headers are used to display card
        titles and footers for additional information or just for custom
        actions.
      </Card>
      <Card outline>
        Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
        Mauris aliquet magna justo.{' '}
      </Card>

      <BlockTitle withBlock={false}>Card With List View</BlockTitle>
      <Card>
        <List nested className="-m-4">
          <ListItem href title="Link 1" />
          <ListItem href title="Link 2" />
          <ListItem href title="Link 3" />
          <ListItem href title="Link 4" />
          <ListItem href title="Link 5" />
        </List>
      </Card>

      <BlockTitle withBlock={false}>Styled Cards</BlockTitle>
      <div className="lg:grid lg:grid-cols-2">
        <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
              }}
            >
              Journey To Mountains
            </div>
          }
          footer={
            <div className="flex justify-between">
              <Link>Like</Link>
              <Link>Read more</Link>
            </div>
          }
        >
          <div className="text-gray-500 mb-3">Posted on January 21, 2021</div>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>
        </Card>
        <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)',
              }}
            >
              Lorem Ipsum
            </div>
          }
          footer={
            <div className="flex justify-between">
              <Link>Like</Link>
              <Link>Read more</Link>
            </div>
          }
        >
          <div className="text-gray-500 mb-3">Posted on January 21, 2021</div>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>
        </Card>
      </div>
    </PageWrapper>
  )
}

export default DemoPage
