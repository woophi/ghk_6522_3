import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '14px 24px',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const banner = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

const columnText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const bannerImg = style({
  borderRadius: '1rem',
  overflow: 'hidden',
});

const bannerAccount = style({
  padding: '8px 12px',
  backgroundColor: '#F3F4F5',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '6px',
});

const rowSmall = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'space-between',
});

const btmContent = style({
  padding: 0,
});

export const bsSt = {
  bottomBtn,
  container,
  banner,
  columnText,
  bannerImg,
  bannerAccount,
  rowSmall,
  row,
  btmContent,
};
