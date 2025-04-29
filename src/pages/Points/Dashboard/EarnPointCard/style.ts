import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    card: css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid oklch(1 0 0 / 0.1);
      background-color: transparent;
      border-radius: ${theme.spacing(4)}; /* Mimics shadcn card */
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1); /* Matches hover:bg-black/10 */
      }
    `,
    cardHeader: css`
      padding: ${theme.spacing(2)};
    `,
    cardTitle: css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: ${theme.spacing(1.5)};
      font-size: 16px;
      line-height: 16px;
      font-weight: 600;
      color: ${theme.palette.text.primary};
    `,
    cardContent: css`
      padding: ${theme.spacing(2)};
      padding-top: 0;
    `,
    contentText: css`
      color: #8c8c8c; /* Replace with text-main-100 color */
      font-size: 14px;
    `,
    cardFooter: css`
      display: flex;
      justify-content: space-between;
      padding: ${theme.spacing(2)};
    `,
  };
};
