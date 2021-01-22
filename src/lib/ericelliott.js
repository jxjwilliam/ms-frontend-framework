// https://medium.com/@_ericelliott

const createChat = ({ id = 0, msg = '', user = 'Anonymous', timeStamp = 1472322852680 } = {}) => ({
  id,
  msg,
  user,
  timeStamp,
})

const createState = ({
  userName = 'Anonymous',
  chatLog = [],
  statusMessage = 'Online',
  currentChat = createChat(),
} = {}) => ({
  userName,
  chatLog,
  statusMessage,
  currentChat,
})

export const addChat = ({
  // cuid is safer than random uuids/v4 GUIDs
  // see usecuid.org
  id = cuid(),
  msg = '',
  user = 'Anonymous',
  timeStamp = Date.now(),
} = {}) => ({
  type: ADD_CHAT,
  payload: { id, msg, user, timeStamp },
})

export const getViewState = state => ({
  ...state, // return a list of users active during this session
  recentlyActiveUsers: [...new Set(state.chatLog.map(chat => chat.user))],
})
