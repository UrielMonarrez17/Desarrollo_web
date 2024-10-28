import "../styles/mainPage.css" 
import "../styles/Command_container.css";
import "../styles/Courses_in_main.css";

import fuego from "../images/fuego.png";
import mascota from "../images/Mascota.png";
import duolingo from "../images/Duolingo.png";
import udemy from  "../images/Udemy.png";



function Home(){
    return (
        <>
      <div className="main">
        <div className="content">
          <div className="Flex_Vertical">
            <div className="Flex_Horizontal">
              <div>
                <h3 className="Lema">
                  "Anyone with the right means can achieve anything" -DinoVision
                </h3>
                <img
                  alt="Imagen de la mascota"
                  src={mascota}
                  width="400px"
                />
              </div>

              <div className="Lista_description_container">
                <h3>Goaling to</h3>
                <ul className="Lista_descripcion">
                  <li>
                    <strong>Inspire a sense of personal agency</strong>
                  </li>
                  Encourage individuals to take control of their own success.
                  <li>
                    <strong>Emphasize determination</strong>
                  </li>
                  Highlight the importance of persistence in overcoming
                  challenges.
                  <li>
                    <strong>Value knowledge and tools</strong>
                  </li>
                  Stress the role of education and resources in achieving goals.
                  <li>
                    <strong>Promote overcoming obstacles</strong>
                  </li>
                  Suggest that with the right support, any challenge can be
                  conquered.
                </ul>
              </div>
            </div>
            <div className="ranking-table-container">
              <h3>Ranking de DinoLearners</h3>
              <table className="ranking-table">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Strike Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Juan Pérez</td>
                    <td>
                      <img
                        alt="Imagen de la mascota"
                        src={fuego}
                        width="20px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>María López</td>
                    <td>
                      <img
                        alt="Imagen de la mascota"
                        src="Images\fuego.png"
                        width="20px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Andrés Gómez</td>
                    <td>
                      <img
                        alt="Imagen de la mascota"
                        src="Images\fuego.png"
                        width="20px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Lucía Martínez</td>
                    <td>
                      <img
                        alt="Imagen de la mascota"
                        src="Images\fuego.png"
                        width="20px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Carlos Sánchez</td>
                    <td>
                      <img
                        alt="Imagen de la mascota"
                        src="Images\fuego.png"
                        width="20px"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2>Categorias</h2>
        <div className="display">
          <div className="class-container">
            <a href="Views\Courses\Courses_view.html" className="class-box">
              <div className="image-section">
                <img src={duolingo} alt="Página 1" />
              </div>
              <div className="text-section">
                <h2>Duolingo</h2>
              </div>
            </a>

            <a href="Views\Courses\Courses_view.html" className="class-box">
              <div className="image-section">
                <img src={udemy} alt="" />
              </div>
              <div className="text-section">
                <h2>Udemy</h2>
              </div>
            </a>

            <a href="Views\Courses\Courses_view.html" className="class-box">
              <div className="image-section">
                <img src={udemy} alt="" />
              </div>
              <div className="text-section">
                <h2>Udemy</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      
    </>
    );
}
export default Home;