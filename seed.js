const mongoose = require('mongoose')
const Movie = require('./models/movies')

const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('database connected')
})

Movie.create([
{
  title: ' The Apollo',
   description: 'The unique history and legacy of New York City’s landmark Apollo Theater is explored in this documentary.',
   img: 'https://i.imgur.com/E6itcih.png',
   tags: 'Landmarks, NY, New York',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
{

   title: ' An Apology to Elephants',
   description: 'this documentary short traces our long history with elephants and explores the many problems that arise when they are brought to live in captivity in zoos and circuses.',
   img: 'https://i.imgur.com/oY1kGkc.png',
   tags: 'Animals, circus, PETA',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
{

   title: ' Becoming Warren Buffett',
   description: 'This documentary chronicles Buffetts evolution into one of the wealthiest and	most respected men in the world.',
   img: 'https://i.imgur.com/4tHFWd4.png',
   tags: ' wealthy men, Investor',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
{

   title: 'The Case Against Adnan Syed ',
   description: ' Directed by Academy Award nominee Amy Berg, learn more about the new documentary on the conviction of Adnan Syed, including new discoveries and revelations.',
   img: ' https://i.imgur.com/zlrEud9.png',
   tags: ' ',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },




{

   title: ' Coma',
   description: ' This film follows a year in the lives of four patients at JFK Medical Center, Center for Head Injuries  as they emerge from their comas.',
   img: 'https://i.imgur.com/AjpButz.png ',
   tags: 'medical, hospital, human mind ',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  }, {

   title: 'Crazy, Not Insane',
   description: 'A provocative look at the minds of serial killers through the lens of renowned psychiatrist Dorothy Otnow Lewis.',
   img: 'https://i.imgur.com/MN8k9dE.png ',
   tags: ' Serial Killers, human mind, crime',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
{
   title: 'Ice on Fire ',
   description: 'This documentary explores the devastating impacts of climate change--and potential solutions. ',
   img: 'https://i.imgur.com/JVLrtEn.png ',
   tags: 'global warming, nature, carbon footprint ',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
{

   title: 'Kareem: Minority of One ',
   description: ' Explore the complexity and genius of the NBAs all-time leading scorer--Kareem Abdul-Jabbar--in this documentary.',
   img: 'https://i.imgur.com/XBfBAAu.png',
   tags: 'sports, basketball, NBA, Hall of Fame ',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
 {


   title: ' Leaving Neverland ',
   description: ' A two-part documentary about Michael Jackson.',
   img: 'https://i.imgur.com/4GwhZkp.png ',
   tags: ' Artist, crime, Hollywood secrets',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  }, {

   title: ' Lindsey Vonn: The Final Season',
   description: ' Lindsey Vonn US olympic skier:',
   img: 'https://i.imgur.com/VpU1vBm.png ',
   tags: 'sports, Olympics, woman athlete',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  }, {

   title: ' Mob Stories',
   description: 'They are the real goodfellas. For the first time on television, Mafia turncoats give personal accounts of life inside the Mob.  ',
   img: 'https://i.imgur.com/VXeqHsU.png',
   tags: ' Mobsters, crime, NY',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
  {
   title: 'Rock and a Hard Place ',
   description: ' This documentary captures the lives of incarcerated young men who are granted a second chance through a one-of-a-kind boot-camp program.',
   img: 'https://i.imgur.com/n0yrqid.png ',
   tags: ' reform, jail, bootcamp',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
  {
   title: ' TIGER',
   description: 'chronicles Tigers very public downfall all the way through his memorable return to competition in 2018. ',
   img: 'https://i.imgur.com/9bvr55G.png',
   tags: ' ',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
{

   title: ' What Happened on 9/11',
   description: 'The tragic events of September 11, 2001 are revisited to help a younger generation learn about that day.',
   img: 'https://i.imgur.com/aE1ZJF8.png',
   tags: 'terror, terrorist attack, loss, America ',
   like: ' 0',
   watched: ' false',
   usercreated: 'false',

  },
], (err, data)=>{
  console.log(data)
  db.close()
})
