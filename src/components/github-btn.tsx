import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Button = styled.span`
    background-color: white;
    margin-top: 50px;
    font-weight:500;
    border:0;
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 50px;
    display:flex;
    gap:5px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
`;

const Logo = styled.img`
    height: 25px;
`;

export default function GitHubButton(){
    const navigate = useNavigate();
    const onClick = async () =>{
        try {
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth,provider);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }
    return <Button onClick={onClick}>
        <Logo src="/github-logo.svg"/>
        Continue with GitHub
    </Button>
}