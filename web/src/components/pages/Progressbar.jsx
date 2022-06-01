import React, { useState } from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockTitle,
  Progressbar,
  Segmented,
  SegmentedButton,
} from 'konsta/react';

export default function ProgressbarPage() {
  const isPreview = document.location.href.includes('examplePreview');
  const [progress, setProgress] = useState(0.1);
  return (
    <Page>
      <Navbar
        title="Progressbar"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Determinate Progress Bar</BlockTitle>
      <Block strong>
        <div className="my-4">
          <Progressbar progress={progress} />
        </div>
        <Segmented raised>
          <SegmentedButton
            active={progress === 0.1}
            onClick={() => setProgress(0.1)}
          >
            10%
          </SegmentedButton>
          <SegmentedButton
            active={progress === 0.3}
            onClick={() => setProgress(0.3)}
          >
            30%
          </SegmentedButton>
          <SegmentedButton
            active={progress === 0.5}
            onClick={() => setProgress(0.5)}
          >
            50%
          </SegmentedButton>
          <SegmentedButton
            active={progress === 1.0}
            onClick={() => setProgress(1.0)}
          >
            100%
          </SegmentedButton>
        </Segmented>
      </Block>

      <BlockTitle>Colors</BlockTitle>
      <Block strong className="space-y-4">
        <Progressbar colors={{ bg: 'bg-red-500' }} progress={0.25} />
        <Progressbar colors={{ bg: 'bg-green-500' }} progress={0.5} />
        <Progressbar colors={{ bg: 'bg-blue-500' }} progress={0.75} />
        <Progressbar colors={{ bg: 'bg-yellow-500' }} progress={1} />
      </Block>
    </Page>
  );
}
ProgressbarPage.displayName = 'ProgressbarPage';
