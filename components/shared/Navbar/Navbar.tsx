import React, { type FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => <div className={styles.Navbar} data-testid="Navbar" />;

export default Navbar;
