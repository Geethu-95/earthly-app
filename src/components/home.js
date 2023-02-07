import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/styles.css";
import tree from "../images/tree.jpg";
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <>
      <article
        style={{
          backgroundImage: `url(${tree})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "629px",
          alignItems: "center",
          display:'grid'
        }}
      >
        <p
          style={{
            fontSize: "50px",
            color: "orange",
            fontFamily: "arial black",
            textAlign:'center',
          }}
        >
          <Typewriter
            words={[
              "Living sustainably shouldn't be expensive. Become sustainable!",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <article>
        <Button variant="danger" size="lg" style={{fontFamily:'arial black'}}>Start Today</Button>
        </article>
        
         
      </article>
    </>
  );
}
