import { FETCH_STATUS } from 'src/utils/requests'
import { getEmptySafeApp } from '../../utils'
import { AppCard, AddCustomAppCard } from './index'

export default {
  title: 'Apps/AppCard',
  component: AppCard,
}

export const Loading = (): React.ReactElement => <AppCard to="" app={getEmptySafeApp()} />

export const AddCustomApp = (): React.ReactElement => <AddCustomAppCard onClick={(): void => {}} />

export const LoadedApp = (): React.ReactElement => (
  <AppCard
    to=""
    app={{
      id: '228',
      url: '',
      name: '',
      iconUrl: '',
      description: '',
      fetchStatus: FETCH_STATUS.SUCCESS,
    }}
  />
)
