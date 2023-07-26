import React from 'react';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Heading } from '@showoff/design.typography.heading';
import { Typography } from '@showoff/design.typography.typography';
import { Picture } from '@showoff/personal-portfolio.ui.person.picture';
import { Icons } from '@showoff/personal-portfolio.ui.social.icons';
import { Box, Theme, useMediaQuery, Grid } from '@mui/material';

type PersonReachSectionProps = {
  socialLinks: {
    name: 'twitter' | 'github' | 'linkedin' | 'website';
    url: string;
  }[];
} & React.HTMLAttributes<HTMLElement>;

const PersonReachSection = ({
  socialLinks,
  ...rest
}: PersonReachSectionProps) => (
  <section {...rest}>
    <Margin mt={MarginType.MEDIUM}>
      <LinkText
        linkText="Book a flight today"
        url="/booking"
        color="primary"
        fontWeight={400}
        fontSize={22}
        iconSize="small"
      />
    </Margin>
    <Margin mt={MarginType.LARGE}>
      <Heading
        sx={{
          lineHeight: 1.5,
          display: 'inline',
          color: (theme) => theme.palette.primary.main,
        }}
        value="Once a Martian, always a Martian"
        fontSize={22}
        fontWeight={400}
      />
      <Typography fontSize={14}>
        Connect with us on social media to stay up to date with our latest news
      </Typography>
      <Icons links={socialLinks} />
    </Margin>
  </section>
);

export type HomepageProps = {
  profile: {
    name: string;
    bio: string;
    tagline: string;
    imageUrl: string;
  };
  socialLinks: {
    name: 'twitter' | 'github' | 'linkedin' | 'website';
    url: string;
  }[];
  /**
   * Projects to use for the showcase
   * @default sampleProjects from @showoff/personal-portfolio.entities.project
   */
};

export function Homepage({ profile, socialLinks }: HomepageProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={6}>
        <Box sx={{ width: '100%' }}>
          <Typography
            fontWeight={700}
            fontSize={28}
            {...(mdDown && {
              textAlign: 'center',
            })}
          >
            {profile.name}
          </Typography>
          <Margin
            mt={MarginType.SMALL}
            {...(mdDown && {
              style: {
                textAlign: 'center',
              },
            })}
          >
            <Heading
              sx={{
                color: (theme) => theme.palette.primary.main,
                display: 'inline',
                lineHeight: '104px',
              }}
              fontSize={80}
              fontWeight={900}
              value={profile.tagline}
            />
          </Margin>
          <Margin mt={MarginType.MEDIUM}>
            <Typography
              {...(mdDown && {
                textAlign: 'center',
              })}
              sx={{
                fontSize: '22px',
                fontWeight: '400',
                lineHeight: '32px',
              }}
            >
              {profile.bio}
            </Typography>
            {!mdDown && <PersonReachSection socialLinks={socialLinks} />}
          </Margin>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Picture pictureUrl={profile.imageUrl} />
      </Grid>
      {mdDown && (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PersonReachSection socialLinks={socialLinks} />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Grid>
  );
}
