import React from 'react';
import avatar from '../../assets/avatar.png';
export default function Aboutme() {
  return (
    <div class="aboutmecontainer">
      <h1>About me</h1>
      <img className="avatar" src={avatar} width="250px" alt="my AI-generated avatar"></img>
      <p>
        I am currently in my 10th week of University of California Berkeley Web Development (coding) bootcamp.
        I hope to graduate soon and be practicing on the knowledge and skills while exploring the industry further.
        I have learned so much during this bootcamp, not only coding itself but how to manage time, how to work in teams and
        how to work with people.
        I have also learned new technologies for communication such as Slack,
        some project management tools such as Github board, Lucid Chart and Google Docs.
        I have learned to make videos and GIFs of what my applications look and behave.
        It has been an invaluable 3 months spent. It was probably the most difficult thing I have ever done in my life!
        I am very happy I did this, and I cannot be more proud of myself knowing I will graduate very soon.
      </p>
    </div>
  );
}
