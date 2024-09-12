import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
      <header className={classes.header}>
        <nav>
        <ul>
            <li>
              Login
            </li>
              <li>
                Profile
              </li>
        </ul>
      </nav>
      </header>
    )
}

export default MainNavigation;