const initState = {
  activeTabId: 1,
  tabs: [
    {
      id: 1,
      title: 'About Me',
      card: {
        title: 'About Me',
        content1: 'tab 1 content',
        content2: 'tab 1 more content'
      }
    },
    {
      id: 2,
      title: 'Hobbies',
      card: {
        title: 'My Hobbies',
        body: [
          { title: 'Hobby 1', content: '-' },
          { title: 'Hobby 2', content: '-' },
          { title: 'Hobby 3', content: '-' }
        ]
      }
    },
    {
      id: 3,
      title: 'Hometown',
      body: {
        content: 'tab 3 content'
      }
    },
    {
      id: 4,
      title: 'Projects',
      body: {

      }
    }
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_ACTIVE_TAB') {
    let tabId = action.id;
    return {
      ...state,
      activeTabId: tabId
    }
  }
  return state
}

export default rootReducer
