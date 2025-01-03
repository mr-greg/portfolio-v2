const { default: styled } = require("styled-components");

const StyledAbout = styled.section`
    padding: 50px 15%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: auto;

    h2 {
        text-align: center;
        margin: 0 auto 40px;
        font-size: 2rem;
    }

    .about-container {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 30px;

        .text-container {
            flex: 1;
            max-width: 50%; /* Le texte prend jusqu'à 50% de l'espace */
            p {
                font-size: 18px;
                margin-bottom: 20px;
                line-height: 1.6;

                strong {
                    font-weight: bold;
                }

                img {
                    display: inline-block;
                    vertical-align: bottom;
                    position: relative;
                    margin-left: 5px; /* Ajoute un espace entre le texte et l'image */
                    max-width: 25px;
                }
            }
        }

        img {
            flex: 1;
            max-width: 50%; /* L'image prend jusqu'à 50% de l'espace */
            height: auto;
            object-fit: contain;
        }
    }

    .interest-wrapper {
        text-align: center;
        margin: 35px auto 0;

        .heart-emoji {
            margin-bottom: 25px;
        }

        .interest {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;

            div {
                border: 1px solid var(--orange);
            }

            div:hover {
                color: var(--orange);
                background-color: white;
                .icon {
                    color: var(--orange);
                }
            }
        }
    }


    /* Responsive pour tablettes */
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;

        .about-container {
            flex-direction: column; /* Empile l'image et le texte verticalement */
            .text-container {
                max-width: 100%; /* Le texte prend toute la largeur */
            }
            img {
                max-width: 80%; /* L'image prend moins de largeur */
            }
        }
    }

    /* Responsive pour mobiles */
    @media (max-width: 580px) {
        .about-container {
            .text-container {
                p {
                    font-size: 16px; /* Réduit la taille de la police pour mobile */
                }
            }
            img {
                max-width: 100%; /* L'image s'adapte à toute la largeur */
            }
        }
    }
`;

export default StyledAbout;
