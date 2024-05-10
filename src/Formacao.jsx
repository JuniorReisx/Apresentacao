import styles from '../src/Formacao.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
export function Formacao() {
 

    return (
        <section className={styles.sessao}>
            <div className={styles.header}>
                <h1>Conhecimentos</h1>
            </div>
            <main className={styles.maiin}>
                <div className={styles.experiencia} >
                <FaHtml5 className={styles.icons}   size={80}   />
                <FaCss3  className={styles.icons} size={80}   />
                <IoLogoJavascript className={styles.icons}  size={80}   />
                <FaPython  className={styles.icons} size={80}   />
                <FaJava  className={styles.icons} size={80}   />
                <FaReact  className={styles.icons} size={80}  />
                <FaBootstrap  className={styles.icons} size={80}   />
                <TbFileTypeSql className={styles.icons}  size={80}   />
                <FaDatabase  className={styles.icons} size={80}   />
                <FaNode  className={styles.icons} size={80}   />
                <FaGitSquare className={styles.icons}  size={80}   />
                </div>
            </main>
        </section>

    )

}