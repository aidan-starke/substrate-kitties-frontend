import React from 'react'
import {
  Button,
  Card,
  Grid,
  Message,
  Modal,
  Form,
  Label,
} from 'semantic-ui-react'

import KittyAvatar from './KittyAvatar'
import { useSubstrateState } from './substrate-lib'
import { TxButton } from './substrate-lib/components'

// --- Transfer Modal ---

const TransferModal = props => {
  const { kitty, setStatus } = props
  const { api } = useSubstrateState()
  const [open, setOpen] = React.useState(false)
  const [formValue, setFormValue] = React.useState({})
  const [kittyId, setKittyId] = React.useState()

  React.useEffect(() => {
    (async () => {
      const id = await api.query.substrateKitties.dnaToKitty(kitty.dna)
      setKittyId(id)
    })()
  }, [api, kitty, setKittyId])

  const formChange = key => (ev, el) => {
    setFormValue({ ...formValue, [key]: el.value })
  }

  const confirmAndClose = unsub => {
    setOpen(false)
    if (unsub && typeof unsub === 'function') unsub()
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="blue">
          Transfer
        </Button>
      }
    >
      <Modal.Header>Kitty Transfer</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input fluid label="Kitty ID" readOnly value={kittyId} />
          <Form.Input
            fluid
            label="Receiver"
            placeholder="Receiver Address"
            onChange={formChange('target')}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <TxButton
          label="Transfer"
          type="SIGNED-TX"
          setStatus={setStatus}
          onClick={confirmAndClose}
          attrs={{
            palletRpc: 'substrateKitties',
            callable: 'transfer',
            inputParams: [formValue.target, kittyId?.toString()],
            paramFields: [true, true],
          }}
        />
      </Modal.Actions>
    </Modal>
  )
}

// --- Set Price ---

const SetPrice = props => {
  const { kitty, setStatus } = props
  const { api } = useSubstrateState()
  const [open, setOpen] = React.useState(false)
  const [formValue, setFormValue] = React.useState({})
  const [kittyId, setKittyId] = React.useState()

  React.useEffect(() => {
    (async () => {
      const id = await api.query.substrateKitties.dnaToKitty(kitty.dna)
      setKittyId(id)
    })()
  }, [api, kitty, setKittyId])

  const formChange = key => (ev, el) => {
    setFormValue({ ...formValue, [key]: el.value })
  }

  const confirmAndClose = unsub => {
    setOpen(false)
    if (unsub && typeof unsub === 'function') unsub()
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="blue">
          Set Price
        </Button>
      }
    >
      <Modal.Header>Set Kitty Price</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input fluid label="Kitty ID" readOnly value={kittyId} />
          <Form.Input
            fluid
            label="Price"
            placeholder="Enter Price"
            onChange={formChange('target')}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <TxButton
          label="Set Price"
          type="SIGNED-TX"
          setStatus={setStatus}
          onClick={confirmAndClose}
          attrs={{
            palletRpc: 'substrateKitties',
            callable: 'setPrice',
            inputParams: [kittyId?.toString(), formValue.target],
            paramFields: [true, true],
          }}
        />
      </Modal.Actions>
    </Modal>
  )
}

// --- Buy Kitty ---

const BuyKitty = props => {
  const { kitty, setStatus } = props
  const { api } = useSubstrateState()
  const [open, setOpen] = React.useState(false)
  const [kittyId, setKittyId] = React.useState()

  React.useEffect(() => {
    (async () => {
      const id = await api.query.substrateKitties.dnaToKitty(kitty.dna)
      setKittyId(id)
    })()
  }, [api, kitty, setKittyId])

  const confirmAndClose = unsub => {
    setOpen(false)
    if (unsub && typeof unsub === 'function') unsub()
  }

  if (!kitty.price) {
    return <></>
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="green">
          Buy Kitty
        </Button>
      }
    >
      <Modal.Header>Buy Kitty</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input fluid label="Kitty ID" readOnly value={kittyId} />
          <Form.Input fluid label="Price" readOnly value={kitty.price} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="grey" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <TxButton
          label="Buy Kitty"
          type="SIGNED-TX"
          setStatus={setStatus}
          onClick={confirmAndClose}
          attrs={{
            palletRpc: 'substrateKitties',
            callable: 'buyKitty',
            inputParams: [kittyId?.toString(), kitty.price],
            paramFields: [true, true],
          }}
        />
      </Modal.Actions>
    </Modal>
  )
}

// --- Set Kitty Name ---

const SetName = props => {
  const { kitty, setStatus } = props
  const { api } = useSubstrateState()
  const [open, setOpen] = React.useState(false)
  const [formValue, setFormValue] = React.useState({})
  const [kittyId, setKittyId] = React.useState()

  React.useEffect(() => {
    (async () => {
      const id = await api.query.substrateKitties.dnaToKitty(kitty.dna)
      setKittyId(id)
    })()
  }, [api, kitty, setKittyId])

  const formChange = key => (ev, el) => {
    setFormValue({ ...formValue, [key]: el.value })
  }

  const confirmAndClose = unsub => {
    setOpen(false)
    if (unsub && typeof unsub === 'function') unsub()
  }

  return (
      <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button basic color="blue">
              Set Name
            </Button>
          }
      >
        <Modal.Header>Set Kitty Price</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input fluid label="Kitty ID" readOnly value={kittyId} />
            <Form.Input
                fluid
                label="Name"
                placeholder="Enter Name"
                onChange={formChange('target')}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="grey" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <TxButton
              label="Set Name"
              type="SIGNED-TX"
              setStatus={setStatus}
              onClick={confirmAndClose}
              attrs={{
                palletRpc: 'substrateKitties',
                callable: 'nameKitty',
                inputParams: [kittyId?.toString(), formValue.target],
                paramFields: [true, true],
              }}
          />
        </Modal.Actions>
      </Modal>
  )
}

// --- About Kitty Card ---

const KittyCard = props => {
  const { kitty, setStatus } = props
  const { dna = null, owner = null, gender = null, price = null, name = null } = kitty
  const displayDna = dna && dna.toJSON()
  const { currentAccount } = useSubstrateState()
  const isSelf = currentAccount.address === kitty.owner

  return (
    <Card>
      {isSelf && (
        <Label as="a" floating color="teal">
          Mine
        </Label>
      )}
      <KittyAvatar dna={dna.toU8a()} />
      <Card.Content>
        <Card.Meta style={{ fontSize: '.9em', overflowWrap: 'break-word' }}>
          DNA: {displayDna}
        </Card.Meta>
        <Card.Description>
          {name && <p style={{overflowWrap: 'break-word'}}>Name: {name}</p>}
          <p style={{ overflowWrap: 'break-word' }}>Gender: {gender}</p>
          <p style={{ overflowWrap: 'break-word' }}>Owner: {owner}</p>
          <p style={{ overflowWrap: 'break-word' }}>
            Price: {price || 'Not For Sale'}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={{ textAlign: 'center' }}>
        {owner === currentAccount.address ? (
          <>
            <SetName kitty={kitty} setStatus={setStatus} />
            <SetPrice kitty={kitty} setStatus={setStatus} />
            <TransferModal kitty={kitty} setStatus={setStatus} />
          </>
        ) : (
          <>
            <BuyKitty kitty={kitty} setStatus={setStatus} />
          </>
        )}
      </Card.Content>
    </Card>
  )
}

const KittyCards = props => {
  const { kitties, setStatus } = props

  if (kitties.length === 0) {
    return (
      <Message info>
        <Message.Header>
          No Kitty found here... Create one now!&nbsp;
          <span role="img" aria-label="point-down">
            👇
          </span>
        </Message.Header>
      </Message>
    )
  }

  return (
    <Grid columns={3}>
      {kitties.map((kitty, i) => (
        <Grid.Column key={`kitty-${i}`}>
          <KittyCard kitty={kitty} setStatus={setStatus} />
        </Grid.Column>
      ))}
    </Grid>
  )
}

export default KittyCards
