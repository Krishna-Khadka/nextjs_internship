
import CardLayout from "@/components/CardLayout";
import image3 from "../../public/herobg.png"
import image5 from "../../public/image5.jpg"

const CardData = [
  {
    image: image3,
    alt: 'demo1',
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  },
  {
    image: image5,
    alt: 'demo 2',
    title: 'The Coldest Sunset 2',
    description: 'Hello World.',
  },

];

export default function Home() {
  return (
    <>
      <CardLayout data={CardData} />
    </>
  );
}
