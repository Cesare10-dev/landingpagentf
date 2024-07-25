import { CheckIcon } from "@heroicons/react/24/solid";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Expert support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analitycs",
      "Expert capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          eligendi modi repellat, esse ad mollitia?
        </p>
        <div>
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              features,
              inverse,
            }) => (
              <div className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
                <h3 className="text-lg font-bold text-black/50">{title}</h3>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="font-bold text-black/50 tracking-tight">
                    /month
                  </span>
                </div>
                <button>{buttonText}</button>
                <ul>
                  {features.map((feature) => (
                    <li>
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
