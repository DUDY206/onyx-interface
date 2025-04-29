/** @jsxImportSource @emotion/react */
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './style';

export interface EarnPointCardProps {
  title: string;
  tags: React.ReactNode;
  content: string;
  button: React.ReactNode;
}
const EarnPointCard: React.FC<EarnPointCardProps> = ({ title, tags, content, button }) => {
  const styles = useStyles();

  return (
    <Card css={styles.card}>
      <CardHeader
        css={styles.cardHeader}
        title={
          <Typography css={styles.cardTitle} component="div">
            {title}
            {tags}
          </Typography>
        }
      />
      <CardContent css={styles.cardContent}>
        <Typography css={styles.contentText}>{content}</Typography>
      </CardContent>
      <CardActions css={styles.cardFooter}>{button}</CardActions>
    </Card>
  );
};

export default EarnPointCard;
