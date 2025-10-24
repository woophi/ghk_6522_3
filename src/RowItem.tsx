import { Amount, CurrencyCodes } from '@alfalab/core-components/amount';
import { Typography } from '@alfalab/core-components/typography';
import { appSt } from './style.css';
import { StockItem } from './types';

type Props = {
  imgUrl: string;
  stockItem?: StockItem;
  name: string;
};

export const RowItem = (props: Props) => {
  const { imgUrl, stockItem, name } = props;

  return (
    <div className={appSt.banner}>
      <img src={imgUrl} width={48} height={48} className={appSt.bannerImg} alt={name} />

      <div className={appSt.rowText}>
        <Typography.Text view="component-primary">{name}</Typography.Text>
      </div>

      {stockItem && (
        <div className={appSt.rowText} style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
          <Amount
            value={stockItem.price_today * 100}
            minority={100}
            currency="RUB"
            view="withZeroMinorPart"
            transparentMinor={false}
          />
          <Typography.Text view="primary-small" color={Number(stockItem.delta) < 0 ? 'negative' : 'positive'}>
            <Amount
              value={Number(stockItem.delta) * 100}
              minority={100}
              currency={'%' as CurrencyCodes}
              view="withZeroMinorPart"
              transparentMinor={false}
              showPlus
            />
          </Typography.Text>
        </div>
      )}
    </div>
  );
};
