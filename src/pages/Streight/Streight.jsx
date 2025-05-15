import "../DavidHornell/DavidHornell.scss";
import streight from "../../assets/images/history/streight.jpg";
import article from "../../assets/images/history/streight-newspaper.jpg";

function Streight() {
  return (
    <div className="history">
      <h1 className="history__title">Col. J.E.L. Streight</h1>
      <div className="history__textGroup">
        <img src={streight} className="history__image" />
        <p className="history__textDesktop">
          Col. J.E.L. Streight Led an Honourable Life in Islington
          <br />
          <br />
          Many of you are familiar with the Colonel J.E.L. Streight branch of
          the Royal Canadian Legion on Jutland Road, or have seen Streight Lane
          running east off Kipling Avenue north of Six Points. But who was
          Colonel Streight and why was he chosen for these honours?
          <br />
          <br />
          John Everett Lyle Streight was born in Islington in 1880 and lived on
          Cordova (originally Canning) Avenue his entire life. His father,
          David, owned a lumber business on the west side of Cordova, north of
          the CPR tracks. The family home was adjacent to the business.
          <br />
          <br />
          J.E.L. joined the army at 18, and enjoyed a 46-year military career.
          When the Boer War started, he signed up with the Canadian Mounted
          Rifles as a trooper. After the war, he joined the South African
          Constabulary. During the Natal-Zululand Rebellion, he again saw action
          and was badly wounded. He returned to Islington in 1908 and took over
          his father’s lumber business. When World War I began he served as a
          Captain with the 3rd Battalion in France. At the Battle of Ypres, he
          was captured by the enemy and sent to 13 different POW camps in
          Germany. He managed to escape – and be recaptured – seven times. When
          repatriated to England, he was decorated by King George V with the
          Military Cross for his service at Vimy and promoted to Major.
          <br />
          <br />
          Streight came home to Islington to work in his business once again and
          to serve in the Governor General’s Body Guard. In 1921, he retired
          from the lumber business and ran for federal office as a Liberal, but
          was defeated. Around 1925, he built his new home, an Arts and Crafts
          bungalow, at 68 Cordova Avenue seen in the above photo taken in 1935
          when the house was decorated to celebrate the Silver Jubilee of King
          George V and Queen Mary.
        </p>

        <p className="history__textTablet">
          Col. J.E.L. Streight Led an Honourable Life in Islington
          <br />
          <br />
          Many of you are familiar with the Colonel J.E.L. Streight branch of
          the Royal Canadian Legion on Jutland Road, or have seen Streight Lane
          running east off Kipling Avenue north of Six Points. But who was
          Colonel Streight and why was he chosen for these honours?
          <br />
          <br />
          John Everett Lyle Streight was born in Islington in 1880 and lived on
          Cordova (originally Canning) Avenue his entire life. His father,
          David, owned a lumber business on the west side of Cordova, north of
          the CPR tracks. The family home was adjacent to the business.
        </p>
        <p className="history__textTablet--citation">
          J.E.L. joined the army at 18, and enjoyed a 46-year military career.
          When the Boer War started, he signed up with the Canadian Mounted
          Rifles as a trooper. After the war, he joined the South African
          Constabulary. During the Natal-Zululand Rebellion, he again saw action
          and was badly wounded. He returned to Islington in 1908 and took over
          his father’s lumber business. When World War I began he served as a
          Captain with the 3rd Battalion in France. At the Battle of Ypres, he
          was captured by the enemy and sent to 13 different POW camps in
          Germany. He managed to escape – and be recaptured – seven times. When
          repatriated to England, he was decorated by King George V with the
          Military Cross for his service at Vimy and promoted to Major.
        </p>

        <p className="history__textTablet--citation">
          Streight came home to Islington to work in his business once again and
          to serve in the Governor General’s Body Guard. In 1921, he retired
          from the lumber business and ran for federal office as a Liberal, but
          was defeated. Around 1925, he built his new home, an Arts and Crafts
          bungalow, at 68 Cordova Avenue seen in the above photo taken in 1935
          when the house was decorated to celebrate the Silver Jubilee of King
          George V and Queen Mary.
        </p>
        <p className="history__text--citation">
          Streight was appointed Lieutenant Colonel in 1927 and full Colonel in
          1933. He ran for federal office again in 1935 and won by 60 votes. He
          was honoured to command the Canadian contingent attending the
          coronation of King George VI in London in 1937. Streight retired from
          politics in 1940 and from the military in 1944. In 1949, he married
          for the first time to Margaret Elizabeth Galloway, a teacher 33 years
          his junior.
        </p>
        <p className="history__text--citation">
          Streight passed away in 1955, remembered for “his exemplary life” and
          having led “one of the most adventurous careers of any man in Canada’s
          public life”, while “never forgetting his roots in Islington.” His
          widow, Elizabeth, sold the house in 1956 to the Warren family who
          lived there until selling it to a developer in 1969. The house was
          demolished by 1972 to build apartments on Mabelle Avenue. Streight’s
          former property now sits under a TTC parking lot. Elizabeth taught at
          Burnhamthorpe Collegiate and lived in an apartment in Islington until
          her death in 2001. John and Elizabeth Streight are buried together in
          Park Lawn Cemetery.
        </p>
        <p className="history__text--citation">
          ​Researched & Written by Denise Harris, originally published by the
          Etobicoke Guardian and reprinted with permission.
        </p>
        <div className="history__articleGroup">
          <h2 className="history__subtitle">
            Col. J.E.L. Streight, written by Tom Godfrey
          </h2>
          <p className="history__textArticle">
            March 2020, The South Etobicoke News
          </p>
          <img className="history__article" src={article} />
        </div>
      </div>
    </div>
  );
}

export default Streight;
