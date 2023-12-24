import { Link } from "react-router-dom";
import styles from "./usersignup.module.css";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

const PublisherSignUp = () => {

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
                <input
                    className={styles.input}
                    type="password"
                    placeholder="password"
                />
            </label>
            <label>
                <input
                    className={styles.input}
                    type="password"
                    placeholder="confirm password"
                />
            </label>
            <label>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="profile image"
                />
            </label>
            <label>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="background image"
                />
            </label>
            <button className={styles.submit}>
                Submit
            </button>
            <p className={styles.signin}>
                <Link to={"/login"}> Already have an account ? </Link>
            </p>
        </form>
    );
};

export default PublisherSignUp;