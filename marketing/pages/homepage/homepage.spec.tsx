import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleHomepage } from './homepage.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(
    <MUIPreviewContext>
      <SampleHomepage />
    </MUIPreviewContext>
  );
  const rendered = getByText('John Doe');
  expect(rendered).toBeTruthy();
});
