import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockTitle,
  Preloader,
} from 'konsta/react';

export default function PreloaderPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Preloader"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Default</BlockTitle>
      <Block strong className="text-center">
        <Preloader />
      </Block>

      <BlockTitle>Colors</BlockTitle>
      <Block strong className="grid grid-cols-4">
        <div className="text-center">
          <Preloader colors={{ icon: 'text-red-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ icon: 'text-green-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ icon: 'text-pink-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ icon: 'text-yellow-500' }} />
        </div>
      </Block>

      <BlockTitle>Sizes</BlockTitle>
      <Block strong className="grid grid-cols-4 items-center">
        <div className="text-center">
          <Preloader size="w-4 h-4" />
        </div>
        <div className="text-center">
          <Preloader size="w-8 h-8" />
        </div>
        <div className="text-center">
          <Preloader size="w-12 h-12" />
        </div>
        <div className="text-center">
          <Preloader size="w-16 h-16" />
        </div>
      </Block>
    </Page>
  );
}
PreloaderPage.displayName = 'PreloaderPage';
