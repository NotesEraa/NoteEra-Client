import { useState, useEffect, useCallback } from "react";
import { getRazorPay, loadRazorPay } from "../../../../../utils/razorpay";
import { createOrder, verifyPayment } from "../../../../../utils/modules";
import Carousel from "../../../../../components/Carousel/Carousel";
import HeroBackground from "../../../components/HeroBackground/HeroBackground";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import PreviewCard from "./PreviewCard";
import PurchaseForm from "./PurchaseForm";
import styles from "./HeroSection.module.css";

const formatNewLine = (text) => {
  const formattedText = text.replace(/\n/g, "<br />");
  return formattedText;
};

const HeroSection = ({ module, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState("soft");
  const [razorOpts, setRazorOpts] = useState(null);
  const [orderToken, setOrderToken] = useState(null);

  useEffect(() => {
    loadRazorPay();
  }, []);

  const handlePayNow = useCallback(
    (user) => {
      setIsModalOpen(false);
      const rzp = getRazorPay({
        ...razorOpts,
        prefill: { contact: `+91${user.contactNumber}` },
        notes: { ...user, purchaseType, id: module.slug },
        theme: {
          color: "#22b286",
        },
        handler: async ({
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        }) => {
          verifyPayment({
            ...user,
            token: orderToken,
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            signature: razorpay_signature,
          });
        },
      });
      rzp.on("payment.failed", (response) => {
        console.log("Payment Failed:", response);
      });
      rzp.open();
    },
    [razorOpts, module.slug, purchaseType, orderToken],
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handlePurchase = useCallback(
    async (type) => {
      setPurchaseType(type);
      setIsModalOpen(true);

      const { token, order_id, amount, currency, key, name, description } =
        await createOrder(module.slug, type);
      setOrderToken(token);

      setRazorOpts({ order_id, amount, currency, key, name, description });
    },
    [module.slug],
  );

  return (
    <section className={`${styles.section} ${className}`}>
      <HeroBackground>
        <div
          className={`${styles.wrapper} container d-flex flex-column gap-5 overflow-hidden`}
        >
          <div
            className={`${styles.mainContainer} d-flex justify-content-between`}
          >
            <div className={`${styles.previewContainer}`}>
              <Carousel
                loop
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                centeredSlides={true}
                navigation
                keyboard={{ enabled: true, onlyInViewport: true }}
                slideClasses="mx-auto"
              >
                {module.previews.map(({ previewSrc }, index) => (
                  <PreviewCard
                    imgSrc={previewSrc}
                    imgAlt={`Preview ${index + 1}`}
                    key={index}
                  />
                ))}
              </Carousel>
            </div>
            <div className={`${styles.textContainer} d-flex flex-column gap-4`}>
              <h1>{`${module.name} Module`}</h1>
              <div
                className={`${styles.primaryBtnWrapper} d-flex align-items-center gap-5`}
              >
                <PrimaryButton handleClick={() => handlePurchase("soft")}>
                  <div className="d-flex flex-column align-items-center">
                    <p>{`e-Module - ${module.softCopyPrice}₹`}</p>
                    <p>
                      <strong>Buy Now !</strong>
                    </p>
                  </div>
                </PrimaryButton>
                {/*
                  <PrimaryButton handleClick={() => handlePurchase("hard")}>
                    <div className="d-flex flex-column align-items-center">
                      <p>{`Hard Copy Module - ${module.hardCopyPrice}₹`}</p>
                      <p>
                        <strong>Buy Now !</strong>
                      </p>
                    </div>
                  </PrimaryButton>
                */}
              </div>
              <div>
                <h2>Description</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatNewLine(module.description),
                  }}
                ></p>
              </div>
              <div>
                <h2>{`Topics Include in ${module.name} Module:`}</h2>
                <div className="d-flex flex-column gap-4">
                  {module.topics.map(({ title, description }, index) => (
                    <div key={index}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p>
                  <strong>Note :</strong> If you are placing an order for a
                  hardcopy module, it will be delivered to the address you
                  provided to us.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4 mx-auto">
            <strong>Powered By</strong>
            <img
              src="/Assets2/Premium-Modules/razorpay.png"
              alt="RazorPay brand logo"
            />
          </div>
        </div>

        {isModalOpen ? (
          <PurchaseForm
            purchaseType={purchaseType}
            handlePayNow={handlePayNow}
            closeModal={closeModal}
          />
        ) : (
          ""
        )}
      </HeroBackground>
    </section>
  );
};

export default HeroSection;
