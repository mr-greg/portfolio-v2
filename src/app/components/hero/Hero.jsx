'use client';
import StyledHero from './StyledHero';
import Image from 'next/image';

export default function Hero() {
    const handleCopy = async () => {
        try {
          // Attempt to copy the text to clipboard
          await navigator.clipboard.writeText("gregory.drv@gmail.com");
    
          // Optional: Provide user feedback (you can use a toast or alert for UX)
          alert('E-mail copiée dans le presse-papier, merci :)');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    };

    return(
        <StyledHero>
            <div className='presentation'>
                <div className="title">
                    <h1>
                        Développeur Web
                        {/* <Image src={"/img/wave.png"} alt="emoji signe de main" width={58} height={58}/> */}
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="58" height="58" />
                        </picture>
                    </h1>
                </div>
                <div className="text">
                    <p>
                        Hello, je suis Grégory Dervyn. Un passionné de <strong>développement web</strong>, situé en France
                        <Image src={"/img/pin.png"} alt="emoji pin location" width={25} height={25}/>
                    </p>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/gregory-dervyn/" target='_blank'>
                        <Image src={"/img/linkedin.svg"} alt="linkedin icon link" width={35} height={35}/>
                    </a>
                    <a href="https://github.com/mr-greg" target='_blank'>
                        <Image src={"/img/github.svg"} alt="github icon link" width={35} height={35}/>
                    </a>
                    <a onClick={handleCopy}>
                        <Image src={"/img/mail.png"} alt="mail icon link" width={35} height={35}/>
                    </a>
                </div>
            </div>
            <div className='imgContainer'>
                <Image
                    src={"/img/isometric-desktop.png"} 
                    alt="office developer room illustration" 
                    width={550} 
                    height={400}
                    priority
                />
            </div>
        </StyledHero>
    )
}