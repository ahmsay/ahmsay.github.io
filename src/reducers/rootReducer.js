const initState = {
  activeTabId: 1,
  tabs: {
    tab1: { id: 1, title: 'tab 1 title', content: 'tab 1 content', moreContent: 'tab 1 more content' },
    tab2: { id: 2, title: 'tab 2 title', content: 'tab 2 content', icons: [1,2,3] },
    tab3: { id: 3, title: 'tab 3 title', content: 'tab 3 content' },
    tab4: { id: 4, title: 'tab 4 title', content: 'tab 4 content' }
  }
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
