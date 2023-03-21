import styles from '@/styles/UserNav.module.css'

const UserNav = (props) => {
    const name = props.name;
    const examCategory = props.examCategory;
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.infoText}>
                   <div> {name} </div>
                   <div> {examCategory} </div>
                </div>
                <div className={styles.coloredName}>
                    {name.charAt(0)}
                </div>
            </div>
        </>
    );
}



export default UserNav;