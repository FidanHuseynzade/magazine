import { Link } from "react-router-dom";
import styles from "./usersignup.module.css";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
const UserSignUp = () => {
  return (
    <form className={styles.form}>
        <label>
          <input className={styles.input} type="text" placeholder="full name" />
        </label>

        <label>
          <input className={styles.input} type="text" placeholder="username" />
        </label>


      <label>
        <input className={styles.input} type="email" placeholder="email" />
      </label>

      <label>
        <input className={styles.input} type="password" placeholder="password" />
      </label>
      <label>
        <input className={styles.input} type="password" placeholder="confirm password" />
      </label>
      <Checkbox style={{ margin: '15px' }} onChange={onChange}>
        Admin
      </Checkbox>
      <button className={styles.submit}>Submit</button>
      <p className={styles.signin}>
       <Link to={'/login'}> Already have an account ? </Link>
      </p>
    </form>
  );
};

export default UserSignUp;