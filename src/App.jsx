import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<div>

<header>

    <a href="#" class="logo">eco<span class="fas fa-globe-asia"></span>va</a>

    <div id="menu" class="fas fa-bars"></div>

    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#project">project</a>
        <a href="#donate">donate</a>
        <a href="#team">team</a>
        <a href="#testimonial">testimonial</a>
        <a href="#events">events</a>
    </nav>

</header>



<section class="home" id="home">

    <div class="content">
        <h3>save the planet</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quidem quae debitis reiciendis, nihil error? Doloribus dicta aliquam quidem excepturi.</p>
        <a href="#" class="btn">get started</a>
    </div>

</section>



<div class="icons-container">

    <div class="icons">
        <img src="images/icon1.png" alt="">
        <h3>recycle</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde itaque consequatur, quis corporis ad sequi nihil nam rerum! Odio, at!</p>
        <a href="#" class="btn">learn more</a>
    </div>

    <div class="icons">
        <img src="images/icon2.png" alt="">
        <h3>solar panel</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde itaque consequatur, quis corporis ad sequi nihil nam rerum! Odio, at!</p>
        <a href="#" class="btn">learn more</a>
    </div>

    <div class="icons">
        <img src="images/icon3.png" alt="">
        <h3>save water</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde itaque consequatur, quis corporis ad sequi nihil nam rerum! Odio, at!</p>
        <a href="#" class="btn">learn more</a>
    </div>

    <div class="icons">
        <img src="images/icon4.png" alt="">
        <h3>windmill</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde itaque consequatur, quis corporis ad sequi nihil nam rerum! Odio, at!</p>
        <a href="#" class="btn">learn more</a>
    </div>

</div>



<section class="project" id="project">

    <h1 class="heading">our projects</h1>

    <div class="box-container">

        <div class="box">
            <img src="images/project-1.jpg" alt="">
            <h3 class="title">planting tress</h3>
            <div class="info">
                <h3>planting tress</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="images/project-2.jpg" alt="">
            <h3 class="title">wind energy</h3>
            <div class="info">
                <h3>wind energy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="images/project-3.jpg" alt="">
            <h3 class="title">saving animals</h3>
            <div class="info">
                <h3>saving animals</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="images/project-4.jpg" alt="">
            <h3 class="title">recyling waste</h3>
            <div class="info">
                <h3>recyling waste</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</p>
                <a href="#">read more</a>
            </div>
        </div>

    </div>

</section>



<section class="donate" id="donate">

    <div class="box-container">

        <div class="box">
            <i class="fas fa-users"></i>
            <h3>1000+</h3>
            <p>volunteers involved</p>
        </div>

        <div class="box">
            <i class="fas fa-tree"></i>
            <h3>4500+</h3>
            <p>trees planted</p>
        </div>

        <div class="box">
            <i class="fas fa-paw"></i>
            <h3>420+</h3>
            <p>animals saved</p>
        </div>

        <div class="box">
            <i class="fas fa-solar-panel"></i>
            <h3>730+</h3>
            <p>solar panels</p>
        </div>

    </div>

    <div class="donate-box">
        <h3>donation amount</h3>
        <div class="amount">
            <input class="active" type="button" value="$5">
            <input type="button" value="$10">
            <input type="button" value="$20">
            <input type="button" value="$25">
            <input type="button" value="$50">
            <input type="button" value="$100">
            <input type="button" value="$500">
            <input type="text" placeholder="$ other">
        </div>
        <a href="#" class="btn">donate now</a>
    </div>

</section>



<section class="team" id="team">

    <h1 class="heading">our team</h1>

    <div class="box-container">

        <div class="box">
            <img src="images/team1.jpg" alt="">
            <div class="info">
                <h3>Sanju Dalal</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team2.jpg" alt="">
            <div class="info">
                <h3>Soham Dalal</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team3.jpg" alt="">
            <div class="info">
                <h3>Jack Deo</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team4.jpg" alt="">
            <div class="info">
                <h3>Alex Jalam</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team5.jpg" alt="">
            <div class="info">
                <h3>Jhon Deo</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team6.jpg" alt="">
            <div class="info">
                <h3>Sayan Roy</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team7.jpg" alt="">
            <div class="info">
                <h3>Aliya Roy</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

        <div class="box">
            <img src="images/team8.jpg" alt="">
            <div class="info">
                <h3>Zara Khan</h3>
                <p>web designer</p>
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                </div>
            </div>
        </div>

    </div>
    
</section>



<section class="testimonial" id="testimonial">

    <h1 class="heading">testimonials</h1>

    <div class="box-container">

        <div class="box">
            <div class="comment">
                <i class="fas fa-quote-left"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sequi libero quasi natus fugit laboriosam architecto atque. Aliquid, repudiandae neque.  </p>
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="user">
                <img src="images/pic1.png" alt="">
                <h3>web designer</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="comment">
                <i class="fas fa-quote-left"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sequi libero quasi natus fugit laboriosam architecto atque. Aliquid, repudiandae neque.  </p>
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="user">
                <img src="images/pic2.png" alt="">
                <h3>web designer</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="comment">
                <i class="fas fa-quote-left"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sequi libero quasi natus fugit laboriosam architecto atque. Aliquid, repudiandae neque.  </p>
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="user">
                <img src="images/pic3.png" alt="">
                <h3>web designer</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>

        <div class="box">
            <div class="comment">
                <i class="fas fa-quote-left"></i>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sequi libero quasi natus fugit laboriosam architecto atque. Aliquid, repudiandae neque.  </p>
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="user">
                <img src="images/pic4.png" alt="">
                <h3>web designer</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>

    </div>

</section>

<!-- testimonial section ends -->

<!-- events section starts  -->

<section class="events" id="events">

    <h1 class="heading">our events</h1>

    <div class="box-container">

        <div class="box">
            <img src="images/event1.jpg" alt="">
            <div class="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" class="title">saving the environment and planting the tress</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</p>
                <a href="#" class="btn">participate</a>
            </div>
        </div>

        <div class="box">
            <img src="images/event2.jpg" alt="">
            <div class="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" class="title">saving the environment and planting the tress</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</p>
                <a href="#" class="btn">participate</a>
            </div>
        </div>

        <div class="box">
            <img src="images/event3.jpg" alt="">
            <div class="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" class="title">saving the environment and planting the tress</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</p>
                <a href="#" class="btn">participate</a>
            </div>
        </div>

        <div class="box">
            <img src="images/event4.jpg" alt="">
            <div class="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" class="title">saving the environment and planting the tress</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</p>
                <a href="#" class="btn">participate</a>
            </div>
        </div>

        <div class="box">
            <img src="images/event5.jpg" alt="">
            <div class="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" class="title">saving the environment and planting the tress</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</p>
                <a href="#" class="btn">participate</a>
            </div>
        </div>

        <div class="box">
            <img src="images/event6.jpg" alt="">
            <div class="content">
                <h3>1 may, 2021 / 09:00am to 06:00pm</h3>
                <a href="#" class="title">saving the environment and planting the tress</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</p>
                <a href="#" class="btn">participate</a>
            </div>
        </div>

    </div>

</section>


<div class="footer">

    <div class="box-container">

        <div class="box">
            <h3>about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, neque nemo dolorem eius id laudantium maxime dicta impedit fuga rem?</p>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">project</a>
            <a href="#">donate</a>
            <a href="#">team</a>
            <a href="#">testimonial</a>
            <a href="#">events</a>
        </div>

        <div class="box">
            <h3>contact us</h3>
            <p> <i class="fas fa-phone"></i> +91 9733529837 </p>
            <p> <i class="fas fa-envelope"></i> barson0habra@gmail.com </p>
            <p> <i class="fas fa-map-marker-alt"></i> kolkata, india - 700001 </p>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">youtube</a>
            <a href="#">linkedin</a>
        </div>

    </div>

    <h1 class="credit"> created by <a href="#"> Soham Dalal </a> | all rights reserved@2023 </h1>

</div>


</div>  
    </>
  )
}

export default App