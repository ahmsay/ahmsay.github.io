const initState = {
  tabs: {
    tab1: { title: 'tab 1 title', content: 'tab 1 content', moreContent: 'tab 1 more content' },
    tab2: { title: 'tab 2 title', content: 'tab 2 content', icons: [1,2,3] },
    tab3: { title: 'tab 3 title', content: 'tab 3 content' },
    tab4: { title: 'tab 4 title', content: 'tab 4 content' }
  }
}

const rootReducer = (state = initState) => {
  return state
}

export default rootReducer
