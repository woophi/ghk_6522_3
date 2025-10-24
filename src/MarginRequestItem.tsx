import { Button } from '@alfalab/core-components/button';
import { ExpandableText } from './expandable/ExpandableText';
import { RowItem } from './RowItem';
import { StockItem } from './types';

type Props = {
  stockItem: StockItem;
  onClick: (s: StockItem) => void;
};

export const MarginRequestItem = ({ stockItem, onClick }: Props) => {
  return (
    <>
      <RowItem imgUrl={stockItem.img} name={stockItem.name} stockItem={stockItem} />

      <ExpandableText lines={3} view="primary-medium" style={{ marginTop: '1rem' }}>
        {stockItem.description}
      </ExpandableText>

      <Button style={{ marginBottom: '1rem' }} block={true} view="secondary" onClick={() => onClick(stockItem)}>
        Купить
      </Button>
    </>
  );
};
