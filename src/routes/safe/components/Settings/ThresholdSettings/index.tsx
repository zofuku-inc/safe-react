import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Modal from 'src/components/Modal'
import Block from 'src/components/layout/Block'
import Bold from 'src/components/layout/Bold'
import Button from 'src/components/layout/Button'
import Heading from 'src/components/layout/Heading'
import Paragraph from 'src/components/layout/Paragraph'
import Row from 'src/components/layout/Row'
import { grantedSelector } from 'src/routes/safe/container/selector'
import { currentSafe } from 'src/logic/safe/store/selectors'
import { useAnalytics, SETTINGS_EVENTS } from 'src/utils/googleAnalytics'

import { ChangeThresholdModal } from './ChangeThreshold'
import { styles } from './style'

const useStyles = makeStyles(styles)

const ThresholdSettings = (): React.ReactElement => {
  const classes = useStyles()
  const [isModalOpen, setModalOpen] = useState(false)
  const { address: safeAddress = '', owners, threshold = 1 } = useSelector(currentSafe) ?? {}
  const granted = useSelector(grantedSelector)

  const toggleModal = () => {
    setModalOpen((prevOpen) => !prevOpen)
  }

  const { trackEvent } = useAnalytics()

  useEffect(() => {
    trackEvent(SETTINGS_EVENTS.OWNERS)
  }, [trackEvent])

  return (
    <>
      <Block className={classes.container}>
        {/* <Heading tag="h2">Required Confirmations</Heading> */}
        <Heading tag="h2">必要な承認数</Heading>
        {/* <Paragraph>Any transaction requires the confirmation of:</Paragraph> */}
        <Paragraph>トランザクションに必要な承認数:</Paragraph>
        <Paragraph className={classes.ownersText} size="lg">
          {/* <Bold>{threshold}</Bold> out of <Bold>{owners?.length || 0}</Bold> owners */}
          <Bold>{threshold}</Bold> 人の承認 / <Bold>{owners?.length || 0}</Bold> オーナー
        </Paragraph>
        {owners && owners.length > 1 && granted && (
          <Row className={classes.buttonRow}>
            <Button
              className={classes.modifyBtn}
              color="primary"
              minWidth={120}
              onClick={toggleModal}
              variant="contained"
            >
              変更する
              {/* Change */}
            </Button>
          </Row>
        )}
      </Block>
      <Modal
        // description="Change Required Confirmations Form"
        description="必要承認数の変更フォーム"
        handleClose={toggleModal}
        open={isModalOpen}
        // title="Change Required Confirmations"
        title="承認数を変更する"
      >
        <ChangeThresholdModal
          onClose={toggleModal}
          ownersCount={owners?.length}
          safeAddress={safeAddress}
          threshold={threshold}
        />
      </Modal>
    </>
  )
}

export default ThresholdSettings
