import { Icon } from '@gnosis.pm/safe-react-components'
import { ListItemType } from 'src/components/List'
import Layout from '.'

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    componentSubtitle: 'It provides a custom layout used in Safe',
  },
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
        label: 'Nonce設定',
        href: '#',
      },
    ],
  },
]

export const Base = (): React.ReactElement => {
  return (
    <Layout
      sidebarItems={items}
      safeAddress="0xEE63624cC4Dd2355B16b35eFaadF3F7450A9438B"
      safeName="someName"
      granted={true}
      balance={undefined}
      onToggleSafeList={() => console.log}
      onReceiveClick={() => console.log}
      onNewTransactionClick={() => console.log}
    >
      <div>The content goes here</div>
    </Layout>
  )
}
