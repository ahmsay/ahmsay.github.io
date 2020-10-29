const initState = {
  sections: {
    about: {
      mainTitle: 'Who am I ?',
      mainContent: 'My name is Ahmet. I was born in Eskişehir. I am graduated from Anadolu University, department of computer engineering and living in Ankara, Turkey. I am working at TÜBİTAK (Scientific and Technological Research Council of Turkey) as a software developer. I am interested in devops and microservices architecture.',
      whatElse: {
        title: 'What Else ?',
        content: "Well, I like go kart, watching movies, tv series and documentaries, listening eurobeat, spending time on 9gag, playing video games, table football, billiard, drawing, drinking tea, cold weather and cities with beautiful, historical architecture. What I don't like is jazz, summer, coffee (not kidding) and applications with too many ads. I am really interested in space related topics and wild nature. Tiger is my favorite animal. Besides work, I also code some stuff to learn and improve myself."
      },
      developerMessage: {
        title: 'For Those Who Want to be a Software Developer',
        content: "There are tons of materials on internet that can guide you, help you to solve the problem you stuck and improve your skills. All you need is a desire to learn. I know this sounds like a cliche but it is the truth. So if you have any interest about software development, don't wait anymore and just start searching."
      }
    },
    hobbies: {
      mainTitle: 'My Hobbies',
      hobbyList: [
        { icon: 'create', content: "Drawing is really an easy and fun activity. I always make the most score for my team when it comes to drawing in taboo game. I am terrible at painting so most of my drawings are charcoal. I also like to draw technical stuff like aircrafts or space ships." },
        { icon: 'movie', content: "Everybody likes watching movies but this is something more for me. Plot and soundtrack are two things I pay attention the most. I can't really tell my favorite movie since it is so hard to decide but I can tell that Hans Zimmer is my favorite composer." },
        { icon: 'games', content: "Despite I am not playing that much compared to before, I still play video games time to time. Assassin's Creed 2 and Hollow Knight are my two favorites. I usually like open-world games with great story and soundtrack." },
        { icon: 'code', content: "Coding is not something I do only for work. I like to learn new technologies, concepts and challenge myself. I like both front-end and back-end and I have many interests like machine learning, design patterns, linux shell, devops and microservices." }
      ]
    },
    projects: {
      mainTitle: 'My Projects',
      projectList: [
        {
          title: 'Microshop',
          detail: "This is an online shopping application project built with Spring Boot and microservices architecture. It has four client services, a discovery server and a configuration server for global configuration and dynamic updates. The application is also ready to run with docker.",
          link: 'https://github.com/ahmsay/Microshop'
        },
        {
          title: 'Churnify',
          detail: "This is a churn analysis automation tool. Predicting which customer is going to leave the company is known as 'Churn Analysis'. So the aim is to predict which customer is going to leave the company and take precautions about it. The motivation is to automatize this process.",
          link: 'https://churn-2537f.firebaseapp.com/'
        },
        {
          title: 'Star Wars Quick Guide',
          detail: "This mobile application provides information about movies, characters, planets, species, starships and vehicles in Star Wars expanded universe, also known as the legend universe. It is built with Xamarin Forms and also compatible with android and iOS.",
          link: 'https://github.com/ahmsay/Star-Wars-Quick-Guide'
        },
      
        {
          title: 'Number Guess',
          detail: "This simple application provides you an interface to draw a number. Then if you click 'Predict', it sends the number you draw to a pre-trained machine learning model to predict which number it is. The model is a convolutional neural network which runs in a python flask app.",
          link: 'https://number-guess-conv.web.app/'
        }
      ]
    }
  },
  footer: {
    accounts: [
      { name: 'GitHub', link: 'https://github.com/ahmsay', icon: 'github.png' },
      { name: 'LinkedIn', link: 'https://tr.linkedin.com/in/ahmet-say-769485120', icon: 'linkedin.png' },
      { name: 'HackerRank', link: 'https://www.hackerrank.com/ahmsay', icon: 'hackerrank.png' },
      { name: 'Instagram', link: 'https://www.instagram.com/ahmsay26/', icon: 'instagram.png' }
    ]
  }
}

const rootReducer = (state = initState) => {
  return state
}

export default rootReducer
