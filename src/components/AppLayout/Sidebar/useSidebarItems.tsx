import { useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import { getCurrentShortChainName, isFeatureEnabled } from 'src/config'
import { ListItemType } from 'src/components/List'
import ListIcon from 'src/components/List/ListIcon'
import { FEATURES } from 'src/config/networks/network.d'
import { currentSafeFeaturesEnabled, currentSafeWithNames } from 'src/logic/safe/store/selectors'
import { grantedSelector } from 'src/routes/safe/container/selector'
import {
  extractSafeAddress,
  ADDRESSED_ROUTE,
  SAFE_SUBSECTION_ROUTE,
  generatePrefixedAddressRoutes,
} from 'src/routes/routes'
import { IS_PRODUCTION } from 'src/utils/constants'

const useSidebarItems = (): ListItemType[] => {
  const featuresEnabled = useSelector(currentSafeFeaturesEnabled)
  const safeAppsEnabled = isFeatureEnabled(FEATURES.SAFE_APPS)
  const isCollectiblesEnabled = isFeatureEnabled(FEATURES.ERC721)
  const isSpendingLimitEnabled = isFeatureEnabled(FEATURES.SPENDING_LIMIT)
  const { needsUpdate } = useSelector(currentSafeWithNames)
  const safeAddress = extractSafeAddress()
  const granted = useSelector(grantedSelector)

  const matchSafe = useRouteMatch(ADDRESSED_ROUTE)

  // Question mark makes matching [SAFE_SUBSECTION_SLUG] optional
  const matchSafeWithSidebarSection = useRouteMatch(`${SAFE_SUBSECTION_ROUTE}?`)

  const makeEntryItem = useCallback(
    ({ label, disabled, badge, iconType, href, subItems }) => ({
      label,
      badge,
      disabled,
      icon: <ListIcon type={iconType} />,
      selected: href === matchSafeWithSidebarSection?.url,
      href,
      subItems,
    }),
    [matchSafeWithSidebarSection],
  )

  return useMemo((): ListItemType[] => {
    if (!matchSafe || !matchSafeWithSidebarSection || !featuresEnabled || !safeAddress) {
      return []
    }

    const currentSafeRoutes = generatePrefixedAddressRoutes({
      shortName: getCurrentShortChainName(),
      safeAddress,
    })

    const assetsSubItems = [
      makeEntryItem({
        // label: 'Coins',
        label: '暗号資産',
        iconType: 'assets',
        href: currentSafeRoutes.ASSETS_BALANCES,
      }),
      // makeEntryItem({
      //   disabled: !isCollectiblesEnabled,
      //   label: 'Collectibles',
      //   label: 'コレクタブル',
      //   iconType: 'collectibles',
      //   href: currentSafeRoutes.ASSETS_BALANCES_COLLECTIBLES,
      // }),
    ]

    const settingsSubItems = [
      makeEntryItem({
        // label: 'Safe Details',
        label: 'ウォレット情報',
        badge: needsUpdate && granted,
        iconType: 'info',
        href: currentSafeRoutes.SETTINGS_DETAILS,
      }),
      IS_PRODUCTION
        ? null
        // : makeEntryItem({
        //     label: 'Appearance',
        //     iconType: 'eye',
        //     href: currentSafeRoutes.SETTINGS_APPEARANCE,
        //   }),
      : makeEntryItem({
        // label: 'Owners',
        label: 'オーナー',
        iconType: 'owners',
        href: currentSafeRoutes.SETTINGS_OWNERS,
      }),
      makeEntryItem({
        // label: 'Policies',
        label: 'ルール',
        iconType: 'requiredConfirmations',
        href: currentSafeRoutes.SETTINGS_POLICIES,
      }),
      makeEntryItem({
        disabled: !isSpendingLimitEnabled,
        // label: 'Spending Limit',
        label: '権限設定',
        iconType: 'fuelIndicator',
        href: currentSafeRoutes.SETTINGS_SPENDING_LIMIT,
      }),
      makeEntryItem({
        // label: 'Advanced',
        label: 'Nonce設定',
        iconType: 'settingsTool',
        href: currentSafeRoutes.SETTINGS_ADVANCED,
      }),
    ].filter(Boolean)

    return [
      makeEntryItem({
        // label: 'ASSETS',
        label: 'ウォレット残高',
        iconType: 'assets',
        href: currentSafeRoutes.ASSETS_BALANCES,
        subItems: assetsSubItems,
      }),
      makeEntryItem({
        // label: 'TRANSACTIONS',
        label: 'トランザクション',
        iconType: 'transactionsInactive',
        href: currentSafeRoutes.TRANSACTIONS_HISTORY,
      }),
      makeEntryItem({
        // label: 'ADDRESS BOOK',
        label: 'アドレス帳',
        iconType: 'addressBook',
        href: currentSafeRoutes.ADDRESS_BOOK,
      }),
      // makeEntryItem({
      //   disabled: !safeAppsEnabled,
      //   label: 'Apps',
      //   iconType: 'apps',
      //   href: currentSafeRoutes.APPS,
      // }),
      makeEntryItem({
        // label: 'Settings',
        label: '設定',
        iconType: 'settings',
        href: currentSafeRoutes.SETTINGS_DETAILS,
        subItems: settingsSubItems,
      }),
    ]
  }, [
    featuresEnabled,
    granted,
    isCollectiblesEnabled,
    isSpendingLimitEnabled,
    makeEntryItem,
    matchSafe,
    matchSafeWithSidebarSection,
    needsUpdate,
    safeAddress,
    safeAppsEnabled,
  ])
}

export { useSidebarItems }
