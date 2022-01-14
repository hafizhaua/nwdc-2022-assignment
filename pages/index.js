import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Fade from "react-reveal/Fade";

export async function getStaticProps() {
   const allPostsData = getSortedPostsData();
   return {
      props: {
         allPostsData,
      },
   };
}

export default function Home({ allPostsData }) {
   return (
      <Layout home>
         <Head>
            <title>{siteTitle}</title>
         </Head>
         <Fade bottom cascade>
            <section className={utilStyles.heading}>
               <p>
                  Hello, there! I'm <strong>Hafi</strong>, a fellow undergrad stud from TIF'20 UGM. I'm originally from <strong>Bontang, East Borneo</strong> (<em>hope you know where it is, tho</em> &#128556;).
               </p>
               <p>
                  Tbh, I'm not that techy person who codes everyday very passionately, but I'm pretty sure I have kind of interests in web development, esp. in front-end website development. Maybe it has something to do with my designing
                  interest, too, <em>//perhaps//</em> &#129300;...
               </p>
               <p>Speaking of interests, I do also love doing these activities:</p>
               <ul>
                  <li>&#127926; Listening to musics</li>
                  <li>&#127928; Playing (a bit) of guitars</li>
                  <li>&#127992; Playing and waching badminton</li>
                  <li>&#127912; Designing UIs</li>
                  <li>&#128247; Photography and videography</li>
               </ul>
               <p>
                  If you happen to have hobby/ies related to mine, or you want to get in touch more, hit me up on <a href="https://twitter.com/hafizhaua">Twitter</a> or <a href="https://instagram.com/hafizhaua">Instagram</a> and let's talk
                  more~! &#128640;
               </p>
            </section>
         </Fade>

         <Fade bottom cascade>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
               <h2 className={utilStyles.headingLg}>Blogs~</h2>
               <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                     <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                           <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                           <Date dateString={date} />
                        </small>
                     </li>
                  ))}
               </ul>
            </section>
         </Fade>
      </Layout>
   );
}
