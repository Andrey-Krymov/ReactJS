import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useHistory } from 'react-router'
import Input from '../components/Inputs/Input'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addChatToDatabase, subscribeChatsChangings, removeChatFromDatabase } from '../actions/chats'

export default function Chats(props) {
  const history = useHistory()

  const chats = useSelector((state) => state.chats)
  const dispatch = useDispatch()

  const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`)
  }

  React.useEffect(() => {
    dispatch(subscribeChatsChangings())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddChat = (name) => {
    dispatch(addChatToDatabase(`chat${Date.now()}`, name))
  }

  const handleRemoveChat = (chatId) => {
    dispatch(removeChatFromDatabase(chatId))
  }

  return (
    <div className="chats">
      <p>добавить чат</p>
      <Input
        onSubmit={handleAddChat}
      />

      <List className="chats__sidebar"
        subheader={<p>cписок чатов</p>}>

        {Object.values(chats).map((chat) => (
          <div className="chats__sidebar__item"
            key={chat.id}>

            <ListItem
              style={{ justifyContent: 'center', paddingBottom: '10px' }}
              button
              component="a"
              onClick={() => handleChatLinkClick(chat)}
            >войти в чат <span style={{ color: '#61dafb', paddingLeft: '15px', textAlign: 'center' }}>
                {chat.name}
              </span>
            </ListItem>

            <Button
              style={{ marginBottom: '15px' }}
              variant="contained"
              onClick={() => handleRemoveChat(chat.id)}
            >
              Delite Chat
            </Button>
          </div>
        ))}
      </List>
    </div>
  )
}
