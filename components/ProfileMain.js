import styles from '@/styles/ProfileComponent.module.css'


const Profile = (props) => {

    const {name, posts, followers, following, examCategory} = props.obj
    return (
        <>
        <section className={styles.mainContainer}>
            <div className={styles.image}>
                {name.charAt(0)}
            </div>
            <section className={styles.details}>
                <div className={styles.nameHead}>
                    <strong className={styles.name}>{name}</strong>
                    <button>Edit Profile</button>
                </div>
                <div className={styles.activity}>
                    <span className={styles.leftBorder}>{posts} posts</span>
                    <span className={styles.leftBorder}>{followers} followers</span>
                    <span>{following} following</span>
                </div>
                <div className={styles.examCategory}>
                    {examCategory}
                </div>
            </section>
        </section>
        </>
    );
}

export default Profile;