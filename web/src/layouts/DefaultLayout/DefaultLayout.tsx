import { useState } from 'react'
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  Tabbar,
  TabbarLink,
  ListItem,
  Radio,
  Icon,
  Toggle,
  Button,
  Block,
} from 'konsta/react'
import { navigate, routes } from '@redwoodjs/router'

import { EnvelopeFill, Calendar, CloudUploadFill } from 'framework7-icons/react'
import { MdEmail, MdToday, MdFileUpload } from 'react-icons/md'

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const isPreview = document.location.href.includes('examplePreview')
  const [activeTab, setActiveTab] = useState('home')
  React.useEffect(() => {
    navigate(routes[activeTab]())
  }, [activeTab])
  return (
    <>
      {children}
      <Tabbar labels={true} className="left-0 bottom-0 fixed">
        <TabbarLink
          active={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
          icon={
            <Icon
              ios={<EnvelopeFill className="w-7 h-7" />}
              material={<MdEmail className="w-6 h-6" />}
            />
          }
          label="Tab 1"
        />
        <TabbarLink
          active={activeTab === 'mail'}
          onClick={() => setActiveTab('mail')}
          icon={
            <Icon
              ios={<Calendar className="w-7 h-7" />}
              material={<MdToday className="w-6 h-6" />}
            />
          }
          label="Tab 2"
        />
        <TabbarLink
          active={activeTab === 'demo'}
          onClick={() => setActiveTab('demo')}
          icon={
            <Icon
              ios={<CloudUploadFill className="w-7 h-7" />}
              material={<MdFileUpload className="w-6 h-6" />}
            />
          }
          label="Tab 3"
        />
      </Tabbar>
    </>
  )
}

export default DefaultLayout
