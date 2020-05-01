const initState = {
  activeTabId: 1,
  tabs: [
    { id: 1, title: 'About Me', body: { content: 'tab 1 content', moreContent: 'tab 1 more content', values: [1, 2, 3] }},
    { id: 2, title: 'Hobbies', body: { content: 'tab 2 content', moreContent: 'tab 2 more content' }},
    { id: 3, title: 'Hometown', body: { content: 'tab 3 content' }},
    { id: 4, title: 'Projects', body: { }}
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
