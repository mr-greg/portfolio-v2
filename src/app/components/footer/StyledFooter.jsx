const { default: styled } = require("styled-components");

const StyledFooter = styled.footer`
    padding: 25px 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 4%);

    .name {
        h4 {
        font-weight: 800;
        font-size: 18px;
        font-family: 'Poppins';
    }
    }

    .menu {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        align-items: baseline;

        .nav-container {
            display: flex;
            gap: 25px;

            .footer-project {
                position: relative;
                display: inline-block;
            }
            .footer-project::before {
                transform: translateX(-50%);
                border-radius: 100%;
                position: absolute;
                background: #E85E5E;
                top: 30px;
                height: 4px;
                width: 4px;
                content: '';
                left: 50%;
            }

            a {
                font-weight: 400;
                font-size: 18px;
                cursor: pointer;
            }
            button {
                cursor: pointer;
            }
        }

        button {
            background-color: var(--orange);
            border: none;
            border-radius: 25px;
            padding: 10px 25px;
            color: white;
            font-weight: 600;
            cursor: pointer;          
        }
    }

    @media (max-width: 670px) {
        .menu {
            margin-top: 5px;
        }
    }

`
export default StyledFooter