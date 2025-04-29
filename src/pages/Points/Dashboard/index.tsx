/** @jsxImportSource @emotion/react */
import { Chip, Typography } from '@mui/material';
import { AnchorButton, SecondaryButton } from 'components';
import React from 'react';
import { Trans } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

import EarnPointCard, { EarnPointCardProps } from './EarnPointCard/index';
import { useStyles } from './styles';

const PointDashboard: React.FC = () => {
  const styles = useStyles();

  const EarnPointList: Array<EarnPointCardProps> = [
    {
      title: 'Passive Points',
      tags: <Chip key={1} label="PP" css={styles.badgePP} />,
      content: 'Earn points by simply holding whitelisted assets.',
      button: <AnchorButton css={styles.button}>Explore assets</AnchorButton>,
    },
    {
      title: 'Activity Points',
      tags: <Chip key={1} label="AP" css={styles.badgeAP} />,
      content: 'Earn points by deploying your whitelisted assets.',
      button: <AnchorButton css={styles.button}>Explore apps</AnchorButton>,
    },
    {
      title: 'App Points',
      tags: <Chip key={1} label="GEMS" css={styles.badgeGEMS} />,
      content: 'Earn further airdrop allocation from participating apps.',
      button: <AnchorButton css={styles.button}>Learn more</AnchorButton>,
    },
  ];

  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <Typography css={styles.pageTitle} variant="h1">
          Onyx Points
        </Typography>
        <Typography css={styles.pageSubtitle} variant="inherit">
          Track your points and see how you rank against other users
        </Typography>
        <Link to="https://bridge.onyx.org">
          <SecondaryButton variant="secondaryConnectWallet">Bridge</SecondaryButton>
        </Link>
      </div>
      <div css={styles.gradientContainer}>
        <div css={styles.innerContainer}>
          <div css={styles.contentBox}>
            <div css={styles.headerSection}>
              <Typography css={styles.title} variant="h2">
                How to Earn Points
              </Typography>
              <Typography variant="small2" color="textPrimary">
                <Trans
                  i18nKey="point.learnMore"
                  components={{
                    Anchor: <NavLink to="/#" css={styles.link} />,
                  }}
                />
              </Typography>
            </div>
            <div css={styles.gridContainer}>
              {EarnPointList.map(card => (
                <EarnPointCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointDashboard;
