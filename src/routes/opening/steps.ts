import { ContinueFooter, GenericFooter } from './components/Footer'

export const isConfirmationStep = (stepIndex?: number): boolean => stepIndex === 0

export const steps = [
  {
    id: '1',
    label: 'トランザクションの確認待ち',
    // label: 'Waiting for transaction confirmation',
    description: undefined,
    instruction: 'お客様のウォレット（Metamaskなど）で"確認"してください。',
    // instruction: 'Please confirm the Multisig wallet creation in your wallet',
    footerComponent: null,
  },
  {
    id: '2',
    label: 'トランザクションを送信',
    // label: 'Transaction submitted',
    description: undefined,
    instruction: 'ページを離れないでください。',
    // instruction: 'Please do not leave the page',
    footerComponent: GenericFooter,
  },
  {
    id: '3',
    label: 'トランザクションの承認',
    // label: 'Validating transaction',
    description: undefined,
    instruction: 'ページを離れないでください。',
    // instruction: 'Please do not leave the page',
    footerComponent: GenericFooter,
  },
  {
    id: '4',
    label: 'スマートコントラクトをデプロイ',
    // label: 'Deploying smart contract',
    description: undefined,
    instruction: 'ページを離れないでください。',
    // instruction: 'Please do not leave the page',
    footerComponent: GenericFooter,
  },
  {
    id: '5',
    label: 'マルチシグウォレットを生成',
    // label: 'Generating your Safe',
    description: undefined,
    instruction: 'ページを離れないでください。',
    // instruction: 'Please do not leave the page',
    footerComponent: GenericFooter,
  },
  {
    id: '6',
    label: '成功',
    // label: 'Success',
    description: 'マルチシグウォレットの作成完了です。',
    // description: 'Your Multisig wallet was created successfully',
    instruction: undefined,
    footerComponent: ContinueFooter,
  },
]
