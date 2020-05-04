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
          content: 'Well, I like go kart, watching movies and tv series, listening eurobeat, playing video games, table football, billiard, drawing, drinking tea. I am really interested in space related topics and wild nature. Tiger is my favorite animal. Besides work, I also code some stuff to learn and improve myself.'
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
        hobbies: [
          { icon: 'create', content: "Drawing is really an easy and fun activity. I always make the most score for my team when it comes to drawing in taboo. I am terrible at painting so most of my drawings are charcoal. I also like to draw technical stuff like aircrafts or space ships." },
          { icon: 'movie', content: "Everybody likes watching movies but this is something more for me. Plot and soundtrack are two things I pay attention the most. I can't really tell my favorite movie since it is so hard to decide but I can tell that Hans Zimmer is my favorite composer." },
          { icon: 'games', content: "Despite I am not playing that much compared to before, I still play video games time to time. Assassin's Creed 2 and Hollow Knight are my two favorites. I usually like open-world games with great story and soundtrack." },
          { icon: 'code', content: "Coding is not something I do only for work. I like to learn new technologies, concepts and challenge myself. I like both front-end and back-end and I have many interests like machine learning, design patterns, linux shell, devops and microservices." }
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
