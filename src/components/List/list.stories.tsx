import List, { ListItemType } from '.'
import ListIcon from './ListIcon'

const items: ListItemType[] = [
  {
    // label: 'Assets',
    label: 'ウォレット残高',
    icon: <ListIcon type="assets" />,
    href: '#',
    subItems: [
      {
        icon: <ListIcon type="assets" />,
        // label: 'Coins',
        label: '暗号資産',
        href: '#',
      },
      {
        icon: <ListIcon type="collectibles" />,
        selected: true,
        // label: 'Collectives',
        label: 'コレクタブル',
        href: '#',
      },
    ],
  },
  {
    // label: 'Transactions',
    label: 'トランザクション',
    icon: <ListIcon type="transactionsInactive" />,
    href: '#',
  },
]

export default {
  title: 'Data Display/List',
  component: List,
}

export const SimpleList = (): React.ReactElement => <List items={items} />
