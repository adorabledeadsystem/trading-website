import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.scss";
import Slider from "react-slick";
import user from '../../assert/users.jpg'

const Slide = ({ name, text, ...props }) => {
  return (
    <div {...props} >
      <div className={styles.slider}>
      <div className={styles.user}>
        <img src={user} alt="user" />
        <h2> Юрий {name}</h2>
      </div>
      <h3>{text}</h3>
     </div>
    </div>
  )
}

// const NextArrow = ({ onClick, style, className }) => {
//   return (
//     <div onClick={onClick} style={{ ...style, color: 'black', 'font-size': '20px' }} className={className}>⮕</div>
//   )
// }

// const PrevArrow = ({ onClick, style, className }) => {
//   return (
//     <div onClick={onClick} style={{ ...style, color: 'black', 'font-size': '20px' }} className={className}>⬅</div>
//   )
// }

export default function SimpleSlider() {
  var settings = {
    // arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <Slide name='Юрий' text='Благодаря Oaklion научился управлять своим капиталом и грамотно инвестировать.' />
      <Slide name='Петр' text='Одна из немногих платформ, которая не стоит на месте: добавляют новые активы, делают розыгрыши, выводят прибыль еще быстрее.' />
      <Slide name='Александр' text='Торгую уже год. Из плюсов хочу выделить понятный дизайн, оперативный вывод, турниры с реальными деньгами, высокий % выплат, возможность торговать на выходных. Однозначно рекомендую. Минусов не нашла.' />
      <Slide name='Захар' text='На платформе представляют множество обучающих материалов, что является полезным для новичков. За все время работы никаких нареканий.' />
      <Slide name='Анатолий' text='Совсем недавно начал работать с Oaklion. Есть активы, которых нет на других платформах. Хочу отметить возможность торговать по выходным.' />
      <Slide name='Ольга' text='Была удивлена, когда узнала о торговой комнате. Понятная аналитика рынка, самые свежие новости, советы по торговле и многое другое. Вместе с Oaklion я смогла повысить свой уровень знаний.' />
      <Slide name='Владислав' text='Помимо торговли, хотел бы рассказать про службу поддержки. Если у вас будет какая нибудь проблема или вопрос вы смело можете обращаться и вам  оперативно решат или ответят на вопрос.' />
      <Slide name='Олег' text='На платформе присутствует трейдбек. Всё зависит от статуса, мне возвращают 15%.' />
    </Slider>
  );
}
