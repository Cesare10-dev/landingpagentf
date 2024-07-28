import avatar1 from "@/assets/img1.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, modi facilis aspernatur deserunt incidunt vero.",
    imageSrc: avatar1.src,
    name: "John Doe",
    username: "@johndoe",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ text, imageSrc, name, username }) => (
      <div key={username} className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="tracking-tight leading-5">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            recusandae voluptatum possimus, incidunt eum officiis?
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
