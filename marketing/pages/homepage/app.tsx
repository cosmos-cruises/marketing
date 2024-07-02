import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  SettingsProvider,
  SettingsConsumer,
} from '@cosmo-cruises/forever-mars.contexts.settings-context';
import { Main } from '@cosmo-cruises/forever-mars.layouts.main';
import { Homepage } from './homepage';
import { ThemeProvider } from '@cosmo-cruises/design.themes.theme-provider';
import {
  SITE_FOOTER_META,
  SITE_HEADER_LINKS,
  ORG_PROFILE,
} from '@cosmo-cruises/marketing.constants.data';
import { darkMarsTheme, lightMarsTheme } from './themes';

export function ForeverMarsApp() {
  const dark = useMemo(() => darkMarsTheme(), []);
  const light = useMemo(() => lightMarsTheme(), []);

  return (
    <>
      <Helmet>
        <title>
          Forever Mars - Your Path to Reaching Mars. And Staying There.
        </title>
      </Helmet>
      <SettingsProvider>
        <SettingsConsumer>
          {({ theme }) => (
            <ThemeProvider theme={theme === 'dark' ? dark : light}>
              <Main
                footerProps={SITE_FOOTER_META}
                headerProps={SITE_HEADER_LINKS}
              >
                <Routes>
                  <Route
                    path="/"
                    element={<Homepage profile={ORG_PROFILE} />}
                  />
                </Routes>
              </Main>
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}
