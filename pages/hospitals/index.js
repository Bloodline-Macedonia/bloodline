

import { motion } from 'framer-motion';
import { container, content } from '../../lib/motion/variants';

import styles from '../../styles/home.module.css';

export default function Home() {
    return (
        <motion.div variants={container} initial='initial' animate='enter' exit='exit' >
            <div className={styles.main}>
                <div className="form-box">
                    <motion.h1 variants={content}>Manage your requests</motion.h1>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className='row justify-content-between' >
                                <div className='col-md-5' style={{ margin: '3em 0' }}>
                                    <motion.h2> New Request </motion.h2>
                                    <motion.div variants={content} className="group">
                                        <label>Location</label>
                                        <select name='bloodType' value=''>
                                            <option>Karpoš</option>
                                            <option>Centar</option>
                                        </select>
                                    </motion.div>
                                    <motion.div variants={content} className="group">
                                        <label>Blood Type*</label>
                                        <select name='bloodType'>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                            <option>0+</option>
                                            <option>0-</option>
                                        </select>
                                    </motion.div>
                                    <input type="submit" className="button" value="Send Request" />
                                </div>
                                <div className='col-md-6' style={{ margin: '3em 0' }}>
                                    <motion.h2> Previous Requests </motion.h2>
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
                                                    Skopje, Karpoš
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
                                                    Skopje, Centar
                                                </td>
                                                <td>
                                                    <span style={{ background: 'darkred', color: 'white', borderRadius: '7px', padding: '.2em .5em', display: 'inline-block' }} >• Completed</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                </div>
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
