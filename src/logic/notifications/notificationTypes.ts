import { OptionsObject } from 'notistack'

export const SUCCESS = 'success'
export const ERROR = 'error'
export const WARNING = 'warning'
export const INFO = 'info'

const shortDuration = 5000
const longDuration = 10000

export type NotificationId = keyof typeof NOTIFICATION_IDS

export type Notification = {
  message: string
  options: OptionsObject
  key?: string
  dismissed?: boolean
}

enum NOTIFICATION_IDS {
  UNLOCK_WALLET_MSG,
  CONNECT_WALLET_ERROR_MSG,
  CREATE_SAFE_FAILED_MSG,
  SIGN_TX_MSG,
  TX_REJECTED_MSG,
  TX_EXECUTED_MSG,
  TX_CANCELLATION_EXECUTED_MSG,
  TX_FAILED_MSG,
  TX_PENDING_MSG,
  TX_WAITING_MSG,
  TX_CONFIRMATION_EXECUTED_MSG,
  TX_CONFIRMATION_FAILED_MSG,
  TX_FETCH_SIGNATURES_ERROR_MSG,
  SAFE_APPS_FETCH_ERROR_MSG,
  SAFE_NAME_CHANGED_MSG,
  OWNER_NAME_CHANGE_EXECUTED_MSG,
  SIGN_SETTINGS_CHANGE_MSG,
  SETTINGS_CHANGE_REJECTED_MSG,
  SETTINGS_CHANGE_EXECUTED_MSG,
  SETTINGS_CHANGE_EXECUTED_MORE_CONFIRMATIONS_MSG,
  SETTINGS_CHANGE_FAILED_MSG,
  SIGN_NEW_SPENDING_LIMIT_MSG,
  NEW_SPENDING_LIMIT_REJECTED_MSG,
  NEW_SPENDING_LIMIT_EXECUTED_MSG,
  NEW_SPENDING_LIMIT_EXECUTED_MORE_CONFIRMATIONS_MSG,
  NEW_SPENDING_LIMIT_FAILED_MSG,
  SIGN_REMOVE_SPENDING_LIMIT_MSG,
  REMOVE_SPENDING_LIMIT_REJECTED_MSG,
  REMOVE_SPENDING_LIMIT_EXECUTED_MSG,
  REMOVE_SPENDING_LIMIT_EXECUTED_MORE_CONFIRMATIONS_MSG,
  REMOVE_SPENDING_LIMIT_FAILED_MSG,
  ADDRESS_BOOK_NEW_ENTRY_SUCCESS,
  ADDRESS_BOOK_EDIT_ENTRY_SUCCESS,
  ADDRESS_BOOK_IMPORT_ENTRIES_SUCCESS,
  ADDRESS_BOOK_DELETE_ENTRY_SUCCESS,
  ADDRESS_BOOK_EXPORT_ENTRIES_SUCCESS,
  ADDRESS_BOOK_EXPORT_ENTRIES_ERROR,
  SAFE_NEW_VERSION_AVAILABLE,
}

export const NOTIFICATIONS: Record<NotificationId, Notification> = {
  // Wallet Connection
  UNLOCK_WALLET_MSG: {
    // message: 'Unlock your wallet to connect',
    message: 'ウォレットのロックを解除してください',
    options: { variant: WARNING, persist: true, preventDuplicate: true },
  },
  CONNECT_WALLET_ERROR_MSG: {
    // message: 'Error connecting to your wallet',
    message: 'お客様のウォレットとの接続エラー',
    options: { variant: ERROR, persist: true },
  },
  // Safe creation
  CREATE_SAFE_FAILED_MSG: {
    message: 'マルチシグウォレットの作成失敗',
    // message: 'Safe creation failed',
    options: { variant: ERROR, persist: false, autoHideDuration: longDuration },
  },
  // Regular/Custom Transactions
  SIGN_TX_MSG: {
    // message: 'Please sign the transaction',
    message: 'トランザクションにサインしてください',
    options: { variant: INFO, persist: true },
  },
  TX_REJECTED_MSG: {
    // message: 'Transaction rejected',
    message: 'トランザクションが拒否されました',
    options: { variant: ERROR, persist: false, autoHideDuration: shortDuration },
  },
  TX_EXECUTED_MSG: {
    // message: 'Transaction successfully executed',
    message: 'トランザクションが成功しました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: shortDuration },
  },
  TX_CANCELLATION_EXECUTED_MSG: {
    // message: 'Rejection successfully submitted',
    message: '拒否しました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: shortDuration },
  },
  TX_FAILED_MSG: {
    // message: 'Transaction failed',
    message: 'トランザクション失敗',
    options: { variant: ERROR, persist: false, autoHideDuration: shortDuration },
  },
  TX_PENDING_MSG: {
    // message: 'Transaction still pending. Consider resubmitting with a higher gas price.',
    message: 'トランザクション処理中。ガス代を高めに設定し再送信すると処理が早くなります。',
    options: { variant: ERROR, persist: true, autoHideDuration: shortDuration },
  },
  TX_WAITING_MSG: {
    // message: 'A transaction requires your confirmation',
    message: 'トランザクションを承認してください',
    key: 'TX_WAITING_MSG',
    options: {
      variant: WARNING,
      persist: false,
      autoHideDuration: shortDuration,
      preventDuplicate: true,
    },
  },

  TX_CONFIRMATION_EXECUTED_MSG: {
    // message: 'Confirmation transaction was successful',
    message: 'トランザクションの承認 成功',
    options: { variant: SUCCESS, persist: false, autoHideDuration: shortDuration },
  },
  TX_CONFIRMATION_FAILED_MSG: {
    // message: 'Confirmation transaction failed',
    message: 'トランザクション承認 失敗',
    options: { variant: ERROR, persist: false, autoHideDuration: shortDuration },
  },

  TX_FETCH_SIGNATURES_ERROR_MSG: {
    // message: 'Couldn’t fetch all signatures for this transaction. Please reload page and try again',
    message: 'このトランザクションの全てのサインが得られませんでした。もう一度、リロードしてください。',
    options: { variant: ERROR, persist: true },
  },
  SAFE_APPS_FETCH_ERROR_MSG: {
    // message: 'Error fetching the Safe Apps, please refresh the page',
    message: 'ウォレットの読み込みに失敗しました。ページを更新してください。',
    options: { variant: ERROR, persist: false, autoHideDuration: shortDuration },
  },
  // Safe Name
  SAFE_NAME_CHANGED_MSG: {
    // message: 'Safe name changed',
    message: 'ウォレット名が変更されました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: shortDuration },
  },

  // Owner Name
  OWNER_NAME_CHANGE_EXECUTED_MSG: {
    // message: 'Owner name changed',
    message: 'オーナー名が変更されました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: shortDuration },
  },

  // Settings
  SIGN_SETTINGS_CHANGE_MSG: {
    // message: 'Please sign the settings change',
    message: 'サインの設定を変更してください',
    options: { variant: INFO, persist: true },
  },
  SETTINGS_CHANGE_REJECTED_MSG: {
    // message: 'Settings change rejected',
    message: '設定の変更ができませんでした',
    options: { variant: ERROR, persist: false, autoHideDuration: shortDuration },
  },
  SETTINGS_CHANGE_EXECUTED_MSG: {
    // message: 'Settings change successfully executed',
    message: '設定が変更されました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: shortDuration },
  },
  SETTINGS_CHANGE_EXECUTED_MORE_CONFIRMATIONS_MSG: {
    // message: 'Settings change successfully created. More confirmations needed to execute',
    message: '設定の変更を受付ました。変更完了には、承認が必要です。',
    options: { variant: SUCCESS, persist: false, autoHideDuration: longDuration },
  },
  SETTINGS_CHANGE_FAILED_MSG: {
    // message: 'Settings change failed',
    message: '設定の変更ができませんでした',
    options: { variant: ERROR, persist: false, autoHideDuration: shortDuration },
  },

  // Spending limit
  SIGN_NEW_SPENDING_LIMIT_MSG: {
    // message: 'Please sign the new spending limit',
    message: '権限設定のサインをしてください',
    options: { variant: INFO, persist: true },
  },
  NEW_SPENDING_LIMIT_REJECTED_MSG: {
    // message: 'New spending limit rejected',
    message: '権限設定は拒否されました',
    options: { variant: ERROR, persist: false, autoHideDuration: longDuration },
  },
  NEW_SPENDING_LIMIT_EXECUTED_MSG: {
    // message: 'New spending limit successfully executed',
    message: '新しい権限設定が完了しました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: longDuration },
  },
  NEW_SPENDING_LIMIT_EXECUTED_MORE_CONFIRMATIONS_MSG: {
    // message: 'New spending limit successfully created. More confirmations needed to execute',
    message: '新しい権限設定が作成されました。完了するには承認が必要です。',
    options: { variant: SUCCESS, persist: false, autoHideDuration: longDuration },
  },
  NEW_SPENDING_LIMIT_FAILED_MSG: {
    // message: 'New spending limit failed',
    message: '権限の設定に失敗しました',
    options: { variant: ERROR, persist: false, autoHideDuration: longDuration },
  },
  SIGN_REMOVE_SPENDING_LIMIT_MSG: {
    // message: 'Please sign the remove Spending limit',
    message: '権限の削除のため、サインをしてください。',
    options: { variant: INFO, persist: true },
  },
  REMOVE_SPENDING_LIMIT_REJECTED_MSG: {
    // message: 'Remove spending limit rejected',
    message: '権限削除が拒否されました',
    options: { variant: ERROR, persist: false, autoHideDuration: longDuration },
  },
  REMOVE_SPENDING_LIMIT_EXECUTED_MSG: {
    // message: 'Remove spending limit successfully executed',
    message: '権限の削除が完了しました',
    options: { variant: SUCCESS, persist: false, autoHideDuration: longDuration },
  },
  REMOVE_SPENDING_LIMIT_EXECUTED_MORE_CONFIRMATIONS_MSG: {
    // message: 'Remove spending limit successfully created. More confirmations needed to execute',
    message: '権限の削除を完了するには、承認が必要です。',
    options: { variant: SUCCESS, persist: false, autoHideDuration: longDuration },
  },
  REMOVE_SPENDING_LIMIT_FAILED_MSG: {
    //  message: 'Remove spending limit failed',
    message: '権限の削除に失敗しました',
    options: { variant: ERROR, persist: false, autoHideDuration: longDuration },
  },

  // Address book
  ADDRESS_BOOK_NEW_ENTRY_SUCCESS: {
    // message: 'Entry created successfully',
    message: '新規アドレスが作成されました',
    options: { variant: SUCCESS, persist: false, preventDuplicate: false },
  },
  ADDRESS_BOOK_EDIT_ENTRY_SUCCESS: {
    // message: 'Entry saved successfully',
    message: '新規アドレスが保存されました',
    options: { variant: SUCCESS, persist: false, preventDuplicate: false },
  },
  ADDRESS_BOOK_IMPORT_ENTRIES_SUCCESS: {
    // message: 'Entries imported successfully',
    message: 'インポートに成功しました',
    options: { variant: SUCCESS, persist: false, preventDuplicate: false },
  },
  ADDRESS_BOOK_DELETE_ENTRY_SUCCESS: {
    // message: 'Entry deleted successfully',
    message: 'アドレスが削除されました',
    options: { variant: SUCCESS, persist: false, preventDuplicate: false },
  },
  ADDRESS_BOOK_EXPORT_ENTRIES_SUCCESS: {
    // message: 'Address book exported',
    message: 'アドレス帳が出力されました',
    options: { variant: SUCCESS, persist: false, preventDuplicate: false },
  },
  ADDRESS_BOOK_EXPORT_ENTRIES_ERROR: {
    // message: 'An error occurred while generating the address book CSV.',
    message: 'アドレス帳のCSVの生成エラー',
    options: { variant: ERROR, persist: false, preventDuplicate: false },
  },

  // Safe Version
  SAFE_NEW_VERSION_AVAILABLE: {
    // message: 'There is a new version available for this Safe. Update now!',
    message: '',
    options: { variant: WARNING, persist: false, preventDuplicate: true },
  },
}
