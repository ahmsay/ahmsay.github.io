const initState = {
  activeTabId: 1,
  tabs: [
    { id: 1, title: 'tab 1', body: { content: 'tab 1 content', moreContent: 'tab 1 more content', values: [1, 2, 3] }},
    { id: 2, title: 'tab 2', body: { content: 'tab 2 content', moreContent: 'tab 2 more content' }},
    { id: 3, title: 'tab 3', body: { content: 'tab 3 content' }},
    { id: 4, title: 'tab 4', body: { }}
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
