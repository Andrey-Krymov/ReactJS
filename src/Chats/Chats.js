import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useHistory } from 'react-router'
import Input from '../components/Inputs/Input'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../actions/chats'

export default function Chats(props) {
  const {
    // chats = [],
    currentChat,
    onCurrentChatChange,
    // onAddChat,
    onRemoveChat,
  } = props
  const history = useHistory()

  const chats = useSelector((state) => state.chats)
  const dispatch = useDispatch()

  const handleChatLinkClick = (chat) => {
    onCurrentChatChange(chat)
    history.push(`/chats/${chat.id}`)
  }

  const handleAddChat = (name) => {
    dispatch(addChat(`chat${Date.now()}`, name))
  }

  return (
    <div className="chats">
      <div className="chats__sidebar">
        <List className="app__sidebar" subheader={<p>Список чатов</p>}>
          {Object.values(chats).map((chat) => (
            <div style={{ display: 'flex' }}>
              <ListItem
                button
                component="a"
                key={chat.id}
                selected={chat.id === currentChat.id}
                onClick={() => handleChatLinkClick(chat)}
              >
                {chat.name}
              </ListItem>
              <Button
                type="submit"
                color="primary"
                variant="outlined"
                onClick={() => onRemoveChat(chat.id)}>
                Удалить
              </Button>
            </div>
          ))}
        </List>
      </div>

      <Input onSubmit={handleAddChat} />
    </div>
  )
}
