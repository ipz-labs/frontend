import React from 'react';
import styles from './Footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h2 className={styles.footer__header}>CONTACTS</h2>
        
        <div className={styles.footer__wraper}>
			<div className={`${styles.footer__bigflex} ${styles.bigflex}`}>
		
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}>
					<Link to="https://nure.ua" target="blank" className={styles.smallflex__item}>© Copyright 2024 NURE</Link>
				</div>
				
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}>
					<Link to="" className={styles.smallflex__item}>KHARKIV</Link>
					<Link to="https://www.google.com/maps/place/Nauky+Ave,+14,+Kharkiv,+Kharkivs'ka+oblast,+61000/@50.0149846,36.2254747,17z/data=!3m1!4b1!4m6!3m5!1s0x4127a1243945df5b:0x76ae90e0f1f8f1b6!8m2!3d50.0149846!4d36.228055!16s%2Fg%2F11f5k219c1?entry=ttu" className={styles.smallflex__item}>Nauky 14</Link>
					<Link to="" className={styles.smallflex__item}>+380-057-702-10-13</Link>
					<Link to="" className={styles.smallflex__item}>utalentinformation@gmail.com</Link>
				</div>
				
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}> 
					<Link to="" className={styles.smallflex__item}>USA HQ – Mountain View</Link>
					<Link to="https://www.google.com/maps/place/1600+Amphitheatre+Pkwy,+Mountain+View,+CA+94043,+USA/@37.4225295,-122.0868798,17z/data=!3m1!4b1!4m6!3m5!1s0x808fbb13bd001747:0xfc83c2bb7ba19ea!8m2!3d37.4225295!4d-122.0842995!16s%2Fg%2F11srq0t65f?entry=ttu" className={styles.smallflex__item}>1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States</Link>
					<Link to="" className={styles.smallflex__item}>+1 650-253-0000</Link>
					<Link to="" className={styles.smallflex__item}>utalentinformation@gmail.com</Link>
				</div>
				
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}>
					<Link to="https://www.youtube.com/watch?v=xm3YgoEiEDc" className={styles.smallflex__item}><LinkedInIcon/></Link>
					<Link to="https://www.youtube.com/watch?v=xm3YgoEiEDc" className={styles.smallflex__item}><FacebookIcon/></Link>
					<Link to="https://www.youtube.com/watch?v=xm3YgoEiEDc" className={styles.smallflex__item}><TwitterIcon/></Link>
				</div>
			
			</div>
    	</div>
		</footer>
	);
};
