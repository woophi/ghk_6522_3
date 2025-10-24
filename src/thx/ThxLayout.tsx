import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';
import sparkles from '../assets/sparkles.png';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = ({ link }: { link: string }) => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={sparkles} width={80} height={80} className={thxSt.rocket} />
        <Typography.TitleResponsive style={{ margin: '24px 0 12px' }} font="system" tag="h1" view="small" weight="medium">
          Не удалось выставить заявку
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Попробуй еще раз
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="secondary" href={link}>
          Попробовать еще раз
        </ButtonMobile>
      </div>
    </>
  );
};
