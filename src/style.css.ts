import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const topBanner = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f3eaeb',
  width: '100%',
});

const banner = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  marginTop: '12px',
});

const rowText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const bannerImg = style({
  borderRadius: '1rem',
  overflow: 'hidden',
});

export const appSt = {
  container,
  topBanner,
  banner,
  rowText,
  bannerImg,
  bottomBtn,
};
