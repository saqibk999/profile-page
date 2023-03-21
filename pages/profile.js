import ProfileActivity from '@/components/ProfileActivity';
import ProfileMain from '@/components/ProfileMain';
import styles from '@/styles/Profile.module.css'
import {MdNavigateNext} from 'react-icons/md'
import {useQuery} from '@apollo/client'
import { GET_USER } from '@/graphql/queries/getUser';



const Profile = (props) => {

    var obj = props.obj;
    // var pageprops = pageProps;
    // console.log("here"+pageprops)
    const{loading, error, data} = useQuery(GET_USER, {
        ssr: true
    });
console.log({loading})
if(loading) return null;
    if(loading) console.log("loading = "+loading)
    if(error) console.log("error = "+error)
    if(data){
        obj.name = data.me.name
        props.obj.name = data.me.name
        obj.examCategory = data.me.primaryExamCategory.name
    }

    return (
        <>
        <div className={styles.mainContainer}>
        <section className={styles.header}>
            <strong style={{color: "#FF8300"}}>Home</strong>
            <MdNavigateNext/>
            <div style={{color: "grey"}}>{obj.name}</div>
        </section>
        <section className={styles.profileContainer}>
            <ProfileMain obj={obj}/>
        </section>
        <hr />
        <section className={styles.activity}>
            <ProfileActivity obj={obj}/>
        </section>
        <hr />
        </div>
        </>
    );
}

Profile.getInitialProps = async () => {

    const obj = {
        "name":"Saqib",
        "posts":0,
        "followers":1000,
        "following":0,
        "createdAt":"Jan 2023",
        "doubtsAnswered":1000,
        "bestAnswers":1000,
        "thanksRecieved":1000,
        "questionsAnsweredCorrectly":1000,
        "savedNotes":0
      }


      const props ={obj}
      return props

};

// export async function getServerSideProps(context) {

//     const obj = {
//         "name":"Saqib Khan",
//         "posts":0,
//         "followers":1000,
//         "following":0,
//         "examCategory":"SSC",
//         "createdAt":"Jan 2023",
//         "doubtsAnswered":1000,
//         "bestAnswers":1000,
//         "thanksRecieved":1000,
//         "questionsAnsweredCorrectly":1000,
//         "savedNotes":0
//       }

//     return {
//       props: {obj}, // will be passed to the page component as props
//     }
//    }

 export default Profile;