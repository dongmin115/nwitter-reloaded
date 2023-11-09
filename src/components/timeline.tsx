import { collection, orderBy, query } from "firebase/firestore";
import {useState, useEffect} from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { getDocs } from "firebase/firestore";
import Tweet from "./tweets";

const Wrapper = styled.div``;

export interface ITweet {
    id: string;
    photo:string;
    tweet:string;
    userId:string;
    username:string;
    createdAt:number;
}

export default function Timeline() {
    const [tweets,setTweet] = useState<ITweet[]>([]);
    const fetchTweets = async () => {
        const tweetsQuery = query(
            collection(db,"tweets"),
            orderBy("createdAt","desc")
        );
        const snapshot = await getDocs(tweetsQuery);
        const tweets = snapshot.docs.map((doc) =>{
            const {id,tweet, createdAt, userId, username, photo } = doc.data();
            return {id,tweet, createdAt, userId, username, photo}
        });
        setTweet(tweets);
    };
    useEffect(()=>{
        fetchTweets();
    },[])
    return <Wrapper>
        {tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet}/>))}
    </Wrapper>;
}