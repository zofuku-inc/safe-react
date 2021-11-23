import { ReactElement } from 'react'
import { Button, Card, Title, Text } from '@gnosis.pm/safe-react-components'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'

import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import Link from 'src/components/layout/Link'
import { LOAD_SAFE_ROUTE, OPEN_SAFE_ROUTE } from 'src/routes/routes'

function Welcome(): ReactElement {
  return (
    <Page align="center">
      <Block>
        <Title size="md" strong>
          Welcome to Zofuk uwallet.
        </Title>
        <Title size="xs">
          Zofuku wallet is the most trusted platform to manage digital assets. <br /> Here is how to get started:
        </Title>
        <CardsContainer>
          <StyledCard>
            {/* Create Safe */}
            <CardContentContainer>
              <Title size="sm" strong withoutMargin>
                Create wallet
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">Create a new multisig wallet that is controlled by one or multiple owners.</Text>
                <Text size="xl">You will be required to pay a network fee for creating your new wallet.</Text>
              </CardDescriptionContainer>
              <Button size="lg" color="primary" variant="contained" component={Link} to={OPEN_SAFE_ROUTE}>
                <Text size="xl" color="white">
                  + Create new wallet
                </Text>
              </Button>
            </CardContentContainer>
            <Divider orientation="vertical" flexItem />
            <CardContentContainer>
              {/* Load Safe */}
              <Title size="sm" strong withoutMargin>
                Load Existing wallet
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">
                  Already have a wallet or want to access it from a different device? Easily load your wallet using your
                  wallet address.
                </Text>
              </CardDescriptionContainer>
              <Button
                variant="bordered"
                iconType="safe"
                iconSize="sm"
                size="lg"
                color="secondary"
                component={Link}
                to={LOAD_SAFE_ROUTE}
              >
                <StyledButtonLabel size="xl" color="secondary">
                  Add existing wallet
                </StyledButtonLabel>
              </Button>
            </CardContentContainer>
          </StyledCard>
        </CardsContainer>
      </Block>
    </Page>
  )
}

export default Welcome

const CardsContainer = styled.div`
  display: flex;
  height: 300px;
  max-width: 850px;
`

const StyledCard = styled(Card)`
  display: flex;
  flex: 0 1 100%;
  padding: 0;
`

const CardContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
`

const StyledButtonLabel = styled(Text)`
  min-width: 130px;
`

const CardDescriptionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: auto;
`
