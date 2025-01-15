const { default: styled } = require("styled-components");

const StyledHero = styled.section`
    padding: 80px 15% 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 90vh;

    .presentation {
        flex: 1;
        max-width: 50vw;

        .title {
            display: flex;
            margin-bottom: 25px;
            h1 {
                font-size: 5rem;
                line-height: 1.2;
                position: relative;
                display: inline;
            }
            img {
                display: inline-block;
                vertical-align: baseline;
                margin-left: 20px; /* Ajoute un espace entre le mot et l'image */
            }

            .emoji-desktop {
                display: inline; /* Affiche sur grand écran */
            }

            .emoji-mobile {
                display: none; /* Masque sur grand écran */
            }

            @media (max-width: 768px) {
                .emoji-desktop {
                    display: none; /* Masque sur mobile */
            }
            
            .emoji-mobile {
                display: inline; /* Affiche sur mobile */
            }
            }
        }

        .text {
            max-width: 80%;
            margin-bottom: 50px;
            p {
                font-size: 18px;
                position: relative;
                display: inline;
            }
            img {
                display: inline-block;
                vertical-align: baseline;
                position: relative;
                top: 5px;
            }
        }

        .socials {
            display: flex;
            gap: 15px;
            
            a {
                cursor: pointer;
            }
        }
    }
    .imgContainer {
        flex: 1; /* Laisse l'image prendre l'espace restant */
        display: flex; /* Assure un positionnement centré */
        justify-content: center; /* Centrer l'image horizontalement */
        align-items: center; /* Centrer l'image verticalement */
        max-width: 50%; /* L'image prend jusqu'à 50% de la largeur */
        height: auto;

        img {
            width: 100%; /* L'image s'adapte à la largeur disponible */
            height: auto; /* Maintient le ratio d'aspect */
            object-fit: contain; /* Assure que l'image reste contenue dans son parent */
        }
    }

    @media (max-width: 800px) {
        flex-direction: column; /* Les éléments sont empilés verticalement */
        align-items: center; /* Centre les éléments dans la colonne */
        flex-wrap: nowrap;

        /* Texte en haut */
        .presentation {
            max-width: 100%; /* Le texte prend toute la largeur */
            margin-bottom: 20px; /* Ajoute un espace entre le texte et l'image */
        }

        /* Image en bas */
        .imgContainer {
            max-width: 100%; /* L'image prend toute la largeur */
            width: 100%;
            text-align: center; /* Centre l'image dans son conteneur */
        }

        .imgContainer img {
            width: 60%; /* L'image s'adapte à la largeur de l'écran */
            height: auto; /* Garde les proportions */
            max-width: 60%; /* Limite maximale pour ne pas trop grossir */
            transition: width 0.3s ease; /* Animation pour une transition fluide */
        }
    }


    @media (max-width: 580px) {
        height: auto;
        text-align: center;
        .presentation {
            flex: none;
            max-width: 100%;
            .title {
                h1 {
                    font-size: 2rem;
                }
                img {
                    width: 30px;
                    height: 30px;
                }
            }
            .text {
                max-width: 100%;
            }
            .socials {
                justify-content: center;
            }
        }

        .imgContainer {
            flex: none;
            max-width: 100%; /* À des résolutions plus petites, l'image prend toute la largeur */
            justify-content: center;
            img {
                width: 100%; /* L'image s'adapte encore */
                height: auto; /* Toujours conserver les proportions */
            }
        }

    }
`

export default StyledHero;