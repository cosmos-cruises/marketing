import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { Heading } from '@showoff/design.typography.heading';
import { Typography } from '@showoff/design.typography.typography';
import { Picture } from '@showoff/personal-portfolio.ui.person.picture';
import { Box, Theme, useMediaQuery, Grid } from '@mui/material';

export type HomepageProps = {
  profile: {
    name: string;
    bio: string;
    tagline: string;
    imageUrl: string;
  };
  /**
   * Projects to use for the showcase
   * @default sampleProjects from @showoff/personal-portfolio.entities.project
   */
};

export function Homepage({ profile }: HomepageProps) {
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
        />
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
