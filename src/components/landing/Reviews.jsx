import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "components/general/Container"
import Icon from "components/general/Icon"
import Title from "components/general/Title"

import lines from "assert/lines_3.png"

const Review = ({ name, text }) => {
    return (
        <div className="max-w-md">
            <Icon className="mb-6" name="person" width="38" height="46" />
            <div className="mb-8 font-bold text-xl">{name}</div>
            <p className="text-xl">{text}</p>
        </div>
    )
}

const NextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, "marginRight": "36px"}}
        onClick={onClick}
      >
        <Icon name="slider_arrow" width="52" height="52" />
      </div>
    );
  }
  

const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: null,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: null,
                    dots: true
                }
            }
        ],
    }

    return (
        <div className="relative">
            <img src={lines} className="hidden lg:block w-1/5 absolute right-0 -bottom-44" />
            <Container>
                <div className="py-16">
                    <Title>Отзывы</Title> 
                    <Slider {...settings}>
                        <Review name="Иван Петров" text="На платформе присутствует трейдбек. Все зависит от статуса, мне возвращается 15%." />
                        <Review name="Гордей Афанян" text="Благодаря Oaklion научился управлять своим капиталом и грамотно инвестировать." />
                        <Review name="Иван Петров" text="На платформе присутствует трейдбек. Все зависит от статуса, мне возвращается 15%." />
                        <Review name="Гордей Афанян" text="Благодаря Oaklion научился управлять своим капиталом и грамотно инвестировать." />
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Reviews