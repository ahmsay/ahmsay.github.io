const initState = {
  activeTabId: 1,
  tabs: [
    {
      id: 1,
      title: 'About Me',
      card: {
        mainTitle: 'Hello There !',
        mainContent: 'My name is Ahmet. I was born in Eskişehir. I am graduated from Anadolu University and living in Ankara, Turkey. I work at TÜBİTAK (Scientific and Technological Research Council of Turkey) as a software developer. I am interested in devops and microservices architecture.',
        section1: {
          title: 'What Else ?',
          content: 'I like go kart, watching movies and tv series, listening eurobeat, playing video games, table football, billiard, drawing, drinking tea. I am really interested in space related topics and wild nature. Tiger is my favorite animal. Besides work, I also code some stuff to learn and improve myself.'
        },
        section2: {
          title: 'For Those Who Wants to be a Software Developer',
          content: 'There are tons of materials on internet that can guide you, help you to solve the problem you stuck and improve your skills. All you need is a desire to learn. I know this sounds like a cliche but it is the truth.'
        },
        section3: {
          title: 'For More',
          links: [
            { name: 'LinkedIn', href: 'https://tr.linkedin.com/in/ahmet-say-769485120' },
            { name: 'GitHub', href: 'https://github.com/ahmsay' },
            { name: 'Instagram', href: 'https://www.instagram.com/ahmsay26/' }
          ]
        }
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
