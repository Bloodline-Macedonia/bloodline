import { motion } from 'framer-motion';
import { container, content } from '../lib/motion/variants';
import styles from '../styles/home.module.css';

export default function Home() {

    return (
        <motion.div variants={container} initial='initial' animate='enter' exit='exit' >
            <div className={styles.main}>
                <div className='form-box'>
                    <motion.h1 variants={content} style={{ textAlign: 'center' }}>Latest Requests</motion.h1>
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <motion.div variants={content} className="form-box">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>
                                                Hospital
                                            </th>
                                            <th>
                                                Blood Type
                                            </th>
                                            <th>
                                                Location
                                            </th>
                                            <th>
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Zan Mitrev
                                            </td>
                                            <td>
                                                A+
                                            </td>
                                            <td>
                                                Skopje
                                            </td>
                                            <td>
                                               <span style={{ background: 'green', color: 'white', borderRadius: '7px', padding: '.2em .5em', display: 'inline-block' }}>• Active</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Acibadem
                                            </td>
                                            <td>
                                                0-
                                            </td>
                                            <td>
                                                Skopje
                                            </td>
                                            <td>
                                                <span style={{ background: 'darkred', color: 'white', borderRadius: '7px', padding: '.2em .5em', display: 'inline-block' }} >• Completed</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <br />
            </div>
            <div className='footer'>
                <div className='links'>
                    <a href='mailto:bloodlinemacedonia@gmail.com'>Email Us</a>
                </div>
                <p> With <span style={{ color: '#DA3237' }}>&hearts;</span> from Bloodline Team </p>
            </div>

        </motion.div>
    );
}
