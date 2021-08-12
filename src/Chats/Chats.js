import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useHistory } from 'react-router'
import Input from '../components/Inputs/Input'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, removeChat } from '../actions/chats'

export default function Chats(props) {
  const history = useHistory()

  const chats = useSelector((state) => state.chats)
  const dispatch = useDispatch()

  const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`)
  }

  const handleAddChat = (name) => {
    dispatch(addChat(`chat${Date.now()}`, name))
  }

  const handleRemoveChat = (chatId) => {
    dispatch(removeChat(chatId))
  }

  return (
    <div className="chats">
      <List className="chats__sidebar" subheader={<p>Список чатов</p>}>
        {Object.values(chats).map((chat) => (
          <div className="chats__sidebar__item" key={chat.id}>
            <ListItem
              button
              component="a"
              onClick={() => handleChatLinkClick(chat)}
            >
              {chat.name}
            </ListItem>
            <Button
              variant="contained"
              onClick={() => handleRemoveChat(chat.id)}
            >
              Delite
            </Button>
          </div>
        ))}
      </List>

      <Input
        label="Имя чата"
        placeholder="Введите имя чата"
        onSubmit={handleAddChat}
      />
    </div>
  )
}
