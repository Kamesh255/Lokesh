import React from 'react'
import './style.css'
import { IoChevronDownCircle } from 'react-icons/io5'
import { IoIosCloudDownload } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import { HomeCourosal } from './Courosal'

const studantData = [
    {
        desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        post: " Mandar Suryawanshi"
    },
    {
        desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        post: " Mandar Suryawanshi"
    },
    {
        desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        post: " Mandar Suryawanshi"
    },
    {
        desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        post: " Mandar Suryawanshi"
    },
    {
        desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        post: " Mandar Suryawanshi"
    },
    {
        desc: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        post: " Mandar Suryawanshi"
    },
]

const love = () => {
    let arr = []
    for (let i = 0; i < studantData?.length; i++) {
        arr.push(
            <div key={i} style={{ borderRadius: '15px', background: 'white', padding: '15px' }}>
                <div style={{ width: '90%', margin: 'auto', textAlign: 'start' }}>
                    <p>*</p>
                    <p>{studantData?.[i]?.desc}</p>
                    <p>{studantData?.[i]?.name}</p>
                    <p>{studantData?.[i]?.post}</p>
                </div>

            </div>
        )
    }
    return arr;
}


const Home = () => {
    return (
        <div>
            <div class='' style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `url(${require('./image/homeBg.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                <div class='hometopSection' >
                    <p>Home Pune Branch</p>
                    <h1>KC Overseas Education Pune</h1>
                    <p>We value your career aspirations, which is why we map your preferences with the best that our global universities have to offer. Thousands of our students are pursuing their programs and aspirations in eminent universities globally and we welcome you to pursue yours!</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', margin: 'auto', width: 'fit-content' }}>
                        <button>Enquire Now</button>
                        <button style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <IoChevronDownCircle />
                            Branch Address
                        </button>

                    </div>
                </div>
            </div>

            <div>
                <h1>Services we provide</h1>

                <div class='services'>
                    <div>
                        <div class='srv'>
                            <div>
                                <p><IoIosCloudDownload /></p>
                            </div>
                            <div>
                                <p>Kamesh Hedau</p>
                            </div>
                        </div>

                        <div class='srv'>
                            <div>
                                <p><IoIosCloudDownload /></p>
                            </div>
                            <div>
                                <p>Kamesh Hedau</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class='srv'>
                            <div>
                                <p><IoIosCloudDownload /></p>
                            </div>
                            <div>
                                <p>Kamesh Hedau</p>
                            </div>
                        </div>

                        <div class='srv'>
                            <div>
                                <p><IoIosCloudDownload /></p>
                            </div>
                            <div>
                                <p>Kamesh Hedau</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '15px auto' }}>
                    <button>Enquire Now</button>
                </div>
            </div>

            <div class='services'>
                <div>
                    <img src={require('./image/services.png')} style={{ width: '80%' }} alt="" />
                </div>
                <div>
                    <div style={{ textAlign: 'start', width: '80%', margin: 'auto' }}>
                        <h4>Realize your global ambitions with us</h4>
                        <p>With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university even before you do!</p>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', }}>
                            <p><FaStar /></p>
                            <p>7 Easy Steps to Land in your Dream University</p>
                        </div>

                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', }}>
                            <p><FaStar /></p>
                            <p>7 Easy Steps to Land in your Dream University</p>
                        </div>

                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', }}>
                            <p><FaStar /></p>
                            <p>7 Easy Steps to Land in your Dream University</p>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ background: '#DBD9FF' }}>
                <br />
                <div style={{ margin: 'auto' }}>
                    <h1>7 Easy Steps to Land in your Dream University</h1>
                    <div>
                        <img src={require('./image/step.png')} alt="" />
                        <img src={require('./image/step.png')} alt="" style={{ filter: 'blur(2px)' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', margin: 'auto', width: 'fit-content' }}>
                        <button>Previous Step</button>
                        <button>Next Step</button>
                    </div>

                </div>

            </div>

            <div class='city'>
                <div class='city1'>
                    <div>
                        <div style={{ width: '100%' }}>
                            <img src={require('./image/city.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                        </div>
                        <div>
                            <div style={{ width: '90%', margin: 'auto', textAlign: 'start' }}>
                                <p style={{ fontSize: '12px' }}>Mar 19 · 05:00 PM to 07:30 PM</p>
                                <h3>USA Vertual Addmission Day</h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button>Register Now</button>

                            </div>
                            <br />
                        </div>

                    </div>
                </div>
                <div class='city2'>
                    <div class='city22'>
                        <div style={{ width: '100%' }}>
                            <img src={require('./image/city.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                        </div>
                        <div>
                            <div style={{ width: '90%', margin: 'auto', textAlign: 'start' }}>
                                <p style={{ fontSize: '12px' }}>Mar 19 · 05:00 PM to 07:30 PM</p>
                                <h3>USA Vertual Addmission Day</h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button>Register Now</button>

                            </div>
                            <br />
                        </div>
                    </div>

                    <div class='city22'>
                        <div style={{ width: '100%' }}>
                            <img src={require('./image/city.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                        </div>
                        <div>
                            <div style={{ width: '90%', margin: 'auto', textAlign: 'start' }}>
                                <p style={{ fontSize: '12px' }}>Mar 19 · 05:00 PM to 07:30 PM</p>
                                <h3>USA Vertual Addmission Day</h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button>Register Now</button>

                            </div>
                            <br />
                        </div>
                    </div>

                </div>

                <button>See More</button>
            </div>
            <br />

            <div style={{ background: '#ffdcd8' }}>
                <br />
                <h1>Our students love us</h1>
                <div class='loveSection'>

                    <HomeCourosal data={love()} />
                </div>
            </div>

        </div>
    )
}

export default Home