import style from './Footer.module.scss'

export function Footer() {

    
    return(
        <footer className={style.footerStyle}>
                <form>
                    <h2>Nyhedsbrev</h2>
                    <p>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev og få de seneste klima opdateringer direkte i din indbakke</p>
                    <input type="email" placeholder="Email"></input>
                    <input type="submit" value="Tilmeld"></input>
                </form>
            <section>
                <h3>Kontakt</h3>
                <p>Redningen 32</p>
                <p>2210 Vinterby Øster</p>
                <br />
                <p>Email: dga@info.dk</p>
                <p>+45 88229422</p>
            </section>

            <section>
                <h5>FN's Verdensmål</h5>
                <p>Vi støtter på organisatorisk plan op om FN´s verdensmål og har derfor besluttet at en del af overskuddet går direkte til verdensmål nr. 13; Klimahandling</p>
                <p><a href="https://www.unhcr.org/nordic-and-baltic/da/fn-verdensmal-og-mennesker-pa-flugt?gad_source=1&gad_campaignid=23653126693&gbraid=0AAAAACyI4K94H72NhljaD5CHAqbEns7hM&gclid=CjwKCAjw-rTUBhAiEiwADv8gBERGkBwrbp3754haHJfUkDuz5hz8WAXNRw5p2T2TFbhzayzidhVF_hoC52cQAvD_BwE">Læs mere om verdensmålene her</a></p>

            </section>
        </footer>

    )
}