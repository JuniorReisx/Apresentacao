import styles from '../src/About.module.css'
import Junior from '../src/assets/Junior.jfif'
export function About() {
 

    return (
<section className={styles.sectionAbout}>
    <div className={styles.div}>
    <img src={Junior} className={styles.img} alt="Junior" />
    <div  className={styles.about}>
    <h2 id='Sobre'>Sobre</h2>
<p>
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1000&color=F0F0F0&random=false&width=435&lines=+++Ol%C3%A1%2C+meu+nome+%C3%A9+Gil+Maik." alt="Typing SVG" /></a>
<br/> Sou desenvolvedor FullStack, estudo programação há uns 7 meses, gosto muito desse mundo da tecnologia, tenho conhecimentos em algumas linguagens e frameworks. Sempre estou aprendendo coisas novas, tecnologias novas para dar uma experiência melhor ao usuário.</p>
<button className={styles.btn}>
<a href="https://www.linkedin.com/in/gil-maik-junior-ab92b6226/">
Linkedin
</a>
</button>
<button className={styles.btn}>
    <a href="https://github.com/JuniorReisx">
  GitHub
  </a>
</button>


    </div>

    </div>
</section>


    )

}