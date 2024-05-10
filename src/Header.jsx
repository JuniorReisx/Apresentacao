import styles from '../src/Header.module.css'




export function Header() {
 
    return (
<header>

<h1 className={styles.title}>Junior Reis</h1>

<nav>

<ul className={styles.ul}>
<li className={styles.lis}  ><a href="About.jsx">Sobre</a></li>
    <li className={styles.lis}> <a href="">Projetos</a></li>
    <li className={styles.lis}><a href="">Conhecimentos</a></li>
    <li className={styles.lis}><a href="">Contatos</a></li>
</ul>

</nav>

</header>
    )

}