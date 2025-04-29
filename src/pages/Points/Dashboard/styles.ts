import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    root: css`
      align-items:center;
      justify-content:center;
      gap:4;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 100%;
    `,
    gradientContainer: css`
      position: relative;
      width: 100%;
      border-radius: ${theme.spacing(4)};
      background-image: linear-gradient(90deg, #214e81, #506179, #ed5409, #ffcb67, #ffcb67, #ed5409, #506179, #214e81);
      margin-top: ${theme.spacing(2)};
      overflow: hidden;

      &:before {
        content: '';
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
      }

      ${theme.breakpoints.up('lg')} {
        max-width: 75%;
      }
      ${theme.breakpoints.up('xl')} {
        max-width: 66.67%;
      }
    `,
    innerContainer: css`
      z-index: 2;
      width: 100%;
      height: 100%;
      flex: 1;
      border-radius: ${theme.spacing(4)};
      padding: ${theme.spacing(0.5)};
    `,
    header: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `,
    pageTitle: css`
      font-size: 40px;
      line-height: 40px;
      font-weight: 700;
    `,
    pageSubtitle: css`
      font-size: px;
    `,
    contentBox: css`
      background-color: #1f242c;
      z-index: 2;
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(4)};
      border-radius: ${theme.spacing(4)};
      padding: ${theme.spacing(4, 6)};
    `,
    headerSection: css`
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${theme.spacing(1.5)};
    `,
    title: css`
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
    `,
    textLink: css`
      color: #3b82f6; /* Replace with text-button-main */
      font-size: ${theme.typography.fontSize}px;
      font-weight: 600;

      & svg {
        width: ${theme.spacing(2)};
        height: ${theme.spacing(2)};
      }
    `,
    gridContainer: css`
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr;
      gap: ${theme.spacing(4)};

      ${theme.breakpoints.up('md')} {
        grid-template-columns: 1fr 1fr;
      }
      ${theme.breakpoints.up('xl')} {
        grid-template-columns: 1fr 1fr 1fr;
      }
    `,
    badgePP: css`
      border: 1px solid #bd6eac; /* Original border color */
      background-color: #bd6eac29; /* Original background color with opacity */
      border-radius: ${theme.spacing(4)}; /* Mimics shadcn badge */
      padding: ${theme.spacing(0.5, 2)};
      font-size: ${theme.typography.caption.fontSize};
      font-weight: 500;
      color: ${theme.palette.text.primary};
      height: fit-content;

      & .MuiChip-label {
        padding: 0!important;
      }
    `,
    badgeAP: css`
      border: 1px solid #6ebd70; /* Original border color */
      background-color: #6ebd7029; /* Original background color with opacity */
      border-radius: ${theme.spacing(4)};
      padding: ${theme.spacing(0.5, 2)};
      font-size: ${theme.typography.caption.fontSize};
      font-weight: 500;
      color: ${theme.palette.text.primary};
      height: fit-content;

      & .MuiChip-label {
        padding: 0!important;
      }
    `,
    badgeGEMS: css`
      border: 1px solid #6ebd70; /* Original border color */
      background-color: #00c29529; /* Original background color with opacity */
      border-radius: ${theme.spacing(4)};
      padding: ${theme.spacing(0.5, 2)};
      font-size: ${theme.typography.caption.fontSize};
      font-weight: 500;
      color: ${theme.palette.text.primary};
      height: fit-content;

      & .MuiChip-label {
        padding: 0!important;
      }
    `,
    button: css`
      width: 100%;
    `,
    link: css`
      color: ${theme.palette.button.main};

      :hover {
        color: ${theme.palette.button.medium};
      }

      :active {
        color: ${theme.palette.button.dark};
      }
    `,
  };
};
