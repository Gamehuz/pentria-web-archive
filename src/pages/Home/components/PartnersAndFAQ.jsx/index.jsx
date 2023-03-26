import styles from "./partnersandfaq.module.scss"
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg"
import curledArrow from "../../assets/curledArrow.png"
import partnersImg from "../../assets/partnersImg.png"

const PartnersAndFAQ = () => {
    const explorables = [{}, {}, {}, {}, {}];

    const faqs = [
        {
            id: 1,
            name: "How can I reserve playtime in one click?",
            detail: "Give me attention or face the wrath of my claws give me attention or face the wrath of my claws and pretend not to be evil cats go for world domination allways wanting food"
        },
        {
            id: 2,
            name: "Why should I pay online?",
            detail: "Give me attention or face the wrath of my claws give me attention or face the wrath of my claws and pretend not to be evil cats go for world domination allways wanting food"
        },
        {
            id: 3,
            name: "What payment methods can I use?",
            detail: "Give me attention or face the wrath of my claws give me attention or face the wrath of my claws and pretend not to be evil cats go for world domination allways wanting food"
        },
        {
            id: 4,
            name: "Can I cancel my bookings?",
            detail: "Give me attention or face the wrath of my claws give me attention or face the wrath of my claws and pretend not to be evil cats go for world domination allways wanting food"
        },
        {
            id: 5,
            name: "What else can I do on Pentria?",
            detail: "Give me attention or face the wrath of my claws give me attention or face the wrath of my claws and pretend not to be evil cats go for world domination allways wanting food"
        }
    ];
    return (
        <section className={styles.partnersAndFAQ}>
            <div>
                <div className={styles.partnersHeader}>
                    <span></span>
                    <h4>PARTNERS</h4>
                </div>
                <div className={styles.partners}>
                    <div className={styles.sales}>
                        <span>More Visibility,<br />Increased Sales, <br />Better Experience</span>
                        <span>Manage time and streamline revenue better. Improve customer experience with one-click ticket reservations.</span>
                    </div>
                    <img src={curledArrow}  alt="curled arrow design"/>
                    <div className={styles.learnMore}>
                        <span></span>
                        <p>Learn more</p>
                    </div>
                </div>
            </div>
            <div className={styles.FAQ}>
                <h5>FAQs</h5>
                <p>Frequently Asked Questions</p>
                <div>
                    <div>
                    {
                        faqs.map((faq) => {
                            return (
                                <details key={faq.id}>
                                    <summary>
                                        <span>{faq.name}</span>
                                        <div className={styles.chevronright}>
                                            <RightArrow />
                                        </div>
                                    </summary>
                                    <span>{faq.detail}</span>
                                    <div className={styles.chevronleft}>
                                        <LeftArrow />
                                    </div>
                                </details>
                            )
                        })
                    }
                    </div>
                    <img src={partnersImg} />
                </div>
            </div>

        </section>
    )
}

export default PartnersAndFAQ;