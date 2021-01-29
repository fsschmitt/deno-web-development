import React from 'https://esm.sh/react'
import ReactCardCarousel from "https://esm.sh/react-card-carousel";
import './styles.css';

const styles = {
  wrapper: 'wrapper',
  header: 'header',
  logoWrapper: 'logoWrapper',
  websiteWrapper: 'websiteWrapper',
  bookWrapper: 'bookWrapper',
  textCoverWrapper: 'textCoverWrapper',
  bookText: 'bookText',
  buyButton: 'buyButton',
  bookCover: 'bookCover',
  theBookWrapper: 'theBookWrapper',
  tableSection: 'tableSection',
  tableItem: 'tableItem',
  theAuthor: 'theAuthor',
  authorPhotoWrapper: 'authorPhotoWrapper',
  authorJob: 'authorJob',
  contacts: 'contacts',
  copywright: 'copywright',
  questions: 'questions',
  inverted: 'inverted',
  mainWrapper: 'mainWrapper'
}

const bookLink = ''

const SectionTitle = ({ children, className }: { children: any, className?: string }) => <div className={["sectionTitle", className].join(' ')}>{children}</div>
const SectionResume = ({ children, className }: { children: any, className?: string }) => <div className={["sectionResume", className].join(' ')}>{children}</div>
const Section = ({ children, className }: { children: any, className?: string }) => <div className={["section", className].join(' ')}>{children}</div>

const BookSection = ({ title, chapters, start = 1, topImage = () => { } }: { title: string, chapters: string[], start?: number; topImage?: any }) => (
  <div className="bookSection">
    <div className="bookSectionTitle">{title}{topImage}</div>
    <div className="bookSectionChapters">
      <ol start={start}>
        {chapters.map(chapter => (
          <li key={chapter} className="bookSectionSingleChapter">
            {chapter}
          </li>
        ))}
      </ol>
    </div>
  </div>

)

const LearningCircle = ({ number }: { number: number }) => {
  return (
    <div className="learningsCircle">
      <div className="circle-l3">
        <div className="circle-l2">
          <div className="circle-l1">{number}</div>
        </div>
      </div>
    </div>
  )
}

const ReviewCard = ({ photo, job, person, text, rating }: {
  photo: string, job: string, person: string, text: string, rating: number
}) => {
  return (
    <div className="reviewCard">
      <div className="personWrapper">
        <div className="personPhotoWrapper">
          <img src={photo} />
        </div>
        <div className="personDetailsWrapper">
          <div>
            {person}
          </div>
          <div>
            {job}
          </div>

        </div>
      </div>
      <div className="reviewWrapper">
        {text}
      </div>
      <div>{rating}</div>
    </div>
  )
}

const reviews = [
  {
    photo: 'https://s3-alpha-sig.figma.com/img/2908/435c/75dac9eb03981d35f4f45654af23531f?Expires=1612742400&Signature=Sohlz276x8sNSFxu20mZNDS42XUJGcScxw~WyXzT1oyZKdEmIRpvERMGaPjzIALxml5jzDMRW-vYPz8-sN5kiPYHY7hYCCZd1Sj4V56CdV0B8HwYXWU3XUbFS5V~ukQlz9SXR1qf65oUQlcnj~GLkImoGlfV9IMW7QQ33XDmk3K4Fc2SH1gqUf2yFcu6TZ889oIZX3GYLADk8fto19NZRWIYvOaHPtKHhAoX~17-3DN97~gch73ygdv2EZmUNXRaUuSlWYI0QIgu8y3cqeId775s~Vv5piy4Bh6qJOa3x0E4wgyinBlmcdajf3CHAWVtuTp~e2XrqcVZDyjCAIXiSA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    job: 'Full-stack developer',
    person: 'Bruno Lopes',
    text: 'loved it!',
    rating: '5'
  },
  {
    photo: 'https://s3-alpha-sig.figma.com/img/d1f3/0a8e/9123fdf67789142a9dbbf4dc971532c3?Expires=1612742400&Signature=PQ-1cNMpEe5-ksKqrtAgI~uv1G-z4gXhUZL4mglPqG9RYS9M14qHji1fAVkRwyZmEO1I6VAl4dfPo3lLcHskRzU63YoRg7uLdvGY3HKgzI63LW7N5h-Ep4eI-zcqExcdDvr~InAMjnglAHP4kMXIix3eBx5LPCDrBk6v~iEUS4bkY92v7u0-OuliOS50gygHVFc29jbG~3v2kf0av3eTR9n8gLamAbPalcYcu2ReNjHfRmJdAOGu17cVr0o2UiX6TSuqJIDPrjFJgtdYLRoNWYxBd8mkgRAtojMC9l1qcc8y8STVGDRxSxxfycJWVct8hKoSEl2sn1cf-TpKyUubLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    job: 'Full-stack developer',
    person: 'Bruno Lopes',
    text: 'loved it!',
    rating: '5'
  },
  {
    photo: 'https://s3-alpha-sig.figma.com/img/e5e0/5f05/efce2fbee595a4264fa151a1afc9a262?Expires=1612742400&Signature=ZP~BUQg4wPfb6IGCU-b4I7DtcQkOLt1DoyUehjolWoGDjtFVTm~DlF7Vq6T3~eqR5pEkAa~15f-6wz7McWdfiKPS1quZsjev3PwDD3B-Iuitdr8PgyTKmbLS8Mzc4f7mxkKDRwUXY45kANDleCKkepjyMQHC4BLBYJ9bitHTxTk3~EOXqk3MyQ~eDjkZr-9dETdyWhpcGE~QYNQo5nX1RU8Mlz0W67WgiPD7rkJdI3jnxDTWLk-vh5xsjIummkeGsKyYcz6Cq17DGx01Tjqp~o3gScgmAlR-Zhe8NbXgznKcgWpeIvIrTfgqoKQH30lsA0vQ7rv6I9Ng8sSsKrLH3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    job: 'Full-stack developer',
    person: 'Bruno Lopes',
    text: 'loved it!',
    rating: '5'
  },
]

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className="aboveTheFold">
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <img src="https://deno.land/logo.svg" alt="deno logo" />
            <div>Deno</div>
          </div>
          <div className={styles.websiteWrapper}>
            <span>
              <a href="https://alexandrempsantos.com">alexandrempsantos.com</a>
            </span>
          </div>
        </header>
        <div className={styles.bookWrapper}>
          <div className={styles.textCoverWrapper}>
            <div className={styles.bookText}>
              <div className="bookPresentation">
                <h1>Deno Web Development</h1>
                <h2>
                  Write, test, maintain JavaScript and TypeScript web applications
                  using Deno
              </h2>
              </div>
              <a
                href={bookLink}
                className={[styles.buyButton, 'button'].join(' ')}
              >
                <img src="/amazon.png" />
                Buy from Amazon
          </a>
            </div>
            <img
              className={styles.bookCover}
              src="/book-cover.png"
              alt="Deno Web Development book cover"
            />
          </div>
          <div></div>
        </div>
      </div>
      <Section className="dark">
        <SectionTitle>What will you learn from this book?</SectionTitle>
        <SectionResume>A complete guide with step-by-step explanations of Deno’s primitives, using them to build real-word applications.</SectionResume>
        <div className="learnings">
          <div className="learningPoint">
            <LearningCircle number={1} />
            <span className="learningText">Understand Deno’s essential concepts and features</span>
          </div>
          <div className="learningPoint">
            <LearningCircle number={2} />
            <span className="learningText">Learn how to use Deno in real-world scenarios</span>
          </div>
          <div className="learningPoint">
            <LearningCircle number={3} />
            <span className="learningText">Use Deno to develop, test and deploy web applications</span>
          </div>
        </div>
      </Section>
      <Section className="light">
        <SectionTitle className="dark">What's inside</SectionTitle>
        <SectionResume className="dark">Amet dictum sit amet justo donec enim diam vulputate.
Vitae suscipit tellus mauris a diam maecenas sed enim ut.</SectionResume>
        <div className="bookSectionWrapper">
          <BookSection
            topImage={<img className="denoImage" src="/deno-image.png" />}
            title="Chapter 1. Introduction" chapters={['What is deno?', 'The toolchain', 'Runtime and standard library']} />
          <BookSection
            title="Chapter 2. Building an application"
            start={4}
            chapters={[
              'Building a web application',
              'Adding users and migrating to oak',
              'Authentication and connection the the database',
              'HTTPS, configuration and Deno on the browser'
            ]}
          />
          <BookSection
            title="Chapter 3. Testing and deploying"
            start={8}
            chapters={[
              'Testing - Unit and integration',
              'Deploying a Deno application',
              'What\'s next?',
            ]} />
          <a href="" className="button accessContent">Access all the content</a>
        </div>
      </Section>
      <Section className="dark">
        <SectionTitle className="alignLeft">Tell me more...</SectionTitle>
        <SectionResume className="alignLeft">
          Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.
        </SectionResume>
        <p className="white-text">
          This book will introduce Deno’s primitives, its
          principles, and how developers can use it to build real-world
          applications.
          <br />
          After getting the reader comfortable with Deno and why it was created, we will start experimenting with Deno, exploring the toolchain,
          and writing simple scripts and CLI applications.
          </p>
        <br />
        <p className="white-text">
          As we transition in the second section of the book, the reader will
          start with a very simple web application and will slowly add more
          features to it.
          <br />
          Throughout the book, this application will evolve from a simple "hello world" API to a
          web application connected to the database, with users,
          authentication, and a JavaScript client.
        </p>
        <br />
        <p className="white-text">
          By the end of it, the reader will be comfortable using Deno to build
          real-world applications.
        </p>

      </Section>
      <Section className="light">
        <SectionTitle className="dark">What people are saying</SectionTitle>
        <SectionResume className="dark">Share your thoughts on Twitter by using the hashtag #denowebdevelopment</SectionResume>

        <div className="reviewsWrapper">
          <ReactCardCarousel autoplay={true} spread="wide" autoplay_speed={2500}>
            {reviews.map(review => (
              <ReviewCard {...review} />
            ))}
          </ReactCardCarousel>



        </div>
      </Section>
      <Section className="dark relative">
        <SectionTitle className="alignLeft">The author</SectionTitle>
        <div className="white-text alignLeft authorPresentation">
          <div>Alexandre Portela dos Santos</div>
          <div className="job">Engineering manager / Tech lead @ KI labs</div>
        </div>
        <p className="white-text">
          Alexandre Portela dos Santos is a software engineer passionate about
          products and startups.
          For the last 8+ years he's been working together with multiple
          companies, using technology as an enabler for ideas and businesses.
        </p>
        <br />
        <p className="white-text">
          With a big interest in education and getting people excited about
          technology, he makes sure he's always involved with people that are
          learning about it, being it via blog posts, books, open source
          contributions, or meetups. This is, by itself, a learning adventure
          that Alexandre loves to be a part of.
          </p>
        <br />
        <p className="white-text">
          Being a true believer that great software only happens through
          collaboration, ownership, and teams of great people, he strives to
          nurture those values in every project he works in.
        </p>
        <div className={styles.contacts}>
          <a href="https://www.linkedin.com/in/alexandrempsantos/">LinkedIn</a>|
          <a href="https://github.com/asantos00">GitHub</a>|
          <a href="https://twitter.com/ampsantos0">Twitter</a>|
          <a href="https://alexandrempsantos.com">Blog</a>
        </div>
        <img className="authorPhoto" src="/author.png" />
      </Section>
      <Section className="questions">
        <h3 className={styles.inverted}>Questions?</h3>
        <p>
          Email me at{" "}
          <a href="mailto:alexandre.santozz@gmail.com">
            alexandre.santozz@gmail.com
        </a>
        </p>
        <span className={styles.copywright}>
          Alexandre Portela dos Santos © {new Date().getFullYear()}
        </span>
      </Section>
    </div >
  )
}