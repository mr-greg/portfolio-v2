'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image' // Importation du composant Image de Next.js
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButtons'

const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const slides = [
    {
      image: '/img/projects/project-ij.png',
      alt: 'Capture d\'écran du site infojeune val d\'oise',
      title: 'InfoJeunes Val d\'Oise',
      text: 'Spécialiste et généraliste de l’information depuis plus de 40 ans au niveau départemental, Info Jeunes Val d’Oise est une association d’intérêt général à destination des publics jeunes. Ce site web comprend de nombreux blog post, une connexion API à des annonceurs et de multiples pages.',
      link: 'https://infojeunes.valdoise.fr/'
    },
    {
      image: '/img/projects/project-campus.png',
      alt: 'Capture d\'écran du site passcampus',
      title: 'Pass Campus',
      text: 'Le Pass Campus est un dispositif proposé par la Communauté d’Agglomération de Cergy-Pontoise, permettant d’avoir des réductions auprès de plus de 30 acteurs locaux du Sport, de la Culture et des Loisirs. Site vitrine OnePage avec connexion API au système de paiement.',
      link: 'https://www.passcampus.info/'
    },
    {
      image: '/img/projects/project-iae.png',
      alt: 'Capture d\'écran du site IAE 95',
      title: 'IAE 95',
      text: 'Les structures d\'insertion par l\'activité économique dans le Val-d\'Oise, conventionnées par l\'État, accueillent et accompagnent des travailleurs éloignés de l\'emploi. Ce site comprends un grand nombre de pages, quelques call API et un gros système de gestion de données affichées sous forme de blog.',
      link: 'https://iae95.fr/'
    },
    {
      image: '/img/projects/project-lol.png',
      alt: 'Capture d\'écran du site LoL AI Regions',
      title: 'LoL AI Regions',
      text: 'J’ai réalisé ce site du design au développement, il comprends un scroll horizontal avec toutes les régions du jeu League of Legends, imaginée par l’IA Midjourney. Il comprends également un mini-jeu devinette pour la citation du champion citée pour chaque région, disponible en Anglais et en Français.',
      link: 'https://lol-ai-region.vercel.app/'
    },
    {
      image: '/img/projects/project-cards.png',
      alt: 'Capture d\'écran du site lol cards collector',
      title: 'League Card Collector',
      text: 'Ce site fonctionne en harmonie avec mon bot discord qui permet, toutes les 3 heures, de tirer au hasard une carte correspondant à un cosmétique du jeu League of Legends et les collectionner. L\'URL est dynamique, prenant en argument l\'ID utilisateur discord pour afficher son inventaire.',
      link: 'https://willowy-choux-e66dc3.netlify.app/inventory/281570140888367114'
    }
  ]

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        const tweenNode = tweenNodes.current[slideIndex]
        if (tweenNode) {
          tweenNode.style.transform = `translateX(${translate}%)`
        }
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)

    // Nettoyage anti doublon
    return () => {
    emblaApi.off('reInit', setTweenNodes)
    emblaApi.off('reInit', setTweenFactor)
    emblaApi.off('reInit', tweenParallax)
    emblaApi.off('scroll', tweenParallax)
    emblaApi.off('slideFocus', tweenParallax)
    }
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax])

  return (
    <div className="project-wrapper" id='projets'>
        <h2>Projets</h2>
        <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            {slides.map((slide, index) => (
                <div className="embla__slide" key={index}>
                <div className="embla__parallax">
                    <div className="embla__parallax__layer">
                    <div className="slide-content">
                        <a href={slide.link} target='_blank'>
                            <Image
                            className="embla__slide__img embla__parallax__img"
                            src={slide.image}
                            alt={slide.alt}
                            //   layout="responsive"
                            width={600}
                            height={350}
                            priority={index === 0} // Priorise le premier slide
                            />
                        </a>
                        
                        <div className="slide-overlay">
                        <h3>{slide.title}</h3>
                        <p>{slide.text}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className="embla__controls">
            <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default EmblaCarousel
