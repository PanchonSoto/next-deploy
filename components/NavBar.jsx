import { ActiveLink } from './ActiveLink';
import styles from "./NavBar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {

  return (
    <nav className={styles['nav-container']}>
      {
        menuItems.map(({text,href})=>(
          <ActiveLink text={text} href={href} key={text}> {text} </ActiveLink>
        ))
      }
      
    </nav>
  )
}

{/* { menuItems.map(item=>{
    <ActiveLink text={item.text} href={item.href}>{item.text}</ActiveLink>
  })
} */}

  {/* <ActiveLink text='Home' href="/">Home</ActiveLink>
  <ActiveLink text='About' href="/about">About</ActiveLink>
  <ActiveLink text='Contact' href="/contact">Contact</ActiveLink> */}
