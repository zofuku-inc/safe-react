import { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-final-form'
import styled from 'styled-components'

import Block from 'src/components/layout/Block'
import { lg, secondary } from 'src/theme/variables'
import Col from 'src/components/layout/Col'
import Paragraph from 'src/components/layout/Paragraph'
import Field from 'src/components/forms/Field'
import TextField from 'src/components/forms/TextField'
import { providerNameSelector } from 'src/logic/wallets/store/selectors'
import { FIELD_CREATE_CUSTOM_SAFE_NAME, FIELD_CREATE_SUGGESTED_SAFE_NAME } from '../fields/createSafeFields'
import { useStepper } from 'src/components/Stepper/stepperContext'
import NetworkLabel from 'src/components/NetworkLabel/NetworkLabel'

export const nameNewSafeStepLabel = 'Name'

function NameNewSafeStep(): ReactElement {
  const provider = useSelector(providerNameSelector)

  const { setCurrentStep } = useStepper()

  useEffect(() => {
    if (!provider) {
      setCurrentStep(0)
    }
  }, [provider, setCurrentStep])

  const createNewSafeForm = useForm()

  const formValues = createNewSafeForm.getState().values

  return (
    <BlockWithPadding data-testid={'create-safe-name-step'}>
      <Block margin="md">
        <Paragraph color="primary" noMargin size="lg">
          複数人でマルチシグウォレットを作成しましょう！
          まずは、ウォレットに名前をつけてください。この名前はお客様だけに表示される名前です。作成したウォレットが利用できるネットワークは、<NetworkLabel />のみです。送金する際は、ネットワークの選択には注意してださい。

          {/* You are about to create a new wallet with one or more owners. First, let&apos;s give your new
          wallet a name. This name is only stored locally and will never be shared with Gnosis or any third parties. The
          new multisig wallet will ONLY be available on <NetworkLabel /> */}
        </Paragraph>
      </Block>
      <label htmlFor={FIELD_CREATE_CUSTOM_SAFE_NAME}>マルチシグウォレットの名前</label>
      <FieldContainer margin="lg">
        <Col xs={11}>
          <Field
            component={TextField}
            name={FIELD_CREATE_CUSTOM_SAFE_NAME}
            placeholder="〇〇決済用ウォレット"
            // placeholder={formValues[FIELD_CREATE_SUGGESTED_SAFE_NAME]}
            // text="Wallet Name"
            text="ウォレット名"
            type="text"
            testId="create-safe-name-field"
          />
        </Col>
      </FieldContainer>
      <Block margin="lg">
        <Paragraph color="primary" noMargin size="lg">
          次へボタンを押すことで、{' '}
          <Link href="https://zofuku.com/privacy-policy" rel="noopener noreferrer" target="_blank">
            プライバシーポリシー
          </Link>に同意したことになります。
          EthereumブロックチェーンのスマートコントラクトであるZofukuウォレットに資金が安全に保管されていることを確認できます。
          お客様が作成したウォレットの資金は、ウォレットのオーナー以外、アクセスすることはできません。
          
          {/* By continuing you consent with the{' '}
          <Link href="ht" rel="noopener noreferrer" target="_blank">
            terms of use
          </Link>{' '}
          and{' '}
          <Link href="https://zofuku.com/privacy-policy" rel="noopener noreferrer" target="_blank">
            プライバシーポリシー
          </Link>
          . Most importantly, you confirm that your funds are held securely in the Zofuku wallet, a smart contract on the
          Ethereum blockchain. These funds cannot be accessed by Gnosis at any point. */}
        </Paragraph>
      </Block>
    </BlockWithPadding>
  )
}

export default NameNewSafeStep

const BlockWithPadding = styled(Block)`
  padding: ${lg};
`

const FieldContainer = styled(Block)`
  display: flex;
  max-width: 460px;
  margin-top: 12px;
`

const Link = styled.a`
  color: ${secondary};
`
