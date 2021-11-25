import Sidebar from './index'
import { ListItemType } from 'src/components/List'
import { Icon } from '@gnosis.pm/safe-react-components'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
}

const items: ListItemType[] = [
  {
    // label: 'Assets',
    label: 'ウォレット残高',
    icon: <Icon size="md" type="assets" />,
    href: '#',
  },
  {
    // label: 'Settings',
    label: '設定',
    icon: <Icon size="md" type="settings" />,
    href: '#',
    subItems: [
      {
        // label: 'Safe Details',
        label: 'ウォレット情報',
        href: '#',
      },
      {
        // label: 'Owners',
        label: 'オーナー',
        href: '#',
      },
      {
        // label: 'Policies',
        label: 'ルール',
        href: '#',
      },
      {
        // label: 'Advanced',
        label: ' Nonce設定',
        href: '#',
      },
    ],
  },
]

export const Base = (): React.ReactElement => (
  <Sidebar
    items={items}
    balance="111"
    safeAddress="0xEE63624cC4Dd2355B16b35eFaadF3F7450A9438B"
    safeName="someName"
    granted={true}
    onReceiveClick={console.log}
    onNewTransactionClick={console.log}
    onToggleSafeList={() => console.log}
  />
)
