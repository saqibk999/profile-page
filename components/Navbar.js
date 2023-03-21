import styles from '@/styles/Navbar.module.css'
import Image from 'next/image';
import {AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'
import UserNav from './UserNav';
import Link from 'next/link';

const Navbar = (props) => {
    const name = props.name;
    const examCategory = props.examCategory;
    return (
        <>
        <div className={styles.mainContainer}>
            <Image src='https://gradeup-question-images.grdp.co/liveData/f/2022/7/bep_logo_53.svg' 
            alt='image'
            width="160"
            height="55"
            className={styles.img}
            />
          <Link href='/home' className={styles.link}><span>Home</span></Link>
          <Link href='/free' className={styles.link}><span>Free videos</span></Link>
          <Link href='/practice' className={styles.link}><span>Practice</span></Link>
          <Link href='/test' className={styles.link}><span>Test Series</span></Link>
          <Link href='/doubts' className={styles.link}><span>Doubts</span></Link>
          <Link href='/classroom' className={styles.link}><span>Classroom</span></Link>
          <div className={styles.icons}>
          <div className={styles.border}><AiOutlineSearch/></div>
          <div className={styles.border}><AiOutlineBell/></div>
          </div>
          <Link href='/profile' className={styles.link}>
          <UserNav name={name} examCategory={examCategory}/>
          </Link>
        </div>
        </>
    );
}

export default Navbar;