const { default: styled } = require("styled-components");

const StyledHeader = styled.header`
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
export default StyledHeader